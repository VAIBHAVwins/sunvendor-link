
import React, { useState } from 'react';
import { Sun, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LogoutButton from './LogoutButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-solar-yellow" />
          <span className="font-bold text-xl text-solar-dark">EcoGrid AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <div className="group relative">
            <button className="text-solar-dark hover:text-solar-orange transition-colors py-2 px-3 rounded-md hover:bg-gray-100 transform hover:scale-105 duration-200">
              About Us
            </button>
          </div>
          
          <div className="group relative">
            <button className="text-solar-dark hover:text-solar-orange transition-colors py-2 px-3 rounded-md hover:bg-gray-100 transform hover:scale-105 duration-200">
              Solutions
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200">
              <Link to="/consumer/new-installation/residential" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                New Installation
              </Link>
              <Link to="/consumer/upgrade" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Upgradation
              </Link>
              <Link to="/services" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Services
              </Link>
            </div>
          </div>
          
          <div className="group relative">
            <button className="text-solar-dark hover:text-solar-orange transition-colors py-2 px-3 rounded-md hover:bg-gray-100 transform hover:scale-105 duration-200">
              Installation Types
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200">
              <Link to="/consumer/new-installation/residential" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Residential
              </Link>
              <Link to="/consumer/new-installation/commercial" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Commercial
              </Link>
              <Link to="/consumer/new-installation/industrial" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Industrial
              </Link>
            </div>
          </div>
          
          <div className="group relative">
            <button className="text-solar-dark hover:text-solar-orange transition-colors py-2 px-3 rounded-md hover:bg-gray-100 transform hover:scale-105 duration-200">
              Support
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200">
              <Link to="/enquiry" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Enquiry
              </Link>
              <Link to="/complaint" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                Complaint
              </Link>
            </div>
          </div>
          
          <div className="group relative">
            <button className="text-solar-dark hover:text-solar-orange transition-colors py-2 px-3 rounded-md hover:bg-gray-100 transform hover:scale-105 duration-200">
              <User className="h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200">
              {user ? (
                <>
                  <Link to={user.userType === 'vendor' ? '/vendor/dashboard' : '/consumer/dashboard'} className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                    {user.userType === 'vendor' ? 'Vendor Dashboard' : 'Customer Dashboard'}
                  </Link>
                  <div className="px-4 py-2">
                    <LogoutButton variant="link" className="w-full justify-start p-0 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200" />
                  </div>
                </>
              ) : (
                <>
                  <Link to="/vendor/login" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                    Vendor Login
                  </Link>
                  <Link to="/signup" className="block px-4 py-2 text-solar-dark hover:bg-solar-yellow/10 hover:text-solar-orange transform hover:translate-x-1 duration-200">
                    Customer Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-solar-dark" />
          ) : (
            <Menu className="h-6 w-6 text-solar-dark" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block py-2 text-solar-dark hover:text-solar-orange">
              About Us
            </Link>
            
            <div className="py-2">
              <span className="block font-medium text-solar-dark mb-1">Solutions</span>
              <Link to="/consumer/new-installation/residential" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                New Installation
              </Link>
              <Link to="/consumer/upgrade" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Upgradation
              </Link>
              <Link to="/services" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Services
              </Link>
            </div>
            
            <div className="py-2">
              <span className="block font-medium text-solar-dark mb-1">Installation Types</span>
              <Link to="/consumer/new-installation/residential" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Residential
              </Link>
              <Link to="/consumer/new-installation/commercial" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Commercial
              </Link>
              <Link to="/consumer/new-installation/industrial" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Industrial
              </Link>
            </div>
            
            <div className="py-2">
              <span className="block font-medium text-solar-dark mb-1">Support</span>
              <Link to="/enquiry" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Enquiry
              </Link>
              <Link to="/complaint" className="block py-1 pl-4 text-solar-dark hover:text-solar-orange">
                Complaint
              </Link>
            </div>
            
            {user ? (
              <>
                <Link to={user.userType === 'vendor' ? '/vendor/dashboard' : '/consumer/dashboard'} className="block py-2 text-solar-dark hover:text-solar-orange">
                  {user.userType === 'vendor' ? 'Vendor Dashboard' : 'Customer Dashboard'}
                </Link>
                
                <div className="py-2">
                  <LogoutButton variant="ghost" className="w-full justify-start" />
                </div>
              </>
            ) : (
              <>
                <Link to="/vendor/login" className="block py-2 text-solar-dark hover:text-solar-orange">
                  Vendor Login
                </Link>
                <Link to="/signup" className="block py-2 text-solar-dark hover:text-solar-orange">
                  Customer Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
