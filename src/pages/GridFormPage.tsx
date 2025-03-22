
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Info, Upload } from 'lucide-react';
import { GridType, InstallationType, ConsumerForm, GridTypeParam } from '@/types';
import ApplianceSelection from '@/components/ApplianceSelection';

const GridFormPage = () => {
  const { type, gridType } = useParams<{ type: string; gridType: string }>();
  const installationType = type as InstallationType;
  const gridTypeParam = gridType as GridTypeParam;
  
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<ConsumerForm>({
    city: '',
    maxElectricityBill: 0,
    electricityBoard: '',
    availableAreaSqft: 0,
    electricityBillFile: undefined,
    appliances: [],
  });

  const [fileName, setFileName] = useState<string>('');
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        electricityBillFile: e.target.files[0],
      });
      setFileName(e.target.files[0].name);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'maxElectricityBill' || name === 'availableAreaSqft' ? Number(value) : value,
    });
  };

  const handleApplianceChange = (appliances: any[]) => {
    setFormData({
      ...formData,
      appliances,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate the data and submit it to the backend
    navigate(`/consumer/vendors?type=${type}&gridType=${gridType}`);
  };

  const isOnGrid = gridTypeParam === 'on-grid';
  
  const typeTitle = {
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial'
  }[type || ''] || 'Installation';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-solar-blue to-solar-dark py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-2">{typeTitle} {gridTypeParam} Installation</h1>
            <p className="text-white/80">
              Please provide the following details to get an estimate for your solar installation
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Solar Installation Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="maxElectricityBill">Maximum Monthly Electricity Bill (₹)</Label>
                    <Input 
                      id="maxElectricityBill" 
                      name="maxElectricityBill"
                      value={formData.maxElectricityBill || ''}
                      onChange={handleInputChange}
                      type="number" 
                      placeholder="e.g., 5000" 
                      required 
                    />
                  </div>
                  
                  {isOnGrid && (
                    <div>
                      <Label htmlFor="electricityBoard">Electricity Board/Provider</Label>
                      <Select 
                        onValueChange={(value) => setFormData({...formData, electricityBoard: value})}
                      >
                        <SelectTrigger id="electricityBoard">
                          <SelectValue placeholder="Select electricity provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tata-power">Tata Power</SelectItem>
                          <SelectItem value="bses">BSES</SelectItem>
                          <SelectItem value="msedcl">MSEDCL</SelectItem>
                          <SelectItem value="bescom">BESCOM</SelectItem>
                          <SelectItem value="cesc">CESC</SelectItem>
                          <SelectItem value="wbsedcl">WBSEDCL</SelectItem>
                          <SelectItem value="bseb">BSEB</SelectItem>
                          <SelectItem value="nesco">NESCO (Odisha)</SelectItem>
                          <SelectItem value="jbvnl">JBVNL (Jharkhand)</SelectItem>
                          <SelectItem value="apdcl">APDCL (Assam)</SelectItem>
                          <SelectItem value="uppcl">UPPCL (Uttar Pradesh)</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="availableAreaSqft">Available Area (in sq. ft.)</Label>
                    <Input 
                      id="availableAreaSqft" 
                      name="availableAreaSqft"
                      value={formData.availableAreaSqft || ''}
                      onChange={handleInputChange}
                      type="number" 
                      placeholder="e.g., 1000" 
                      required 
                    />
                  </div>
                  
                  <ApplianceSelection onApplianceChange={handleApplianceChange} />
                  
                  <div>
                    <Label htmlFor="billUpload">Upload Latest Electricity Bill</Label>
                    <div className="mt-1 flex items-center">
                      <label htmlFor="billUpload" className="flex-1">
                        <div className="border rounded-md p-2 px-3 flex items-center justify-between cursor-pointer hover:bg-muted/50">
                          <div className="flex items-center">
                            <Upload className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {fileName || 'Choose file...'}
                            </span>
                          </div>
                          <Button type="button" variant="ghost" size="sm" className="h-8">
                            Browse
                          </Button>
                        </div>
                        <input
                          id="billUpload"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Accepted file types: PDF, JPG, PNG (max 5MB)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-muted/50 rounded-md">
                  <Info className="h-5 w-5 text-solar-blue mr-3 flex-shrink-0" />
                  <p className="text-sm">
                    {isOnGrid 
                      ? "On-grid systems are eligible for government subsidies and allow you to feed excess power back to the grid."
                      : "Off-grid systems provide complete energy independence but are not eligible for government subsidies."}
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-solar-blue hover:bg-solar-blue/90">
                  Find Vendors <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GridFormPage;
