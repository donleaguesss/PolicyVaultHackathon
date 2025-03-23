
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nomineeMode, setNomineeMode] = useState(false);

  useEffect(() => {
    // Check if user is stored in localStorage on mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Check if in nominee mode
    const isNomineeMode = localStorage.getItem('nomineeMode') === 'true';
    setNomineeMode(isNomineeMode);
    
    setLoading(false);
  }, []);

  const login = (credentials) => {
    // Mock login functionality
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo, we'll accept any email/password with basic validation
      if (!credentials.email || !credentials.password) {
        toast.error('Please enter both email and password');
        setLoading(false);
        return false;
      }
      
      // Create mock user data
      const userData = {
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        name: credentials.email.split('@')[0],
        email: credentials.email,
        role: 'policyholder',
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Login successful');
      setLoading(false);
      return true;
    }, 1000);
    
    return true; // Return true to allow navigation in component
  };

  const nomineeLogin = (email, otp) => {
    // Mock nominee login functionality
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (!email || !otp) {
        toast.error('Please enter both email and OTP');
        setLoading(false);
        return false;
      }
      
      // Create mock nominee data
      const nomineeData = {
        id: 'nom_' + Math.random().toString(36).substring(2, 9),
        name: email.split('@')[0],
        email: email,
        role: 'nominee',
      };
      
      setUser(nomineeData);
      setNomineeMode(true);
      localStorage.setItem('user', JSON.stringify(nomineeData));
      localStorage.setItem('nomineeMode', 'true');
      toast.success('Nominee login successful');
      setLoading(false);
      return true;
    }, 1000);
    
    return true;
  };

  const logout = () => {
    setUser(null);
    setNomineeMode(false);
    localStorage.removeItem('user');
    localStorage.removeItem('nomineeMode');
    toast.info('You have been logged out');
  };

  const value = {
    user,
    loading,
    login,
    nomineeLogin,
    logout,
    isAuthenticated: !!user,
    nomineeMode,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
