import React from 'react';

const NoDataFound = () => {
    return (
         <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-xl font-bold mb-2">No rooms found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search in a different location</p>
                <button
                
                  className="text-[#f48c00] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
    );
};

export default NoDataFound;