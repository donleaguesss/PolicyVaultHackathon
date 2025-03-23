
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Shield, Mail, KeyRound } from 'lucide-react';
import { toast } from 'sonner';
import Footer from '../components/Footer';
import NavbarPublic from '../components/NavbarPublic';

const NomineeLogin = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { nomineeLogin } = useAuth();
  const navigate = useNavigate();

  const handleRequestOTP = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to send OTP
    setTimeout(() => {
      toast.success(`OTP sent to ${email}`);
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      toast.error('Please enter a valid OTP');
      return;
    }
    
    setIsLoading(true);
    
    // Call nomineeLogin function
    const success = nomineeLogin(email, otp);
    if (success) {
      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPublic />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-insurance-50 flex items-center justify-center">
              <Shield className="h-8 w-8 text-insurance-600" />
            </div>
          </div>
          
          <h2 className="text-center text-2xl font-bold mb-2">
            Nominee Access
          </h2>
          
          <p className="text-center text-gray-600 mb-8">
            Access policyholder information as a verified nominee
          </p>
          
          {step === 1 ? (
            <form onSubmit={handleRequestOTP} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email address"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Enter the email address registered as a nominee
                </p>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-insurance-600 hover:bg-insurance-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Sending OTP...' : 'Request OTP'}
              </Button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Are you a policyholder? <a href="/login" className="text-insurance-600 font-medium hover:text-insurance-700">Log in here</a>
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    placeholder="Enter the OTP sent to your email"
                    className="pl-10"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                  disabled={isLoading}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-insurance-600 hover:bg-insurance-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </Button>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  variant="link" 
                  className="text-insurance-600 hover:text-insurance-700"
                  onClick={handleRequestOTP}
                  disabled={isLoading}
                >
                  Resend OTP
                </Button>
              </div>
            </form>
          )}
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default NomineeLogin;
