
import { NewsItem, SchemeItem, Vendor } from '@/types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'India Achieves 100GW Renewable Energy Capacity',
    description: 'India has achieved the milestone of 100GW of installed renewable energy capacity, marking a significant step towards the target of 175GW by 2022.',
    imageUrl: '/placeholder.svg',
    date: '2023-05-15'
  },
  {
    id: '2',
    title: 'New Solar Policy Announced',
    description: 'The government has announced a new solar policy with increased subsidies for residential installations to promote clean energy adoption.',
    imageUrl: '/placeholder.svg',
    date: '2023-06-22'
  },
  {
    id: '3',
    title: 'Solar Panel Efficiency Breakthrough',
    description: 'Scientists have developed a new type of solar panel with 30% higher efficiency compared to conventional panels, potentially revolutionizing the industry.',
    imageUrl: '/placeholder.svg',
    date: '2023-07-10'
  }
];

export const schemeItems: SchemeItem[] = [
  {
    id: '1',
    title: 'PM KUSUM Scheme',
    description: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM KUSUM) for farmers to install solar pumps and grid-connected solar power plants.',
    eligibility: 'Farmers with agricultural land',
    benefits: 'Subsidy up to 60% of the cost',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Rooftop Solar Programme Phase II',
    description: 'Subsidy for residential rooftop solar installations under Phase II of Grid Connected Rooftop Solar Programme.',
    eligibility: 'Residential building owners',
    benefits: 'Central financial assistance of 40% for systems up to 3 kW',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    title: 'Solar Park Scheme',
    description: 'Development of solar parks and ultra mega solar power projects across the country.',
    eligibility: 'State governments and private developers',
    benefits: 'Financial support for infrastructure development',
    imageUrl: '/placeholder.svg'
  }
];

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'SunRise Solar',
    rating: 4.7,
    reviews: 245,
    location: 'Delhi',
    distance: '5.2 km',
    priceDetails: {
      solarPanel: 45000,
      inverter: 35000,
      mppt: 15000,
      acdbBox: 8000,
      cables: 12000,
      battery: 35000,
      framework: 18000,
      lightningArrester: 5000,
      earthing: 6000,
      bosBox: 4000,
      switchGear: 7000
    }
  },
  {
    id: '2',
    name: 'GreenEnergy Solutions',
    rating: 4.5,
    reviews: 178,
    location: 'Mumbai',
    distance: '7.8 km',
    priceDetails: {
      solarPanel: 48000,
      inverter: 37000,
      mppt: 16000,
      acdbBox: 8500,
      cables: 13000,
      battery: 38000,
      framework: 19000,
      lightningArrester: 5500,
      earthing: 6500,
      bosBox: 4500,
      switchGear: 7500
    }
  },
  {
    id: '3',
    name: 'PowerSun Technologies',
    rating: 4.8,
    reviews: 302,
    location: 'Bangalore',
    distance: '4.5 km',
    priceDetails: {
      solarPanel: 42000,
      inverter: 34000,
      mppt: 14500,
      acdbBox: 7800,
      cables: 11500,
      battery: 34000,
      framework: 17500,
      lightningArrester: 4800,
      earthing: 5800,
      bosBox: 3800,
      switchGear: 6800
    }
  }
];
