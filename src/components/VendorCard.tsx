
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import { Vendor } from '@/types';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{vendor.name}</CardTitle>
        <div className="flex items-center space-x-1 mt-1">
          <Star className="h-4 w-4 fill-solar-yellow text-solar-yellow" />
          <span className="font-medium">{vendor.rating}</span>
          <span className="text-muted-foreground text-sm">({vendor.reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{vendor.location} • {vendor.distance}</span>
        </div>
        
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span>Solar Panels:</span>
            <span className="font-medium">₹{vendor.priceDetails.solarPanel.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Inverter:</span>
            <span className="font-medium">₹{vendor.priceDetails.inverter.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Battery:</span>
            <span className="font-medium">₹{vendor.priceDetails.battery.toLocaleString()}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            +{Object.keys(vendor.priceDetails).length - 3} more components
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-solar-orange hover:bg-solar-orange/90">
          <Link to={`/vendor/${vendor.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VendorCard;
