import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
  onClick: (listing: Listing) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <div 
      onClick={() => onClick(listing)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          ${listing.price.toLocaleString()}/mo
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{`${listing.city}, ${listing.state}`}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{listing.bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{listing.bathrooms} bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{listing.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};