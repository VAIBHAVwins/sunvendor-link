
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Appliance = {
  id: string;
  name: string;
  quantity: number;
  specification: string;
};

type ApplianceSelectionProps = {
  onApplianceChange: (appliances: Appliance[]) => void;
};

const APPLIANCE_TYPES = [
  { id: 'bulb', name: 'Bulb' },
  { id: 'ac', name: 'AC' },
  { id: 'tv', name: 'TV' },
  { id: 'ceiling_fan', name: 'Ceiling Fan' },
  { id: 'washing_machine', name: 'Washing Machine' },
  { id: 'geyser', name: 'Geyser' },
  { id: 'oven', name: 'Oven' },
  { id: 'chimney', name: 'Chimney' },
  { id: 'refrigerator', name: 'Refrigerator' },
  { id: 'cooler', name: 'Cooler' },
  { id: 'computer', name: 'Computer' },
  { id: 'printer', name: 'Printer' },
  { id: 'others', name: 'Others' },
];

const SPECIFICATIONS = {
  bulb: ['5W LED', '10W LED', '15W CFL', '20W CFL'],
  ac: ['1 Ton', '1.5 Ton', '2 Ton', 'Inverter'],
  tv: ['32 inch LED', '40 inch LED', '55 inch LED', 'Smart TV'],
  ceiling_fan: ['Standard', 'High Speed', 'Energy Efficient'],
  washing_machine: ['Semi-Automatic', 'Fully Automatic', 'Front Load'],
  geyser: ['10L', '15L', '25L', 'Instant'],
  oven: ['Microwave', 'OTG', 'Convection'],
  chimney: ['Standard', 'Auto-Clean', 'Silent'],
  refrigerator: ['Single Door', 'Double Door', 'Side by Side'],
  cooler: ['Desert Cooler', 'Personal Cooler', 'Tower Cooler'],
  computer: ['Desktop', 'Laptop', 'All-in-One'],
  printer: ['Inkjet', 'Laser', 'All-in-One'],
  others: ['Small Appliance', 'Medium Appliance', 'Large Appliance'],
};

const ApplianceSelection: React.FC<ApplianceSelectionProps> = ({ onApplianceChange }) => {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: 'bulb', name: 'Bulb', quantity: 1, specification: SPECIFICATIONS.bulb[0] }
  ]);

  const addAppliance = () => {
    const nextAvailableType = APPLIANCE_TYPES.find(
      type => !appliances.some(app => app.id === type.id)
    );
    
    if (nextAvailableType) {
      const newAppliance = {
        id: nextAvailableType.id,
        name: nextAvailableType.name,
        quantity: 1,
        specification: SPECIFICATIONS[nextAvailableType.id as keyof typeof SPECIFICATIONS][0]
      };
      
      const updatedAppliances = [...appliances, newAppliance];
      setAppliances(updatedAppliances);
      onApplianceChange(updatedAppliances);
    }
  };

  const removeAppliance = (id: string) => {
    const updatedAppliances = appliances.filter(app => app.id !== id);
    setAppliances(updatedAppliances);
    onApplianceChange(updatedAppliances);
  };

  const updateAppliance = (id: string, field: 'quantity' | 'specification', value: number | string) => {
    const updatedAppliances = appliances.map(app =>
      app.id === id ? { ...app, [field]: value } : app
    );
    setAppliances(updatedAppliances);
    onApplianceChange(updatedAppliances);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label className="text-base font-medium">Appliances</Label>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={addAppliance}
          disabled={appliances.length >= APPLIANCE_TYPES.length}
          className="flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Appliance
        </Button>
      </div>
      
      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-medium">Appliance</th>
              <th className="text-left p-3 font-medium">Specification</th>
              <th className="text-left p-3 font-medium">Quantity</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {appliances.map((appliance) => (
              <tr key={appliance.id} className="hover:bg-muted/20">
                <td className="p-3">{appliance.name}</td>
                <td className="p-3">
                  <Select
                    value={appliance.specification}
                    onValueChange={(value) => updateAppliance(appliance.id, 'specification', value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select spec" />
                    </SelectTrigger>
                    <SelectContent>
                      {SPECIFICATIONS[appliance.id as keyof typeof SPECIFICATIONS].map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-3">
                  <Select
                    value={appliance.quantity.toString()}
                    onValueChange={(value) => updateAppliance(appliance.id, 'quantity', parseInt(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Qty" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="p-3">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeAppliance(appliance.id)}
                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplianceSelection;
