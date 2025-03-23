
import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Calendar, User, DollarSign } from 'lucide-react';

const PolicyCard = ({ policy }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md animate-fade-up">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-insurance-600 text-white text-xs font-semibold px-3 py-1">
          {policy.status}
        </div>
        <div className={`h-2 w-full ${policy.status === 'Active' ? 'bg-green-500' : policy.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'}`}></div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-insurance-50">
                <Shield className="h-6 w-6 text-insurance-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{policy.name}</h3>
                <p className="text-sm text-gray-500">{policy.company}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-insurance-700">${policy.value.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Sum Assured</div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Start Date</p>
                <p className="font-medium">{policy.startDate}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">End Date</p>
                <p className="font-medium">{policy.endDate}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Nominees</p>
                <p className="font-medium">{policy.nominees}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-gray-500">Premium</p>
                <p className="font-medium">${policy.premium}/month</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-500">Policy ID:</span>
                <span className="ml-1 font-medium">{policy.id}</span>
              </div>
              <button className="text-insurance-600 text-sm font-medium hover:text-insurance-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PolicyCard;
