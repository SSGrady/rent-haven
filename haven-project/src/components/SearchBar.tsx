import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const havenAIDivRef = useRef<HTMLDivElement>(null);
  const [labelMaxWidth, setLabelMaxWidth] = useState(0);

  useEffect(() => {
    if (havenAIDivRef.current) {
      const width = havenAIDivRef.current.offsetWidth;
      setLabelMaxWidth(width + width * 0.15); // Allow 15% extra width
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div
        className={`relative bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isFocused || query ? 'w-[90%] mx-auto' : 'w-[70%] mx-auto'
        }`}
      >
        <div
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
        >
          <div
            className="flex items-center justify-center px-1.5 py-0.9 text-xs rounded-full bg-gradient-to-r from-gray-100/80 via-gray-50/50 to-white/30 backdrop-blur-sm border border-gray-200/50 shadow-sm gap-1"
            aria-label="Powered by Haven AI, you can search by property name, location, floor plan, or simply type what you're looking for"
            ref={havenAIDivRef}
          >
            <img
              src="/christmas-stars.png"
              alt="Haven AI stars"
              className="w-3 h-3 object-contain"
            />
            <p className="text-xs font-normal text-gray-800">Haven AI</p>
          </div>

          {showLabel && (
            <div
              className="absolute left-0 top-full mt-1 bg-gray-400 rounded-md shadow-lg px-2 py-1 text-[0.6rem] z-10 break-words"
              style={{ maxWidth: labelMaxWidth, lineHeight: '1rem', maxHeight: '3rem', overflow: 'hidden' }}
            >
              Powered by Haven AI, you can search by property name, location, floor plan, or simply type what you're looking for.
            </div>
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="1 bedroom, Seattle, under $1900"
          className="w-full px-4 py-2.5 pl-24 text-xs text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4dd1c9] placeholder:text-gray-400"
        />
        <button
          type="submit"
          className={`absolute right-1.5 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
            isFocused
              ? 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              : 'bg-[#4dd1c9] hover:bg-[#3bb3ac] text-white'
          }`}
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};