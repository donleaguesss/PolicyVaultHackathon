
import React from 'react';
import { Card } from '@/components/ui/card';
import { UserCog, Mail, Phone, FileText, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const NomineeCard = ({ nominee, onVerify, getPolicyName }) => {
  const statusColor = nominee.verified 
    ? 'bg-green-500' 
    : 'bg-amber-500';

  const statusIcon = nominee.verified 
    ? <Check className="h-4 w-4 text-white" /> 
    : <X className="h-4 w-4 text-white" />;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md animate-fade-up">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-insurance-600 text-white text-xs font-semibold px-3 py-1">
          {getPolicyName(nominee.policyId)}
        </div>
        <div className={`h-2 w-full ${statusColor}`}></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-insurance-50">
                <UserCog className="h-6 w-6 text-insurance-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{nominee.name}</h3>
                <p className="text-sm text-gray-500">{nominee.relationship}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className={`p-1 rounded-full ${statusColor}`}>
                {statusIcon}
              </div>
              <span className="text-sm font-medium">
                {nominee.verified ? 'Verified' : 'Pending'}
              </span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{nominee.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{nominee.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Policy ID</p>
                <p className="font-medium">{nominee.policyId}</p>
              </div>
            </div>
          </div>
          
          {!nominee.verified && (
            <div className="mt-4">
              <Alert variant="default" className="bg-amber-50 border-amber-200">
                <AlertTitle className="text-amber-700 text-sm font-medium">Verification Required</AlertTitle>
                <AlertDescription className="text-amber-600 text-xs">
                  This nominee needs to verify their email address
                </AlertDescription>
              </Alert>
              
              <Button 
                className="w-full mt-3 bg-insurance-600 hover:bg-insurance-700 text-white"
                onClick={() => onVerify(nominee.id)}
              >
                Send Verification Email
              </Button>
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-500">Nominee ID:</span>
                <span className="ml-1 font-medium">{nominee.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NomineeCard;
