
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsItem } from '@/types';
import { Calendar, ExternalLink } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const handleCardClick = () => {
    // Open in new tab - in a real app this would link to the full article
    window.open(`https://example.com/news/${news.id}`, '_blank');
  };

  return (
    <Card 
      className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2 group-hover:text-solar-blue transition-colors">
          {news.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{news.description}</CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground flex items-center justify-between">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {news.date}
        </div>
        <span className="text-solar-blue flex items-center text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read more <ExternalLink className="h-3 w-3 ml-1" />
        </span>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
