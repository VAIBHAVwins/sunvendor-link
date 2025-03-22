
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Maintenance Services</h1>
            <p className="text-white/80">
              Keep your solar installation running at peak efficiency
            </p>
          </div>
        </div>
        
        <ServicesSection isConsumer={true} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
