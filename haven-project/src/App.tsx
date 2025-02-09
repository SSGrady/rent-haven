import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ListingCard } from './components/ListingCard';
import { Home, DollarSign, Users } from 'lucide-react';
import { Listing } from './types';

function App() {
  // todo: Replace with actual data fetching
  const [listings, setListings] = useState<Listing[]>([]);

  const handleSearch = async (query: string) => {
    // todo: Implement actual search logic
    console.log('Searching for:', query);
  };

  const handleListingClick = (listing: Listing) => {
    // todo: Implement listing detail view
    console.log('Clicked listing:', listing);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4dd1c9] to-[#beeeff] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Haven is your place
          </h1>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Find your perfect home, manage your finances, and build your community.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Home className="h-12 w-12 text-[#4dd1c9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find your perfect place</h3>
            <p className="text-gray-600">
              Search listings, connect with potential roommates, and explore different neighborhoods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="h-12 w-12 text-[#4dd1c9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Manage your finances</h3>
            <p className="text-gray-600">
              Set your budget, track your expenses, and find affordable housing options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-[#4dd1c9] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Build your community</h3>
            <p className="text-gray-600">
              Connect with other Haven users, discover local events, and build your network.
            </p>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Listings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onClick={handleListingClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;