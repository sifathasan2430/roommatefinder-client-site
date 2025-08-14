import React from 'react';

const CategorySection = () => {
    return (
        <div className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse by Category</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* {categories.map((cat) => (
                          <motion.div
                            key={cat.id}
                            whileHover={{ y: -5 }}
                            
                            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-lg transition-shadow"
                          >
                            <div className="h-40 overflow-hidden">
                              <img 
                                src={cat.image} 
                                alt={cat.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <div className="flex items-center mb-2">
                                <span className="text-2xl mr-3">{cat.icon}</span>
                                <h3 className="text-lg font-bold">{cat.name}</h3>
                              </div>
                              <p className="text-gray-600 text-sm">{cat.description}</p>
                            </div>
                          </motion.div>
                        ))} */}
                      </div>
                    </div>
                
        </div>
    );
};

export default CategorySection;