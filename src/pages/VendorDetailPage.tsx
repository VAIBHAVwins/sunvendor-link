
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { vendors } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Star, CheckCircle, Clock } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const VendorDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const vendor = vendors.find(v => v.id === id);
  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Vendor Not Found</h2>
            <p className="mb-6">The vendor you're looking for doesn't exist or has been removed.</p>
            <Link to="/consumer/vendors">
              <Button>Go Back to Vendors</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const totalPrice = Object.values(vendor.priceDetails).reduce((sum, price) => sum + price, 0);
  
  const handleSiteVisitClick = () => {
    if (isUserLoggedIn) {
      navigate(`/payment/${vendor.id}`);
    } else {
      toast({
        title: "Login Required",
        description: "Please sign up or login to book a site visit",
        duration: 5000,
      });
      navigate(`/signup?redirect=/vendor/${vendor.id}`);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <Link to="/consumer/vendors" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Vendors
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">{vendor.name}</h1>
            <div className="flex items-center text-white/90">
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 fill-solar-yellow text-solar-yellow mr-1" />
                <span>{vendor.rating}</span>
                <span className="text-sm text-white/70 ml-1">({vendor.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{vendor.location} • {vendor.distance}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Price Breakdown</CardTitle>
                  <CardDescription>Detailed pricing for solar installation components</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(vendor.priceDetails).map(([key, price]) => {
                      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                      return (
                        <div key={key} className="flex justify-between py-1">
                          <span className="text-muted-foreground">{formattedKey}</span>
                          <span className="font-medium">₹{price.toLocaleString()}</span>
                        </div>
                      );
                    })}
                    <Separator className="my-2" />
                    <div className="flex justify-between py-2 font-semibold">
                      <span>Total Installation Cost</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Vendor Information</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Service Area</h4>
                        <p className="text-muted-foreground">
                          {vendor.location} and surrounding areas within 50 km
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Experience</h4>
                        <p className="text-muted-foreground">
                          10+ years in solar installation
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Warranty</h4>
                        <p className="text-muted-foreground">
                          5 years on installation, 25 years on solar panels
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Book a Site Visit</CardTitle>
                  <CardDescription>Get a detailed assessment at your location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Expert technician visit</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Detailed site assessment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Customized installation plan</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-solar-blue" />
                    <span>Usually scheduled within 48 hours</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex justify-between py-1 text-sm">
                      <span className="text-muted-foreground">Site Visit Charge</span>
                      <span>₹1,000</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm">
                      <span className="text-muted-foreground">Platform Fee</span>
                      <span>₹100</span>
                    </div>
                    <div className="flex justify-between py-1 text-sm">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span>₹18</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between py-2 font-semibold">
                      <span>Total Payable Amount</span>
                      <span>₹1,118</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button 
                    className="w-full bg-solar-orange hover:bg-solar-orange/90"
                    onClick={handleSiteVisitClick}
                  >
                    Book Site Visit Now
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/">I'll Come Back Later</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorDetailPage;
