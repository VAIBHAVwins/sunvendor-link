
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { vendors } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Smartphone, Bank } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PaymentPage = () => {
  const { vendorId } = useParams<{ vendorId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const vendor = vendors.find(v => v.id === vendorId);
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (!vendor) {
    navigate('/consumer/vendors');
    return null;
  }
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: "Your site visit has been booked successfully",
      });
      navigate('/');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Payment</h1>
            <p className="text-white/80">
              Complete your payment to book a site visit with {vendor.name}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment}>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className={`flex items-center space-x-2 rounded-md border p-4 ${paymentMethod === 'card' ? 'border-solar-blue bg-blue-50' : ''}`}>
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span>Credit/Debit Card</span>
                        </Label>
                      </div>
                      
                      <div className={`flex items-center space-x-2 rounded-md border p-4 ${paymentMethod === 'upi' ? 'border-solar-blue bg-blue-50' : ''}`}>
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex items-center cursor-pointer flex-1">
                          <Smartphone className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span>UPI Payment</span>
                        </Label>
                      </div>
                      
                      <div className={`flex items-center space-x-2 rounded-md border p-4 ${paymentMethod === 'netbanking' ? 'border-solar-blue bg-blue-50' : ''}`}>
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex items-center cursor-pointer flex-1">
                          <Bank className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span>Net Banking</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === 'card' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="Enter name as on card" required />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'upi' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="upiId">UPI ID</Label>
                          <Input id="upiId" placeholder="yourname@upi" required />
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'netbanking' && (
                      <div className="mt-6 space-y-4">
                        <div>
                          <Label htmlFor="bank">Select Bank</Label>
                          <select
                            id="bank"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select your bank</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="sbi">State Bank of India</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                            <option value="kotak">Kotak Mahindra Bank</option>
                          </select>
                        </div>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      className="w-full mt-6 bg-solar-orange hover:bg-solar-orange/90"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Pay ₹1,118"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Site Visit Details</h3>
                      <p className="text-sm text-muted-foreground">
                        Vendor: {vendor.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Location: {vendor.location}
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-2">Payment Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Site Visit Charge</span>
                          <span>₹1,000</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Platform Fee</span>
                          <span>₹100</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">GST (18% on Platform Fee)</span>
                          <span>₹18</span>
                        </div>
                        <Separator className="my-1" />
                        <div className="flex justify-between font-medium pt-1">
                          <span>Total Amount</span>
                          <span>₹1,118</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2 text-xs text-muted-foreground">
                      <p>
                        This payment is for booking a site visit only. The installation cost will be
                        quoted after the site assessment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;
