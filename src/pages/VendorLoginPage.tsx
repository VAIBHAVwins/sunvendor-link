
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required")
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const VendorLoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  
  function onSubmit(values: LoginFormValues) {
    // In a real app, you would validate against your backend
    console.log(values);
    
    toast({
      title: "Login successful!",
      description: "Welcome back to EcoGrid AI.",
    });
    
    navigate('/vendor/dashboard');
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader className="bg-gradient-to-r from-solar-blue to-blue-700 text-white">
              <CardTitle className="text-2xl">Vendor Login</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center justify-between">
                    <Button variant="link" className="text-solar-blue p-0" onClick={() => navigate('/vendor/forgot-password')}>
                      Forgot Password?
                    </Button>
                    <Button type="submit" className="bg-solar-blue hover:bg-solar-blue/90">
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account yet?{" "}
                  <Button variant="link" className="text-solar-blue p-0" onClick={() => navigate('/vendor/register')}>
                    Register Now
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorLoginPage;
