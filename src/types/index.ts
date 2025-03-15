
export type UserRole = 'vendor' | 'consumer';

export type InstallationType = 'Residential' | 'Commercial' | 'Industrial';

export type GridType = 'On-Grid' | 'Off-Grid';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface SchemeItem {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  imageUrl: string;
}

export interface Vendor {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  priceDetails: {
    solarPanel: number;
    inverter: number;
    mppt: number;
    acdbBox: number;
    cables: number;
    battery: number;
    framework: number;
    lightningArrester: number;
    earthing: number;
    bosBox: number;
    switchGear: number;
  };
}

export interface ConsumerForm {
  city: string;
  maxElectricityBill: number;
  electricityBoard?: string;
  availableAreaSqft: number;
  electricityBillFile?: File;
}
