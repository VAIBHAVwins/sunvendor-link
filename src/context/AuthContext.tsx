
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: any | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<string | null>;
  registerCustomer: (email: string, password: string, userData: any) => Promise<void>;
  registerVendor: (email: string, password: string, vendorData: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check active session and set user on mount
    const checkUser = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error checking session:', error);
          return;
        }
        
        if (data.session) {
          const { data: userData } = await supabase.auth.getUser();
          
          if (userData.user) {
            const userWithType = {
              ...userData.user,
              userType: userData.user.user_metadata?.userType || 'customer'
            };
            setUser(userWithType);
          }
        }
      } catch (error) {
        console.error('Error in auth check:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();

    // Set up auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const { data } = await supabase.auth.getUser();
        if (data.user) {
          const userWithType = {
            ...data.user,
            userType: data.user.user_metadata?.userType || 'customer'
          };
          setUser(userWithType);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      // Sign out any existing session first
      await supabase.auth.signOut();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      const userType = data.user?.user_metadata?.userType || 'customer';
      
      return userType;
    } catch (error: any) {
      console.error('Login error:', error.message);
      throw new Error(error.message || 'Failed to login');
    }
  };

  const registerCustomer = async (email: string, password: string, userData: any) => {
    try {
      // Sign out any existing session first
      await supabase.auth.signOut();
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...userData,
            userType: 'customer',
          },
        }
      });

      if (error) throw error;

      // Store additional profile data in profiles table
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              full_name: userData.name,
              phone_number: userData.phone,
              user_type: 'customer',
              created_at: new Date()
            }
          ]);

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }
    } catch (error: any) {
      console.error('Registration error:', error.message);
      throw new Error(error.message || 'Failed to register');
    }
  };

  const registerVendor = async (email: string, password: string, vendorData: any) => {
    try {
      // Sign out any existing session first
      await supabase.auth.signOut();
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            ...vendorData,
            userType: 'vendor',
          },
        }
      });

      if (error) throw error;

      // Store additional vendor data in vendors table
      if (data.user) {
        const { error: vendorError } = await supabase
          .from('vendors')
          .insert([
            {
              id: data.user.id,
              company_name: vendorData.companyName,
              owner_name: vendorData.ownerName,
              email: email,
              phone_number: vendorData.phone,
              business_address: vendorData.address,
              company_desc: vendorData.description,
              created_at: new Date()
            }
          ]);

        if (vendorError) {
          console.error('Error creating vendor profile:', vendorError);
        }
      }
    } catch (error: any) {
      console.error('Vendor registration error:', error.message);
      throw new Error(error.message || 'Failed to register vendor');
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
    } catch (error: any) {
      console.error('Logout error:', error.message);
      throw new Error(error.message || 'Failed to logout');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        registerCustomer,
        registerVendor,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
