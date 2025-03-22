
import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 'md' }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const sizeClass = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }[size];
  
  return (
    <div className="rating-stars">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`star-full-${i}`} className={`${sizeClass} fill-yellow-400 text-yellow-400`} />
      ))}
      
      {hasHalfStar && (
        <div className="relative">
          <Star className={`${sizeClass} text-gray-300`} />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className={`${sizeClass} fill-yellow-400 text-yellow-400`} />
          </div>
        </div>
      )}
      
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`star-empty-${i}`} className={`${sizeClass} text-gray-300`} />
      ))}
    </div>
  );
};

export default RatingStars;
