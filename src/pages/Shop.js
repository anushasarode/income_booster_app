import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // BACKEND INTEGRATION:
    // This mock data uses the exact fields from your ProductModel.dart
    const mockProducts = [
      {
        id: '1',
        name: 'Organic Fertilizer',
        price: 450,
        originalPrice: 500,
        recommendation: 'Buy', // From your ProductModel
        description: 'High quality local compost.'
      },
      {
        id: '2',
        name: 'Handmade Sewing Kit',
        price: 890,
        originalPrice: 850,
        recommendation: 'Overpriced', // From your ProductModel
        description: 'Complete kit for home tailoring.'
      },
      {
        id: '3',
        name: 'Bulk Cotton Yarn',
        price: 1200,
        originalPrice: 1200,
        recommendation: 'Wait', // From your ProductModel
        description: 'Raw materials for weaving.'
      }
    ];
    setProducts(mockProducts);
  }, []);

  // Helper function to color-code your backend recommendations
  const getBadgeColor = (rec) => {
    switch (rec) {
      case 'Buy': return 'bg-green-100 text-green-700 border-green-200';
      case 'Wait': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Overpriced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/dashboard')} className="mr-4 text-xl">←</button>
        <h1 className="text-xl font-bold text-gray-800">Marketplace</h1>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 text-lg">{product.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getBadgeColor(product.recommendation)}`}>
                {product.recommendation}
              </span>
            </div>
            
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;