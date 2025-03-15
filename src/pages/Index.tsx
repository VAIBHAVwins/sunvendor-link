
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import RoleSelection from '@/components/RoleSelection';
import NewsCard from '@/components/NewsCard';
import SchemeCard from '@/components/SchemeCard';
import HomeBanner from '@/components/HomeBanner';
import { newsItems, schemeItems } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <HomeBanner />
        
        <RoleSelection />
        
        {/* News Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Latest Solar News</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Government Schemes</h2>
            <p className="text-muted-foreground mb-8">Explore solar subsidies and incentives available for you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {schemeItems.map(scheme => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-solar-yellow to-solar-orange">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Go Solar?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards sustainable energy. Get an estimate for your location and connect with trusted vendors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white rounded-md font-medium text-solar-orange hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
