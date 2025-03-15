
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Upload, X, Plus, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  price: z.coerce.number().positive("Price must be positive"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  specifications: z.string().optional(),
  inStock: z.boolean().default(true)
});

type ProductFormValues = z.infer<typeof productSchema>;

interface AddProductFormProps {
  onSuccess?: () => void;
}

const AddProductForm = ({ onSuccess }: AddProductFormProps) => {
  const { toast } = useToast();
  const [images, setImages] = useState<{ preview: string; file?: File }[]>([]);
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      description: "",
      specifications: "",
      inStock: true
    }
  });
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const newImages = [...images];
    
    for (let i = 0; i < files.length; i++) {
      if (newImages.length >= 5) break; // Maximum 5 images
      
      const file = files[i];
      const preview = URL.createObjectURL(file);
      newImages.push({ preview, file });
    }
    
    setImages(newImages);
  };
  
  const removeImage = (index: number) => {
    const newImages = [...images];
    if (newImages[index].preview) {
      URL.revokeObjectURL(newImages[index].preview);
    }
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  function onSubmit(values: ProductFormValues) {
    // In a real app, you would upload the product data and images to your backend
    console.log(values);
    console.log("Images:", images);
    
    toast({
      title: "Product added!",
      description: "Your product has been added successfully.",
    });
    
    if (onSuccess) {
      onSuccess();
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="solar-panel">Solar Panel</SelectItem>
                      <SelectItem value="inverter">Inverter</SelectItem>
                      <SelectItem value="battery">Battery</SelectItem>
                      <SelectItem value="mppt">MPPT Controller</SelectItem>
                      <SelectItem value="accessory">Accessory</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (₹)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter product description" 
                    className="min-h-[80px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="specifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technical Specifications</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter technical specifications" 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Add details like power rating, dimensions, warranty, etc.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="inStock"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Available in Stock</FormLabel>
                  <FormDescription>
                    Mark this product as available for purchase
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div>
            <Label>Product Images</Label>
            <div className="border rounded-md p-4 mt-1.5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden border bg-muted">
                    <img
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 rounded-full bg-black/70 p-1 text-white hover:bg-black/90"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                {images.length < 5 && (
                  <div className="relative aspect-square rounded-md border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50">
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleImageUpload}
                      multiple
                    />
                    <Plus className="h-6 w-6 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Add Image</span>
                  </div>
                )}
              </div>
              
              {images.length === 0 && (
                <div className="flex flex-col items-center justify-center py-4">
                  <Image className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">No images added yet</p>
                  <div className="relative">
                    <Button type="button" variant="secondary" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload Images</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                        multiple
                      />
                    </Button>
                  </div>
                </div>
              )}
              
              <p className="text-xs text-muted-foreground mt-2">
                You can upload up to 5 images. First image will be used as the cover.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Cancel
          </Button>
          <Button type="submit" className="bg-solar-orange hover:bg-solar-orange/90">
            Add Product
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddProductForm;
