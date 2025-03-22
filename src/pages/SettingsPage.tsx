
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { User, Lock, Moon, Sun, LogIn, LogOut, Trash2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SettingsPage = () => {
  const [theme, setTheme] = useState('light');
  const [deleteReason, setDeleteReason] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // In a real app, you would implement theme switching logic here
  };

  const profileForm = useForm({
    defaultValues: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 98765 43210',
    }
  });

  const passwordForm = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  });

  const onProfileSubmit = (data: any) => {
    console.log('Profile updated:', data);
    // In a real app, you would save this data to the backend
  };

  const onPasswordSubmit = (data: any) => {
    console.log('Password updated:', data);
    // In a real app, you would update the password on the backend
  };

  const handleDeleteAccount = () => {
    if (!deleteReason.trim()) {
      alert('Please provide a reason for deleting your account.');
      return;
    }
    
    console.log('Account deletion requested with reason:', deleteReason);
    // In a real app, you would send this request to the backend
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">Account Settings</h1>
            <p className="text-white/80">
              Manage your profile, security and preferences
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="profile" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> Profile
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Lock className="mr-2 h-4 w-4" /> Security
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center">
                {theme === 'light' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />} Preferences
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center">
                {isLoggedIn ? <LogOut className="mr-2 h-4 w-4" /> : <LogIn className="mr-2 h-4 w-4" />} Account
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                      <FormField
                        control={profileForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={profileForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={profileForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">Save Changes</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...passwordForm}>
                    <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                      <FormField
                        control={passwordForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={passwordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">Update Password</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Theme Mode</h3>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark mode
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleTheme}
                      className="h-10 w-10"
                    >
                      {theme === 'light' ? (
                        <Moon className="h-5 w-5" />
                      ) : (
                        <Sun className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Current Theme</h3>
                      <p className="text-sm text-muted-foreground">
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{isLoggedIn ? 'Logout' : 'Login'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {isLoggedIn ? (
                      <>
                        <p>You are currently logged in as <strong>john.doe@example.com</strong></p>
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => setIsLoggedIn(false)}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <p>You are currently not logged in. Please login to access your account.</p>
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => setIsLoggedIn(true)}
                        >
                          <LogIn className="mr-2 h-4 w-4" />
                          Login
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-500">Delete Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </p>
                    
                    <div>
                      <Label htmlFor="deleteReason" className="text-sm font-medium">
                        Please provide a reason for deleting your account
                      </Label>
                      <Textarea
                        id="deleteReason"
                        value={deleteReason}
                        onChange={(e) => setDeleteReason(e.target.value)}
                        placeholder="Tell us why you're leaving..."
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <Button 
                      variant="destructive" 
                      className="w-full"
                      onClick={handleDeleteAccount}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SettingsPage;
