
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Wrench, Activity, Settings2, Plus, Upload, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const serviceInfo = {
  'panel-cleaning': {
    title: 'Manual Panel Cleaning',
    description: 'Professional cleaning to remove dust, dirt, and debris from your solar panels',
    icon: <Wrench className="h-10 w-10" />
  },
  'circuit-repair': {
    title: 'Circuit Repair',
    description: 'Expert diagnostic and repair of electrical issues in your solar system',
    icon: <Activity className="h-10 w-10" />
  },
  'meter-replacement': {
    title: 'Meter Replacement',
    description: 'Upgrade or replace your existing solar meter with newer, more efficient models',
    icon: <Settings2 className="h-10 w-10" />
  },
  'others': {
    title: 'Other Services',
    description: 'Custom solar system maintenance and repair services',
    icon: <Plus className="h-10 w-10" />
  }
};

const ServiceRequestPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    issueTitle: '',
    issueDescription: '',
    images: [] as File[]
  });
  
  const [submitting, setSubmitting] = useState(false);
  
  const service = serviceId && serviceInfo[serviceId as keyof typeof serviceInfo] 
    ? serviceInfo[serviceId as keyof typeof serviceInfo]
    : serviceInfo['others'];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...filesArray] }));
    }
  };
  
  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.issueTitle.length === 0) {
      toast({
        title: "Error",
        description: "Please provide a title for your issue",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.issueDescription.length === 0) {
      toast({
        title: "Error",
        description: "Please describe your issue in detail",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Service Request Submitted",
        description: "A service technician will contact you shortly to schedule a visit",
      });
      setSubmitting(false);
      navigate('/consumer/dashboard');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col consumer-theme">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-teal-500 to-sky-600 py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h5 className="text-white/80 italic">EcoGrid AI</h5>
              <p className="text-white font-light">Smarter Solar, Greener Future</p>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Book Service: {service.title}</h1>
            <p className="text-white/80">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Service Request Details</CardTitle>
              <CardDescription>
                Please provide details about the issue you're experiencing
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="issueTitle" className="block text-sm font-medium">
                    Issue Title (max 50 characters)
                  </label>
                  <Input 
                    id="issueTitle"
                    name="issueTitle"
                    value={formData.issueTitle}
                    onChange={handleInputChange}
                    maxLength={50}
                    placeholder="Brief description of the issue"
                    required
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {formData.issueTitle.length}/50
                  </p>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="issueDescription" className="block text-sm font-medium">
                    Detailed Description
                  </label>
                  <Textarea 
                    id="issueDescription"
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleInputChange}
                    placeholder="Describe the issue in detail, including when it started and any relevant information"
                    rows={5}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Upload Images (Optional)
                  </label>
                  <div className="border-2 border-dashed rounded-md p-4 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload images of the issue to help our technicians better understand the problem
                    </p>
                    <Input 
                      type="file" 
                      className="hidden" 
                      id="image-upload" 
                      accept="image/*" 
                      multiple
                      onChange={handleImageUpload}
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById('image-upload')?.click()}
                    >
                      Select Images
                    </Button>
                  </div>
                  
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img 
                            src={URL.createObjectURL(image)} 
                            alt={`Uploaded image ${index + 1}`} 
                            className="w-full h-24 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5"
                            onClick={() => removeImage(index)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button 
                  type="submit" 
                  className="w-full consumer-cta-button"
                  disabled={submitting}
                >
                  {submitting ? 'Processing...' : 'BOOK SERVICE'}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By booking this service, you agree to our service terms and conditions
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceRequestPage;
