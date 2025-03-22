
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VendorCard from '@/components/VendorCard';
import { vendors } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Info, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Vendor } from '@/types';

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

  const [location, setLocation] = useState('Kolkata');
  const [radius, setRadius] = useState('10');
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    // Filter vendors based on radius (in a real app, this would be server-side)
    // For mock purposes, we'll show fewer vendors for smaller radius values
    let filtered = vendors;
    
    if (radius === '5') {
      filtered = vendors.filter(v => parseFloat(v.distance.replace(' km', '')) <= 5);
    } else if (radius === '10') {
      filtered = vendors.filter(v => parseFloat(v.distance.replace(' km', '')) <= 10);
    } else if (radius === '20') {
      filtered = vendors.filter(v => parseFloat(v.distance.replace(' km', '')) <= 20);
    }
    
    setFilteredVendors(filtered);
  }, [radius]);
  
  return (
    <div className="min-h-screen flex flex-col consumer-theme">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h5 className="text-white/80 italic">EcoGrid AI</h5>
              <p className="text-white font-light">Smarter Solar, Greener Future</p>
            </div>
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

          <div className="mb-6 consumer-card p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Find Nearby Vendors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-9"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Radius
                </label>
                <Select
                  value={radius}
                  onValueChange={setRadius}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select radius" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 km</SelectItem>
                    <SelectItem value="10">10 km</SelectItem>
                    <SelectItem value="20">20 km</SelectItem>
                    <SelectItem value="50">50 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-solar-blue consumer-cta-button">
                  Find Vendors
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Nearby Vendors ({filteredVendors.length})</h2>
          
          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredVendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found in your area</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any solar vendors within {radius} km of {location}. 
                Try increasing your search radius or changing your location.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorListPage;
