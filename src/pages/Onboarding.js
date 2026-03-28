/*import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-700 
    flex flex-col items-center justify-center px-6 text-white">
      <div className="text-8xl mb-6">💰</div>
      <h1 className="text-4xl font-bold mb-2">Income Booster</h1>
      <p className="text-green-100 text-center text-lg mb-2">
        Earn More. Learn More. Grow More.
      </p>
      <p className="text-green-200 text-center text-sm mb-12">
        Empowering small businesses & daily workers across India
      </p>
      <div className="flex gap-3 mb-10">
        <button className="bg-white text-green-700 font-bold px-4 py-2 rounded-full text-sm">
          English
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm border border-white">
          ಕನ್ನಡ
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm border border-white">
          हिंदी
        </button>
      </div>
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full bg-white text-green-700 font-bold text-lg 
        py-4 rounded-2xl shadow-lg hover:bg-green-50 transition">
        🚀 Get Started
      </button>
      <div className="mt-10 grid grid-cols-3 gap-4 text-center">
        <div className="bg-green-600 rounded-xl p-3">
          <div className="text-3xl">🥦</div>
          <p className="text-xs mt-1">Vendors</p>
        </div>
        <div className="bg-green-600 rounded-xl p-3">
          <div className="text-3xl">✂️</div>
          <p className="text-xs mt-1">Tailors</p>
        </div>
        <div className="bg-green-600 rounded-xl p-3">
          <div className="text-3xl">🍳</div>
          <p className="text-xs mt-1">Food Sellers</p>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const Onboarding = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  // Mock User Data (Matches your UserModel)
  const user = {
    name: "Ramesh Vasudev",
    number: "+91 98765 43210",
    occupation: "Street Vendor (Fruits)",
    savings: "₹4,250",
    orders: "128",
    rating: "4.8 ★"
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 1. Header Section (Amazon Style) */}
      <div className="bg-green-700 p-6 pb-20 rounded-b-[40px] shadow-lg relative">
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-white mb-4 text-xl"
        >
          ←
        </button>
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white rounded-full border-4 border-green-500 flex items-center justify-center text-3xl font-bold text-green-700 shadow-md">
            RV
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold leading-tight">{user.name}</h1>
            <p className="text-green-100 text-sm opacity-90">{user.occupation}</p>
            <p className="text-xs font-mono mt-1">{user.number}</p>
          </div>
        </div>
      </div>

      {/* 2. Stats Cards (The "Earnings & Orders" Section) */}
      <div className="px-4 -mt-12">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <span className="text-gray-400 text-[10px] uppercase font-bold mb-1">Total Savings</span>
            <span className="text-green-600 font-black text-xl">{user.savings}</span>
          </div>
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
            <span className="text-gray-400 text-[10px] uppercase font-bold mb-1">Orders Done</span>
            <span className="text-blue-600 font-black text-xl">{user.orders}</span>
          </div>
        </div>
      </div>

      {/* 3. Classic Menu List */}
      <div className="p-4 mt-6 space-y-3">
        <h3 className="text-gray-500 text-xs font-bold px-2 uppercase tracking-widest">Account Settings</h3>
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 border-b border-gray-50">
            <div className="flex items-center">
              <span className="mr-3">📦</span>
              <span className="font-bold text-gray-700 text-sm">My Orders</span>
            </div>
            <span className="text-gray-300">❯</span>
          </button>

          <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50 border-b border-gray-50">
            <div className="flex items-center">
              <span className="mr-3">💳</span>
              <span className="font-bold text-gray-700 text-sm">Payment Methods</span>
            </div>
            <span className="text-gray-300">❯</span>
          </button>

          <button className="w-full flex justify-between items-center p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <span className="mr-3">🌐</span>
              <span className="font-bold text-gray-700 text-sm">Language Preferences</span>
            </div>
            <span className="text-green-600 font-bold text-xs">English</span>
          </button>
        </div>

        {/* 4. Logout Button */}
        <button 
          onClick={() => navigate('/')}
          className="w-full mt-6 py-4 bg-red-50 text-red-600 font-black rounded-3xl border border-red-100 active:scale-95 transition-all"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Onboarding;