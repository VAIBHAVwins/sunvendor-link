
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-orange to-yellow-600 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Vendor Dashboard</h1>
            <p className="text-white/80">
              Connect with customers and grow your solar business with EcoGrid AI
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Register as a Vendor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Join our platform to connect with customers looking for solar solutions
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-solar-orange/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium">Access to Customers</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with customers actively looking for solar installations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-solar-orange/10 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-solar-orange" />
                    </div>
                    <div>
                      <h3 className="font-medium">Verified Projects</h3>
                      <p className="text-sm text-muted-foreground">
                        Get pre-qualified leads with verified requirements
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/vendor/register">
                  <Button className="w-full bg-solar-orange hover:bg-solar-orange/90">
                    Register as a Vendor <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Vendor Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Already registered? Log in to access your vendor dashboard
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-solar-blue/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-solar-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Manage Leads</h3>
                      <p className="text-sm text-muted-foreground">
                        Track and respond to customer inquiries and site visit requests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 w-8 h-8 bg-solar-blue/10 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-solar-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Update Profile</h3>
                      <p className="text-sm text-muted-foreground">
                        Keep your company information and pricing up to date
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/vendor/login">
                  <Button className="w-full bg-solar-blue hover:bg-solar-blue/90">
                    Vendor Login <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why Join as a Vendor?</h2>
            <p className="text-muted-foreground mb-8">
              EcoGrid AI is the leading platform connecting solar vendors with qualified customers
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-solar-orange mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Daily Customer Inquiries</div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-solar-orange mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-solar-orange mb-2">₹0</div>
                <div className="text-sm text-muted-foreground">Registration Fee</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorPage;
