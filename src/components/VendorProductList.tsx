
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Edit, Trash, Eye } from 'lucide-react';

// This would normally come from your backend
const mockProducts = [
  {
    id: '1',
    name: 'Premium Solar Panel 450W',
    category: 'Solar Panel',
    price: 12500,
    description: 'High-efficiency monocrystalline solar panel with 20-year warranty',
    imageUrl: 'https://images.unsplash.com/photo-1559302995-f1d7e0b9a5cd?q=80&w=1000',
    inStock: true
  },
  {
    id: '2',
    name: '5kW Solar Inverter',
    category: 'Inverter',
    price: 35000,
    description: 'Pure sine wave inverter with MPPT charge controller',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000',
    inStock: true
  },
  {
    id: '3',
    name: 'Lithium Battery 5kWh',
    category: 'Battery',
    price: 120000,
    description: 'Long-lasting lithium iron phosphate battery with 5000+ cycle life',
    imageUrl: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?q=80&w=1000',
    inStock: false
  }
];

const VendorProductList = () => {
  return (
    <div className="space-y-6">
      {mockProducts.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">You haven't added any products yet.</p>
          <Button className="mt-4">Add Your First Product</Button>
        </Card>
      ) : (
        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="py-3 px-4 text-left font-medium">Product</th>
                  <th className="py-3 px-4 text-left font-medium">Category</th>
                  <th className="py-3 px-4 text-left font-medium">Price (₹)</th>
                  <th className="py-3 px-4 text-left font-medium">Status</th>
                  <th className="py-3 px-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockProducts.map(product => (
                  <tr key={product.id} className="border-t">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                          <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">{product.price.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorProductList;
