
import React from 'react';
import { 
  Shield, 
  UserCheck, 
  Bell, 
  BarChart3, 
  FileText, 
  Lock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-insurance-500" />,
      title: "Policy Management",
      description: "Securely store and manage all your insurance policies in one centralized location."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-insurance-500" />,
      title: "Nominee Management",
      description: "Easily add and update your policy nominees with complete information."
    },
    {
      icon: <Bell className="h-10 w-10 text-insurance-500" />,
      title: "Automated Notifications",
      description: "System automatically notifies nominees when a policyholder passes away."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-insurance-500" />,
      title: "Policy Analytics",
      description: "Visual analytics and reporting to help you understand your insurance coverage."
    },
    {
      icon: <FileText className="h-10 w-10 text-insurance-500" />,
      title: "Document Storage",
      description: "Securely store important insurance documents for easy access by nominees."
    },
    {
      icon: <Lock className="h-10 w-10 text-insurance-500" />,
      title: "Secure Access",
      description: "Bank-level security ensures your insurance information remains protected."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-insurance-50 rounded-full py-1 px-3 border border-insurance-100 mb-4">
            <span className="text-insurance-700 text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Insurance Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need to ensure your nominees are protected and informed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-insurance-50 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
