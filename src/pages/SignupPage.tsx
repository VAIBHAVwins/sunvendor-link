
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and send to the backend
    toast({
      title: "Account created successfully",
      description: "You're now signed in to SunVendor Link",
    });
    navigate(redirect);
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and send to the backend
    toast({
      title: "Signed in successfully",
      description: "Welcome back to SunVendor Link",
    });
    navigate(redirect);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <Tabs defaultValue="signup">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>
              </CardHeader>
              
              <TabsContent value="signup">
                <CardContent>
                  <CardDescription className="mb-4">
                    Create an account to continue with your solar journey
                  </CardDescription>
                  
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-solar-blue hover:bg-solar-blue/90">
                      Sign Up
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="text-sm text-center text-muted-foreground">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </CardFooter>
              </TabsContent>
              
              <TabsContent value="login">
                <CardContent>
                  <CardDescription className="mb-4">
                    Login to your account to continue
                  </CardDescription>
                  
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email" 
                        name="login-email"
                        type="email"
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input 
                        id="login-password" 
                        name="login-password"
                        type="password"
                        placeholder="Enter your password" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-solar-blue hover:bg-solar-blue/90">
                      Login
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="link" className="text-solar-blue">
                    Forgot password?
                  </Button>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignupPage;
