
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Zap } from 'lucide-react';
import { InstallationType } from '@/types';

const InstallationTypePage = () => {
  const { type } = useParams<{ type: string }>();
  const installationType = type as InstallationType;
  
  const typeTitle = {
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial'
  }[type || ''] || 'Installation';
  
  const typeDescription = {
    residential: 'Solar solutions for your home',
    commercial: 'Solar solutions for your office or commercial property',
    industrial: 'Solar solutions for your factory or industrial facility'
  }[type || ''] || 'Choose the right solar solution for your needs';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">{typeTitle} Installation</h1>
            <p className="text-white/80">{typeDescription}</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to={`/consumer/new-installation/${type}/on-grid`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-solar-blue">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-solar-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-solar-blue" />
                  </div>
                  <CardTitle>On-Grid System</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Grid-connected solar system that allows you to sell excess power back to the electricity grid
                  </p>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✓</span>
                      <p className="text-left">Eligible for government subsidies</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✓</span>
                      <p className="text-left">Lower initial investment</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✓</span>
                      <p className="text-left">Sell excess power to grid</p>
                    </div>
                  </div>
                  <Button className="w-full bg-solar-blue hover:bg-solar-blue/90">Select On-Grid</Button>
                </CardContent>
              </Card>
            </Link>
            
            <Link to={`/consumer/new-installation/${type}/off-grid`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-solar-orange">
                <CardHeader className="pb-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-solar-orange/10 rounded-full flex items-center justify-center mb-4">
                    <Cloud className="h-8 w-8 text-solar-orange" />
                  </div>
                  <CardTitle>Off-Grid System</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Standalone solar system with battery storage for areas without reliable grid connection
                  </p>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✓</span>
                      <p className="text-left">Complete energy independence</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✓</span>
                      <p className="text-left">Reliable power during outages</p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">✗</span>
                      <p className="text-left">Not eligible for subsidies</p>
                    </div>
                  </div>
                  <Button className="w-full bg-solar-orange hover:bg-solar-orange/90">Select Off-Grid</Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstallationTypePage;
