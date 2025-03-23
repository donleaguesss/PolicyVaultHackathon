
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, LayoutDashboard, FileText, Bell, Settings } from 'lucide-react';

const NavbarDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-insurance-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">LI</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-insurance-800">LifeInsure</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-gray-700 hover:text-insurance-600 transition-colors flex items-center gap-1.5">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/policies" className="text-gray-700 hover:text-insurance-600 transition-colors flex items-center gap-1.5">
            <FileText size={18} />
            <span>Policies</span>
          </Link>
          <Link to="/notifications" className="text-gray-700 hover:text-insurance-600 transition-colors flex items-center gap-1.5">
            <Bell size={18} />
            <span>Notifications</span>
          </Link>
          
          <div className="flex items-center space-x-4 ml-4">
            <div className="flex items-center space-x-2 text-sm bg-insurance-50 py-1 px-3 rounded-full">
              <User size={16} className="text-insurance-600" />
              <span className="text-insurance-800">{user?.name || 'User'}</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-gray-600 hover:text-red-600 hover:bg-red-50 flex items-center space-x-1"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-insurance-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 py-2 border-b border-gray-100 pb-4 mb-2">
              <User size={18} className="text-insurance-600" />
              <span className="text-insurance-800 font-medium">{user?.name || 'User'}</span>
            </div>
            
            <Link to="/dashboard" className="text-gray-700 hover:text-insurance-600 py-2 flex items-center gap-2" onClick={closeMenu}>
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
            <Link to="/policies" className="text-gray-700 hover:text-insurance-600 py-2 flex items-center gap-2" onClick={closeMenu}>
              <FileText size={18} />
              Policies
            </Link>
            <Link to="/notifications" className="text-gray-700 hover:text-insurance-600 py-2 flex items-center gap-2" onClick={closeMenu}>
              <Bell size={18} />
              Notifications
            </Link>
            <Link to="/settings" className="text-gray-700 hover:text-insurance-600 py-2 flex items-center gap-2" onClick={closeMenu}>
              <Settings size={18} />
              Settings
            </Link>
            
            <Button
              variant="outline"
              onClick={() => {
                logout();
                closeMenu();
              }}
              className="text-gray-600 hover:text-red-600 border-gray-300 w-full mt-2 flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarDashboard;
