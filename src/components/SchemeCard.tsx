
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SchemeItem } from '@/types';
import { Check } from 'lucide-react';

interface SchemeCardProps {
  scheme: SchemeItem;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 overflow-hidden bg-gradient-to-r from-solar-yellow to-solar-orange">
        <img 
          src={scheme.imageUrl} 
          alt={scheme.title} 
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{scheme.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <CardDescription className="line-clamp-2">{scheme.description}</CardDescription>
        <div className="mt-2">
          <div className="text-sm font-medium">Eligibility:</div>
          <div className="text-sm text-muted-foreground">{scheme.eligibility}</div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-4 py-3">
        <div className="flex items-start space-x-2">
          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{scheme.benefits}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SchemeCard;
