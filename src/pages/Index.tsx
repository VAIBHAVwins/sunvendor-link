
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import RoleSelection from '@/components/RoleSelection';
import NewsCard from '@/components/NewsCard';
import SchemeCard from '@/components/SchemeCard';
import HomeBanner from '@/components/HomeBanner';
import ServicesSection from '@/components/ServicesSection';
import { newsItems, schemeItems } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Motto Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-sky-600 py-2 text-center">
          <h5 className="text-white/80 text-sm italic">EcoGrid AI</h5>
          <p className="text-white text-xs font-light">Smarter Solar, Greener Future</p>
        </div>
        
        <HeroSection />
        
        <HomeBanner />
        
        <RoleSelection />
        
        <ServicesSection />
        
        {/* News Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-teal-700">Latest Solar News</h2>
            <p className="text-muted-foreground mb-8">Stay updated with the latest in solar and renewable energy</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Government Schemes Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-teal-700">Government Schemes</h2>
            <p className="text-muted-foreground mb-8">Explore solar subsidies and incentives available for you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {schemeItems.map(scheme => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-500 to-sky-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Go Solar?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards sustainable energy. Get an estimate for your location and connect with trusted vendors.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
