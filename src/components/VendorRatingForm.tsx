
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface VendorRatingFormProps {
  vendorId: string;
  vendorName: string;
  onRatingSubmit?: () => void;
}

const VendorRatingForm: React.FC<VendorRatingFormProps> = ({ 
  vendorId, 
  vendorName,
  onRatingSubmit 
}) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating before submitting",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      toast({
        title: "Rating Submitted",
        description: `Thank you for rating ${vendorName}!`,
      });
      setSubmitting(false);
      setRating(0);
      setFeedback('');
      if (onRatingSubmit) onRatingSubmit();
    }, 1000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rate Your Experience</CardTitle>
        <CardDescription>
          How would you rate your experience with {vendorName}?
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <Star 
                    className={`h-8 w-8 ${
                      (hoverRating || rating) >= star 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    } cursor-pointer transition-colors`} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center text-sm font-medium">
            {rating === 1 && "Poor"}
            {rating === 2 && "Fair"}
            {rating === 3 && "Good"}
            {rating === 4 && "Very Good"}
            {rating === 5 && "Excellent"}
          </div>
          
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium mb-1">
              Your Feedback (Optional)
            </label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience with this vendor..."
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full consumer-cta-button"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Rating'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default VendorRatingForm;
