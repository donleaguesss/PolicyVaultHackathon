
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, CheckCircle, Shield } from 'lucide-react';
import { toast } from 'sonner';

const NomineeVerifyModal = ({ nominee, onClose, onVerify }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendVerification = () => {
    setIsLoading(true);
    
    // Simulate API call to send verification email
    setTimeout(() => {
      setEmailSent(true);
      setIsLoading(false);
      onVerify(nominee.id);
      toast.success(`Verification email sent to ${nominee.email}`);
    }, 1500);
  };
  
  return (
    <Card className="p-6 max-w-md mx-auto">
      {!emailSent ? (
        <>
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-insurance-50 rounded-full flex items-center justify-center">
              <Mail className="h-8 w-8 text-insurance-600" />
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-center mb-2">
            Verify {nominee.name}
          </h2>
          
          <p className="text-gray-600 text-center mb-6">
            Send a verification email to {nominee.name} at {nominee.email}
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <p className="text-sm text-gray-700">
                <strong>Nominee:</strong> {nominee.name}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Email:</strong> {nominee.email}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Relationship:</strong> {nominee.relationship}
              </p>
            </div>
            
            <div className="text-sm text-gray-600">
              The nominee will receive an email with instructions to verify their identity and access policy details.
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              className="bg-insurance-600 hover:bg-insurance-700 text-white"
              onClick={handleSendVerification}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Verification Email'}
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-center mb-2">
            Verification Email Sent
          </h2>
          
          <p className="text-gray-600 text-center mb-6">
            A verification email has been sent to {nominee.email}
          </p>
          
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50 mb-6">
            <p className="text-sm text-gray-700 mb-2">
              The nominee will now:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Receive an email with a verification link</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Click the link to verify their identity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Have access to view policy details</span>
              </li>
            </ul>
          </div>
          
          <Button 
            className="w-full bg-insurance-600 hover:bg-insurance-700 text-white"
            onClick={onClose}
          >
            Close
          </Button>
        </>
      )}
    </Card>
  );
};

export default NomineeVerifyModal;
