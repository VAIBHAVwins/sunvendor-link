
import React from 'react';
import { Sun, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-solar-yellow" />
          <span className="font-bold text-xl text-solar-dark">EcoGrid AI</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-solar-dark hover:text-solar-orange transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-solar-dark hover:text-solar-orange transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-solar-dark hover:text-solar-orange transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-solar-dark" />
        </button>
      </div>
    </header>
  );
};

export default Header;
