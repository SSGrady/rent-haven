export interface Listing {
    id: string;
    title: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
    images: string[];
    amenities: string[];
    available_date: string;
    created_at: string;
  }
  
  export interface SearchFilters {
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    location?: string;
    amenities?: string[];
  }
  
  export interface UserProfile {
    id: string;
    email: string;
    full_name: string;
    avatar_url?: string;
    budget: number;
    preferred_locations: string[];
    move_in_date?: string;
  }