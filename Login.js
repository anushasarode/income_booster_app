/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // BACKEND INTEGRATION: 
    // This is where you'd call your Firebase Phone Auth logic.
    // For the hackathon, we validate the length and navigate to Dashboard.
    if (phone.length >= 10) {
      navigate('/dashboard');
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <div className="w-full max-w-sm">
        {// Logo / Brand Section }
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Earn Mitra</h1>
          <p className="text-gray-500 mt-2">Grow your business, earn more daily.</p>
        </div>

        {// Login Form }
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                +91
              </span>
              <input
                type="tel"
                required
                className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="00000 00000"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Start Earning
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-400 px-6">
          By clicking Start Earning, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('customer'); // Default role
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  if (!phone) return;

  try {
    // 1. Reference the document using the phone number as the ID
    const userRef = doc(db, "profiles", phone);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // 2. Existing User: Redirect based on stored role
      const userData = userSnap.data();
      if (userData.role === 'vendor') {
        navigate('/dashboard');
      } else {
        navigate('/customer-store');
      }
    } else {
      // 3. New User: Create profile first, then redirect
      await setDoc(userRef, {
        phone: phone,
        role: role, // From your toggle state
        fullName: "New User", // You can add an extra input field for this
        createdAt: serverTimestamp()
      });
      
      role === 'vendor' ? navigate('/dashboard') : navigate('/customer-store');
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Check your Firebase Rules!");
  }
};

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mb-8 text-center">
        <span className="text-5xl">🚀</span>
        <h1 className="text-3xl font-black text-gray-800 mt-4">Earn Mitra</h1>
        <p className="text-gray-400 text-sm">Grow your business, earn more daily.</p>
      </div>

      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        {/* ROLE SELECTION */}
        <div className="flex p-1 bg-gray-100 rounded-2xl">
          <button 
            type="button"
            onClick={() => setRole('customer')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'customer' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'}`}
          >
            I want to Buy
          </button>
          <button 
            type="button"
            onClick={() => setRole('vendor')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'vendor' ? 'bg-white shadow-sm text-green-600' : 'text-gray-400'}`}
          >
            I want to Sell
          </button>
        </div>

        <div className="relative">
          <span className="absolute left-4 top-4 text-gray-400">+91</span>
          <input 
            type="tel" 
            placeholder="00000 00000" 
            className="w-full pl-14 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-green-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full py-4 bg-green-600 text-white font-black rounded-2xl shadow-lg active:scale-95 transition-transform">
  {role === 'customer' ? 'Buy Now' : 'Start Earning'}
</button>
      </form>
    </div>
  );
};

export default Login;