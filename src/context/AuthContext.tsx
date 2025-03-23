
import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';
import { useToast } from '@/hooks/use-toast';

type UserType = 'customer' | 'vendor';

interface AuthUser extends User {
  userType?: UserType;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  registerVendor: (email: string, password: string, vendorData: any) => Promise<void>;
  registerCustomer: (email: string, password: string, customerData: any) => Promise<void>;
  login: (email: string, password: string) => Promise<UserType>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Get user type from Firestore
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          const userData = userDoc.data();
          
          const authUser: AuthUser = currentUser;
          if (userData) {
            authUser.userType = userData.userType as UserType;
          }
          
          setUser(authUser);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Register vendor with custom data
  const registerVendor = async (email: string, password: string, vendorData: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Store additional vendor data in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        userType: 'vendor',
        ...vendorData,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error registering vendor:", error);
      throw error;
    }
  };

  // Register customer with custom data
  const registerCustomer = async (email: string, password: string, customerData: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Store additional customer data in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        userType: 'customer',
        ...customerData,
        createdAt: new Date()
      });
    } catch (error) {
      console.error("Error registering customer:", error);
      throw error;
    }
  };

  // Login user and return user type
  const login = async (email: string, password: string): Promise<UserType> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const userData = userDoc.data();
      
      if (!userData || !userData.userType) {
        throw new Error('User type not found');
      }
      
      return userData.userType as UserType;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
    } catch (error) {
      console.error("Error during logout:", error);
      toast({
        title: "Logout failed",
        description: "There was a problem logging you out",
        variant: "destructive"
      });
      throw error;
    }
  };

  const value = {
    user,
    isLoading,
    registerVendor,
    registerCustomer,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
