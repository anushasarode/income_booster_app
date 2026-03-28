import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const CustomerStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchLiveProducts = async () => {
      // Only show products that are "Live"
      const q = query(collection(db, "products"), where("Status", "==", "Live"));
      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchLiveProducts();
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-black text-gray-800">Fresh Market</h1>
        <span className="p-2 bg-white rounded-full shadow-sm">🛒</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100">
            <div className="w-full h-24 bg-green-50 rounded-2xl mb-3 flex items-center justify-center text-3xl">
              {item.name.includes('Tomato') ? '🍅' : '📦'}
            </div>
            <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
            <p className="text-green-600 font-black">₹{item.price}</p>
            <p className="text-[10px] text-gray-400">📍 {item.location}</p>
            
            <button className="w-full mt-3 py-2 bg-[#121926] text-white text-xs font-bold rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStore;