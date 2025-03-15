
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const RoleSelection = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Choose Your Role</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 text-center">
              <div className="w-16 h-16 mx-auto bg-solar-blue/10 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-solar-blue" />
              </div>
              <CardTitle>I am a Consumer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Looking to install, upgrade, or service solar solutions for your home, office, or industry.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center pt-4">
              <Button asChild className="bg-solar-blue hover:bg-solar-blue/90">
                <Link to="/consumer">
                  Continue as Consumer
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 text-center">
              <div className="w-16 h-16 mx-auto bg-solar-orange/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-solar-orange" />
              </div>
              <CardTitle>I am a Vendor</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Offer your solar products and services to potential customers looking for solar solutions.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center pt-4">
              <Button asChild className="bg-solar-orange hover:bg-solar-orange/90">
                <Link to="/vendor">
                  Continue as Vendor
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
