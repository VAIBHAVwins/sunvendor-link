
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
import RatingStars from '@/components/RatingStars';
import VendorRatingForm from '@/components/VendorRatingForm';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const VendorDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const vendor = vendors.find(v => v.id === id);
  
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // Simulating logged in user for demo
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
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
      setIsPaymentDialogOpen(true);
    } else {
      toast({
        title: "Login Required",
        description: "Please sign up or login to book a site visit",
        duration: 5000,
      });
      navigate(`/signup?redirect=/vendor/${vendor.id}`);
    }
  };
  
  const handlePaymentSubmit = () => {
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsPaymentDialogOpen(false);
      
      toast({
        title: "Payment Successful",
        description: "Your site visit has been booked successfully. The vendor will contact you soon.",
        duration: 5000,
      });
      
      navigate(`/consumer/dashboard?newBooking=true`);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col consumer-theme">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-500 to-sky-600 py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h5 className="text-white/80 italic">EcoGrid AI</h5>
              <p className="text-white font-light">Smarter Solar, Greener Future</p>
            </div>
            
            <Link to="/consumer/vendors" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Vendors
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">{vendor.name}</h1>
            <div className="flex items-center text-white/90">
              <div className="flex items-center mr-4">
                <RatingStars rating={vendor.rating} />
                <span className="ml-2">{vendor.rating}</span>
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
              <Card className="consumer-card mb-8">
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
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Vendor Information</h3>
                <Card className="consumer-card">
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
                
                {isUserLoggedIn && (
                  <div className="mt-8">
                    {showRatingForm ? (
                      <VendorRatingForm 
                        vendorId={vendor.id} 
                        vendorName={vendor.name}
                        onRatingSubmit={() => setShowRatingForm(false)}
                      />
                    ) : (
                      <Button 
                        onClick={() => setShowRatingForm(true)}
                        variant="outline"
                        className="w-full"
                      >
                        <Star className="mr-2 h-4 w-4" />
                        Rate this Vendor
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Card className="sticky top-4 consumer-card-highlight">
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
                    <Clock className="h-4 w-4 text-teal-500" />
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
                    className="w-full consumer-cta-button"
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
      
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Payment for Site Visit</DialogTitle>
            <DialogDescription>
              Select a payment method to book your site visit with {vendor.name}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div className="flex items-center space-x-2 border rounded-md p-3">
                <RadioGroupItem value="creditCard" id="creditCard" />
                <Label htmlFor="creditCard" className="flex-grow cursor-pointer">
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-muted-foreground">Pay securely with your card</div>
                </Label>
                <div className="flex space-x-1">
                  <div className="w-8 h-5 bg-blue-500 rounded"></div>
                  <div className="w-8 h-5 bg-orange-500 rounded"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-3">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex-grow cursor-pointer">
                  <div className="font-medium">UPI</div>
                  <div className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm, etc.</div>
                </Label>
                <div className="w-8 h-5 bg-green-500 rounded"></div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-3">
                <RadioGroupItem value="netBanking" id="netBanking" />
                <Label htmlFor="netBanking" className="flex-grow cursor-pointer">
                  <div className="font-medium">Net Banking</div>
                  <div className="text-sm text-muted-foreground">All major banks supported</div>
                </Label>
                <div className="w-8 h-5 bg-gray-300 rounded"></div>
              </div>
            </RadioGroup>
          </div>
          
          <DialogFooter className="sm:justify-between">
            <div className="flex items-center">
              <span>Total: </span>
              <span className="font-bold ml-1">₹1,118</span>
            </div>
            <Button 
              type="button" 
              className="consumer-cta-button"
              disabled={isProcessingPayment}
              onClick={handlePaymentSubmit}
            >
              {isProcessingPayment ? 'Processing...' : 'Pay Now'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default VendorDetailPage;
