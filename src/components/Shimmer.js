
import React from 'react';

const Shimmer = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header Shimmer */}
      <div className="mb-8">
        <div className="h-8 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg w-64 animate-pulse mb-2"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-96 animate-pulse"></div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200/50 backdrop-blur-sm w-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Section */}
            <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
              {/* Main image shimmer */}
              <div className="h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 relative">
                {/* Animated shimmer wave */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Price Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                <div className="h-3 w-12 bg-gradient-to-r from-green-200 to-green-300 rounded-full animate-pulse"></div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-orange-100/90 backdrop-blur-sm rounded-full px-2 py-1">
                <div className="h-2.5 w-8 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-2 sm:p-3 md:p-4 lg:p-5 space-y-2 sm:space-y-3 md:space-y-4">
              {/* Restaurant Name */}
              <div className="space-y-1 sm:space-y-2">
                <div className="h-3 sm:h-4 md:h-5 bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg w-4/5 animate-pulse"></div>
                <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/5 animate-pulse"></div>
              </div>
              
              {/* Rating and Time Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full animate-pulse"></div>
                  <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-6 sm:w-8 animate-pulse"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-8 sm:w-10 md:w-12 animate-pulse"></div>
                </div>
              </div>
              
              {/* Cuisine Types */}
              <div className="space-y-1 sm:space-y-2">
                <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full animate-pulse"></div>
                <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full w-3/4 animate-pulse"></div>
              </div>
              
              {/* Location with Icon */}
              <div className="flex items-center gap-1 sm:gap-2 pt-1 sm:pt-2 border-t border-gray-100">
                <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded-full animate-pulse"></div>
                <div className="h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3 animate-pulse"></div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4 lg:px-5 lg:pb-4">
              <div className="h-6 sm:h-7 md:h-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg w-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button Shimmer */}
      <div className="flex justify-center mt-12">
        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-32 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Shimmer;