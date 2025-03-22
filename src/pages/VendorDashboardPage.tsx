
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Plus, Upload, PackageCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import VendorProductList from '@/components/VendorProductList';
import AddProductForm from '@/components/AddProductForm';

const VendorDashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-blue-700 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">Vendor Dashboard</h1>
            <p className="text-white/80 mt-2">
              Manage your products and customer inquiries
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
                  value="products" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  Products
                </TabsTrigger>
                <TabsTrigger 
                  value="inquiries" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-solar-blue rounded-none data-[state=active]:shadow-none py-3 px-4"
                >
                  Customer Inquiries
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">7</div>
                    <p className="text-sm text-muted-foreground mt-1">+2 added this month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Customer Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-sm text-muted-foreground mt-1">5 new inquiries</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Completed Orders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">8</div>
                    <p className="text-sm text-muted-foreground mt-1">₹340,000 revenue</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button 
                        variant="outline" 
                        className="h-auto py-6 flex flex-col items-center justify-center gap-2 border-dashed"
                        onClick={() => setActiveTab("products")}
                      >
                        <Plus className="h-8 w-8 text-muted-foreground" />
                        <span>Add New Product</span>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="h-auto py-6 flex flex-col items-center justify-center gap-2 border-dashed"
                        onClick={() => setActiveTab("inquiries")}
                      >
                        <Users className="h-8 w-8 text-muted-foreground" />
                        <span>View Inquiries</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Your Products</h2>
                <Button onClick={() => setActiveTab("add-product")}>
                  <Plus className="mr-2 h-4 w-4" /> Add New Product
                </Button>
              </div>
              
              <VendorProductList />
            </TabsContent>
            
            <TabsContent value="add-product" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Product</CardTitle>
                </CardHeader>
                <CardContent>
                  <AddProductForm onSuccess={() => setActiveTab("products")} />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inquiries" className="mt-0">
              <h2 className="text-xl font-semibold mb-6">Customer Inquiries</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-md border">
                    <div className="p-4 text-center text-muted-foreground">
                      No customer inquiries yet. They will appear here when customers contact you.
                    </div>
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

export default VendorDashboardPage;
