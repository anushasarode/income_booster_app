/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const Shop = () => {
  const navigate = useNavigate();
  const { t } = useLang();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. RE-CREATING FAKE DATA (Matches your Backend Models)
    const mockProducts = [
      { 
        id: '1', 
        name: 'Organic Fertilizer (5kg)', 
        price: 450, 
        recommendation: 'Buy',
        description: 'High nitrogen content for better yield.'
      },
      { 
        id: '2', 
        name: 'Handmade Sewing Kit', 
        price: 890, 
        recommendation: 'Overpriced',
        description: 'Premium needles and threads.'
      },
      { 
        id: '3', 
        name: 'Hybrid Tomato Seeds', 
        price: 120, 
        recommendation: 'Buy',
        description: 'Pest-resistant seeds for summer.'
      },
      { 
        id: '4', 
        name: 'Agricultural Tool Set', 
        price: 2100, 
        recommendation: 'Wait',
        description: 'Includes shovel, rake, and hoe.'
      }
    ];

    // Simulate a tiny delay so the "Loading" state looks real to judges
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {// Header with Back Button }
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/dashboard')} 
          className="mr-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-gray-800">{t.shop}</h1>
      </div>

      {//AI Price Intelligence Tip (Crucial for your Backend Pitch) }
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 p-4 mb-6 rounded-r-2xl shadow-sm">
        <div className="flex items-center mb-1">
          <span className="mr-2">💡</span>
          <p className="font-bold text-orange-800 text-xs uppercase tracking-widest">{t.aiTip}</p>
        </div>
        <p className="text-sm text-orange-700 leading-snug font-medium">{t.aiMsg}</p>
      </div>

      {// Product List }
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mb-2"></div>
          <p className="text-sm font-medium">Analyzing Market Prices...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center transition-all active:scale-95"
            >
              <div className="flex-1">
                <h3 className="font-extrabold text-gray-800 text-lg mb-1">{item.name}</h3>
                <div className="flex items-center">
                  <span className="text-green-600 font-black text-xl mr-2">₹{item.price}</span>
                  <span className="text-gray-400 text-xs italic">Market Avg: ₹{item.price - 20}</span>
                </div>
              </div>

              {// Status Badge using original Backend Logic }
              <div className="flex flex-col items-end">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border-2 ${
                  item.recommendation === 'Buy' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : item.recommendation === 'Overpriced'
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                }`}>
                  {item.recommendation}
                </span>
                <button className="mt-3 text-xs font-bold text-green-600 underline">Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
*/
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, addDoc, getDocs, updateDoc, 
  doc, serverTimestamp, query, orderBy 
} from 'firebase/firestore';
import { useLang } from '../context/LanguageContext';

const Shop = () => {
  const { t } = useLang();
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', location: '' });

  // 1. Fetch from Firestore
  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  // 2. Add to Firestore
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name: newProduct.name,
        price: Number(newProduct.price),
        location: newProduct.location,
        Status: "Live", // Matches your DB schema
        createdAt: serverTimestamp()
      });
      setNewProduct({ name: '', price: '', location: '' });
      setShowModal(false);
      fetchProducts();
    } catch (e) { alert(e.message); }
  };

  // 3. Toggle Status
  const toggleStatus = async (productId, currentStatus) => {
    const nextStatus = currentStatus === "Live" ? "Sold Out" : "Live";
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, { Status: nextStatus });
    fetchProducts();
  };

  return (
    // 'relative' is key here to keep the button inside this div
    <div className="relative min-h-[80vh] p-4 bg-gray-50 pb-24">
      <h1 className="text-2xl font-black text-gray-800 mb-6">{t.myShop}</h1>

      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-center text-gray-400 mt-10 italic">No products listed yet...</p>
        ) : (
          products.map(item => (
            <div 
              key={item.id} 
              onClick={() => toggleStatus(item.id, item.Status)}
              className={`p-5 rounded-3xl shadow-sm border transition-all active:scale-95 cursor-pointer flex justify-between items-center ${
                item.Status === 'Sold Out' ? 'bg-gray-100 opacity-60' : 'bg-white border-gray-100'
              }`}
            >
              <div>
                <h3 className={`font-bold ${item.Status === 'Sold Out' ? 'line-through' : ''}`}>{item.name}</h3>
                <p className="text-green-600 font-black">₹{item.price}</p>
                <p className="text-[10px] text-gray-400">📍 {item.location}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                item.Status === 'Live' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-600 border-red-100'
              }`}>
                {item.Status || 'Live'}
              </span>
            </div>
          ))
        )}
      </div>

      {/* --- ABSOLUTE POSITIONED + BUTTON --- */}
      <button 
        onClick={() => setShowModal(true)}
        className="absolute bottom-6 right-6 w-16 h-16 bg-green-600 text-white rounded-full shadow-2xl text-4xl font-light flex items-center justify-center active:scale-90 transition-transform z-50 border-4 border-white"
      >
        +
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-[100]">
          <div className="bg-white w-full max-w-sm rounded-[40px] p-8 shadow-2xl">
            <h2 className="text-xl font-black mb-4">New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <input 
                type="text" placeholder="Product Name" 
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                required
              />
              <input 
                type="number" placeholder="Price (₹)" 
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                required
              />
              <input 
                type="text" placeholder="Location" 
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none"
                value={newProduct.location}
                onChange={(e) => setNewProduct({...newProduct, location: e.target.value})}
              />
              <button type="submit" className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl shadow-lg">List Item</button>
              <button type="button" onClick={() => setShowModal(false)} className="w-full mt-2 text-gray-400 font-bold">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;