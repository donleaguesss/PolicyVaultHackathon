import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, UserCheck } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-insurance-50 overflow-hidden pt-16">
      {/* Background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-insurance-100 opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-insurance-200 opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animate-fade-up  lg:pl-5">
            <div className="inline-flex items-center space-x-2 bg-insurance-50 rounded-full py-1 px-3 border border-insurance-100">
              <span className="text-insurance-700 text-sm font-medium">
                Protecting What Matters Most
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ensuring Your Loved Ones{" "}
              <span className="text-insurance-600">Are Protected</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Our platform ensures nominees are notified of policies when
              policyholders pass away, providing financial security when it
              matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/login">
                <Button className="bg-insurance-600 hover:bg-insurance-700 text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="border-insurance-600 text-insurance-600 hover:bg-insurance-50 rounded-full px-8 py-6 h-auto text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-insurance-100 to-insurance-50 rounded-3xl transform rotate-3 opacity-70"></div>
            <div className="relative glass-card rounded-3xl p-8 shadow-xl animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="rounded-lg bg-insurance-100 p-2">
                    <Shield className="h-6 w-6 text-insurance-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Policy Protection
                    </h3>
                    <p className="text-sm text-gray-500">
                      Securely store and manage all your insurance policies in
                      one place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="rounded-lg bg-insurance-100 p-2">
                    <UserCheck className="h-6 w-6 text-insurance-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Nominee Notification
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ensure your nominees are automatically notified when
                      needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="rounded-lg bg-insurance-100 p-2">
                    <Heart className="h-6 w-6 text-insurance-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Peace of Mind</h3>
                    <p className="text-sm text-gray-500">
                      Rest easy knowing your family's financial future is
                      secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
