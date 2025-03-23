import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NavbarPublic from '../components/NavbarPublic';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = login({ email, password });
      if (success) {
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <NavbarPublic />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-gradient-to-b from-white to-insurance-50">
        <div className="max-w-md w-full animate-fade-up">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 bg-insurance-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-insurance-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to manage your policy protection</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <a href="#" className="text-sm text-insurance-600 hover:text-insurance-700">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-insurance-600 hover:bg-insurance-700 text-white h-11"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-insurance-600 hover:text-insurance-700 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>For demo purposes, you can enter any email and password</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
