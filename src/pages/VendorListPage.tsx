
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VendorCard from '@/components/VendorCard';
import { vendors } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';

const VendorListPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const gridType = searchParams.get('gridType');
  
  const isOnGrid = gridType === 'on-grid';
  
  const typeTitle = {
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial'
  }[type || ''] || 'Installation';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Available Vendors</h1>
            <p className="text-white/80">
              Here are the solar vendors available for your {typeTitle} {gridType} installation
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-start">
            <Info className="h-5 w-5 text-solar-blue mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium mb-1">Subsidy Eligibility</h3>
              <p className="text-sm text-gray-600 mb-2">
                {isOnGrid 
                  ? "Your installation is eligible for government subsidies under the solar rooftop program."
                  : "Off-grid installations are currently not eligible for government subsidies."}
              </p>
              <div className="flex items-center">
                <Badge className={isOnGrid ? "bg-green-500" : "bg-red-500"}>
                  {isOnGrid ? "Eligible for Subsidy" : "Not Eligible for Subsidy"}
                </Badge>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Nearby Vendors ({vendors.length})</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorListPage;
