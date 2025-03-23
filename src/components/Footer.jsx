
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-insurance-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">LI</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-insurance-800">PolicyVault</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Ensuring financial security for your loved ones when they need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-insurance-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-insurance-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-insurance-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-insurance-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-gray-600 hover:text-insurance-600 transition-colors">About Us</Link></li>
              <li><Link to="/#features" className="text-gray-600 hover:text-insurance-600 transition-colors">Features</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-insurance-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-insurance-600 mt-0.5" />
                <span className="text-gray-600">support@lifeinsure.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-insurance-600 mt-0.5" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-insurance-600 mt-0.5" />
                <span className="text-gray-600">123 Insurance Avenue, Financial District, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LifeInsure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
