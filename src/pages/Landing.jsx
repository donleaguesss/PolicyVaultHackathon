import React from 'react';
import NavbarPublic from '../components/NavbarPublic';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, AlertTriangle, Heart } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <NavbarPublic />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* How It Works */}
        <section className="py-20 bg-insurance-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-white rounded-full py-1 px-3 border border-insurance-100 mb-4">
                <span className="text-insurance-700 text-sm font-medium">How It Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Process, Powerful Protection</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform ensures your nominees are informed and protected through a simple, secure process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative animate-fade-up">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-insurance-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-insurance-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Register Your Policies</h3>
                <p className="text-gray-600">
                  Securely add your insurance policies and upload relevant documents to your account.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative animate-fade-up" style={{ animationDelay: '100ms' }}>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-insurance-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="mb-6">
                  <AlertTriangle className="h-12 w-12 text-insurance-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Add Nominee Information</h3>
                <p className="text-gray-600">
                  Designate nominees for each policy and provide their contact information for future notifications.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-insurance-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="mb-6">
                  <Heart className="h-12 w-12 text-insurance-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rest Assured</h3>
                <p className="text-gray-600">
                  Our system automatically notifies your nominees when needed, ensuring they receive the benefits they deserve.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="bg-insurance-600 hover:bg-insurance-700 text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all animate-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-insurance-50 rounded-full py-1 px-3 border border-insurance-100 mb-4">
                <span className="text-insurance-700 text-sm font-medium">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why We Created LifeInsure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Born from a personal experience of unclaimed policies, we built a platform to ensure no family misses out on the financial protection they deserve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-up">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  We founded LifeInsure after witnessing families struggle to identify and claim insurance policies after losing loved ones. Too often, policies go unclaimed because nominees are unaware they exist.
                </p>
                <p className="text-gray-600 mb-4">
                  Our mission is simple: to ensure that every insurance policy fulfills its purpose by connecting nominees with the financial protection they're entitled to during difficult times.
                </p>
                <p className="text-gray-600 mb-8">
                  Through secure technology and compassionate service, we help policyholders create a safety net that works exactly as intended—providing support precisely when it's needed most.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-insurance-600">5K+</div>
                    <div className="text-sm text-gray-500">Policies Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-insurance-600">98%</div>
                    <div className="text-sm text-gray-500">Successful Claims</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-insurance-600">24/7</div>
                    <div className="text-sm text-gray-500">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-up">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-insurance-100 rounded-2xl relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                      alt="Family financial security" 
                      className="object-cover w-full h-full rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-insurance-900/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-semibold text-xl">Protecting families' financial futures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-insurance-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:max-w-2xl text-white animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your family's financial future?</h2>
                <p className="text-insurance-100 text-lg">
                  Join thousands of policyholders who trust LifeInsure to ensure their insurance protection reaches their loved ones.
                </p>
              </div>
              
              <Button 
                className="bg-white text-insurance-600 hover:bg-insurance-50 rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all animate-fade-up"
              >
                Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
