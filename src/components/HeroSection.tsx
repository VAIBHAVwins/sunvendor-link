
import React from 'react';
import { Sun } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-sky-600 py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              EcoGrid AI: Solar Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Estimate costs, find reliable vendors, and transition to clean energy with ease.
            </p>
            <p className="text-white/90 italic">Smarter Solar, Greener Future</p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-amber-400 rounded-full opacity-20 animate-pulse-solar"></div>
              <Sun className="absolute inset-0 m-auto text-white h-32 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
