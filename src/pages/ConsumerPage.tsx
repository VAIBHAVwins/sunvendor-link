
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Building2, Factory, Wrench, ArrowUpCircle } from 'lucide-react';

const ConsumerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Consumer Dashboard</h1>
            <p className="text-white/80">
              Explore solar options for your home, business, or industrial needs
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8">
            {/* New Installation Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">New Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Install solar solutions for your property based on your requirements
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/consumer/new-installation/residential">
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-solar-blue">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-solar-blue/10 rounded-full flex items-center justify-center mb-3">
                          <Home className="h-6 w-6 text-solar-blue" />
                        </div>
                        <h3 className="font-medium mb-2">Residential</h3>
                        <p className="text-sm text-muted-foreground">
                          Solar solutions for homes and apartments
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/consumer/new-installation/commercial">
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-solar-blue">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-solar-blue/10 rounded-full flex items-center justify-center mb-3">
                          <Building2 className="h-6 w-6 text-solar-blue" />
                        </div>
                        <h3 className="font-medium mb-2">Commercial</h3>
                        <p className="text-sm text-muted-foreground">
                          Solar solutions for offices and commercial buildings
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/consumer/new-installation/industrial">
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-solar-blue">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-solar-blue/10 rounded-full flex items-center justify-center mb-3">
                          <Factory className="h-6 w-6 text-solar-blue" />
                        </div>
                        <h3 className="font-medium mb-2">Industrial</h3>
                        <p className="text-sm text-muted-foreground">
                          Solar solutions for factories and industrial complexes
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            {/* Upgradation Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Upgradation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Upgrade your existing solar setup for better efficiency
                </p>
                
                <Link to="/consumer/upgradation">
                  <Button className="w-full bg-solar-orange hover:bg-solar-orange/90">
                    <ArrowUpCircle className="mr-2 h-4 w-4" />
                    Explore Upgrade Options
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Services Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Maintenance, repair, and other services for your solar system
                </p>
                
                <Link to="/consumer/services">
                  <Button className="w-full bg-solar-blue hover:bg-solar-blue/90">
                    <Wrench className="mr-2 h-4 w-4" />
                    Browse Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsumerPage;
