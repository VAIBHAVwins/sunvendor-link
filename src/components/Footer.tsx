
import React from 'react';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-solar-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-6 w-6 text-solar-yellow" />
              <span className="font-bold text-lg">SunVendor Link</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting solar vendors and consumers for a greener future.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solar Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consumer/new-installation" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  New Installation
                </Link>
              </li>
              <li>
                <Link to="/consumer/upgradation" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  Upgradation
                </Link>
              </li>
              <li>
                <Link to="/consumer/services" className="text-gray-300 hover:text-solar-yellow transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-solar-yellow" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-solar-yellow" />
                <span className="text-gray-300">info@sunvendorlink.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-solar-yellow" />
                <span className="text-gray-300">123 Solar Street, Green City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SunVendor Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
