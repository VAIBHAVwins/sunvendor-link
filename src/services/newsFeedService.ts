
import axios from 'axios';

// Interface for RSS feed items
export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
  guid?: string;
  categories?: string[];
  thumbnail?: string;
}

export interface RSSFeedResponse {
  items: NewsItem[];
  feedUrl: string;
  title: string;
  description: string;
  link: string;
}

// Using rss2json service to convert RSS to JSON
export const fetchSolarNews = async (): Promise<NewsItem[]> => {
  try {
    // List of solar energy news RSS feeds
    const rssFeedUrls = [
      'https://www.seia.org/news/rss.xml',
      'https://www.solarpowerworldonline.com/feed/',
      'https://cleantechnica.com/category/solar-energy/feed/',
      // Add more solar news RSS feeds as needed
    ];
    
    // Pick a random feed to avoid always hitting the same endpoint
    const selectedFeed = rssFeedUrls[Math.floor(Math.random() * rssFeedUrls.length)];
    
    // Using rss2json service to convert the RSS feed to JSON
    const response = await axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: selectedFeed,
        api_key: '', // Removed API key
        count: 9  // Limit the number of articles
      }
    });
    
    if (response.data && response.data.items) {
      return response.data.items as NewsItem[];
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
};
