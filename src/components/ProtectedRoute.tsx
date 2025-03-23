
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType?: 'vendor' | 'customer' | 'both';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  userType = 'both'
}) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show loading spinner or placeholder while checking authentication
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  // Check for the user type
  if (userType !== 'both' && user.userType !== userType) {
    // User doesn't have the correct type, redirect to appropriate dashboard
    return <Navigate to={user.userType === 'vendor' ? '/vendor/dashboard' : '/consumer/dashboard'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
