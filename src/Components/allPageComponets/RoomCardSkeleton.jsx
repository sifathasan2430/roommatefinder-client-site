import React from 'react';

const RoomCardSkeleton = () => {
    return (
         <div className="grid grid-cols-1 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/3 w-full h-48 bg-gray-200 rounded-lg"></div>
                      <div className="md:w-2/3 space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-16 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    );
};

export default RoomCardSkeleton;