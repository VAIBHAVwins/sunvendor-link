
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sun } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-solar-blue to-solar-dark py-16 md:py-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-solar-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-solar-orange rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Connecting Solar Vendors & Consumers
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Estimate costs, find reliable vendors, and transition to clean energy with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-solar-yellow hover:bg-solar-yellow/90 text-solar-dark font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-solar-yellow rounded-full opacity-20 animate-pulse-solar"></div>
              <Sun className="absolute inset-0 m-auto text-white h-32 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
