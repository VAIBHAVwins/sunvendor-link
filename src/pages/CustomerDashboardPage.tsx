
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MessageSquare, Construction, Wallet, Settings, User, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const mockInstallations = [
  {
    id: 'inst-001',
    type: 'Residential On-Grid',
    status: 'Site Assessment',
    vendor: 'SolarTech Solutions',
    date: '2023-06-10',
    amount: 85000,
    progress: 30,
  },
  {
    id: 'inst-002',
    type: 'Commercial Off-Grid',
    status: 'Installation Complete',
    vendor: 'GreenEnergy Systems',
    date: '2023-04-22',
    amount: 320000,
    progress: 100,
  }
];

const mockEnquiries = [
  {
    id: 'enq-001',
    subject: 'Maintenance Query',
    date: '2023-06-12',
    status: 'Replied',
    vendorName: 'SolarTech Solutions',
  },
  {
    id: 'enq-002',
    subject: 'Upgrade Options',
    date: '2023-06-08',
    status: 'Pending',
    vendorName: 'GreenSolar Energy',
  },
  {
    id: 'enq-003',
    subject: 'Panel Cleaning',
    date: '2023-06-01',
    status: 'Replied',
    vendorName: 'SolarTech Solutions',
  }
];

const installationSteps = [
  'Order Placed',
  'Payment Confirmed',
  'Site Assessment',
  'Design Approval',
  'Permit Acquisition',
  'Installation',
  'Grid Connection',
  'Final Inspection',
  'Handover'
];

const CustomerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Customer Dashboard</h1>
            <p className="text-white/80 mt-2">
              Track your installations, enquiries, and account information
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b mb-6">
              <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="installations" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  My Installations
                </TabsTrigger>
                <TabsTrigger 
                  value="enquiries" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  Enquiries
                </TabsTrigger>
                <TabsTrigger 
                  value="profile" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  Profile
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Installations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2</div>
                    <p className="text-sm text-muted-foreground mt-1">1 active installation</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Investment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">₹405,000</div>
                    <p className="text-sm text-muted-foreground mt-1">Across all installations</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Enquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                    <p className="text-sm text-muted-foreground mt-1">1 pending response</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Installations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockInstallations.map((installation) => (
                        <div key={installation.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                          <div>
                            <h3 className="font-medium">{installation.type}</h3>
                            <div className="flex items-center mt-1">
                              <Badge className={installation.progress === 100 ? "bg-green-500" : "bg-blue-500"}>
                                {installation.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground ml-2">
                                {new Date(installation.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveTab("installations")}
                          >
                            Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Enquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockEnquiries.slice(0, 3).map((enquiry) => (
                        <div key={enquiry.id} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                          <div>
                            <h3 className="font-medium">{enquiry.subject}</h3>
                            <div className="flex items-center mt-1">
                              <Badge className={enquiry.status === 'Replied' ? "bg-green-500" : "bg-amber-500"}>
                                {enquiry.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground ml-2">
                                {new Date(enquiry.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setActiveTab("enquiries")}
                          >
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="installations" className="mt-0">
              <h2 className="text-xl font-semibold mb-6">My Solar Installations</h2>
              
              {mockInstallations.map((installation) => (
                <Card key={installation.id} className="mb-6">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{installation.type} Installation</CardTitle>
                      <Badge className={installation.progress === 100 ? "bg-green-500" : "bg-blue-500"}>
                        {installation.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Vendor</p>
                        <p className="font-medium">{installation.vendor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Installation Date</p>
                        <p className="font-medium">{new Date(installation.date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Amount</p>
                        <p className="font-medium">₹{installation.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Installation Progress</h3>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                          <div 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-solar-blue"
                            style={{ width: `${installation.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {installationSteps.map((step, index) => {
                          const stepProgress = Math.floor((index / (installationSteps.length - 1)) * 100);
                          const isCompleted = installation.progress >= stepProgress;
                          const isCurrent = index === installationSteps.findIndex((_, i) => 
                            Math.floor((i / (installationSteps.length - 1)) * 100) > installation.progress
                          ) - 1;
                          
                          return (
                            <div key={step} className="flex items-center">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                                isCompleted 
                                  ? 'bg-solar-blue text-white' 
                                  : 'bg-gray-200 text-gray-400'
                              } ${isCurrent ? 'ring-2 ring-solar-blue ring-offset-2' : ''}`}>
                                {isCompleted ? (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  index + 1
                                )}
                              </div>
                              <span className={`${isCompleted ? 'text-solar-dark' : 'text-gray-500'} ${isCurrent ? 'font-medium' : ''}`}>
                                {step}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="enquiries" className="mt-0">
              <h2 className="text-xl font-semibold mb-6">My Enquiries</h2>
              
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-1 divide-y">
                      {mockEnquiries.map((enquiry) => (
                        <div key={enquiry.id} className="p-4 hover:bg-muted/50">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{enquiry.subject}</h3>
                              <div className="flex items-center mt-1">
                                <span className="text-sm text-muted-foreground">
                                  To: {enquiry.vendorName}
                                </span>
                                <span className="text-sm text-muted-foreground mx-2">•</span>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(enquiry.date).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <Badge className={enquiry.status === 'Replied' ? "bg-green-500" : "bg-amber-500"}>
                              {enquiry.status}
                            </Badge>
                          </div>
                          <div className="mt-2 flex justify-end space-x-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            {enquiry.status === 'Replied' && (
                              <Button variant="outline" size="sm">View Response</Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 flex justify-end">
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Create New Enquiry
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="mt-0">
              <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => {}}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => {}}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-between"
                        onClick={() => {}}
                      >
                        <div className="flex items-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                          </svg>
                          Toggle Theme
                        </div>
                        <span className="text-sm font-medium">Light</span>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200"
                        onClick={() => {}}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="mr-2 h-4 w-4"
                        >
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">Rahul Sharma</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">rahul.sharma@example.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">123 Sunshine Road, Kolkata, West Bengal - 700001</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomerDashboardPage;
