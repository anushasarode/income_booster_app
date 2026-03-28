import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { db } from '../firebase'; // Ensure your firebase.js exports db
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const navigate = useNavigate();
  const { t, setLang, lang } = useLang();
  const [profile, setProfile] = useState(null);

  // In a production app, you would get this phone number from your Auth state
  // For the demo, use the phone number you used to create the profile
  const userPhone = "9100000000"; 

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userRef = doc(db, "profiles", userPhone);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setProfile(userSnap.data());
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* 1. NEW SMART HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-800">
            {t.goodMorning}, {profile?.fullName?.split(' ')[0] || "User"}!
          </h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
            {profile?.role === 'vendor' ? t.vendorLabel : 'Customer Account'}
          </p>
        </div>

        {/* Language Switcher & Avatar */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-full">
            {['en', 'kn', 'hi'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 text-[10px] rounded-full font-black transition-all ${
                  lang === l ? 'bg-white text-green-600 shadow-sm' : 'text-gray-400'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-orange-200">
            {profile?.fullName ? profile.fullName.charAt(0) : "U"}
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW CARDS */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-green-50 p-5 rounded-[32px] border border-green-100">
          <p className="text-green-600 text-[10px] font-black uppercase tracking-tighter">{t.earned}</p>
          <h2 className="text-2xl font-black text-gray-800">₹1,250</h2>
        </div>
        <div className="bg-blue-50 p-5 rounded-[32px] border border-blue-100">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-tighter">{t.saved}</p>
          <h2 className="text-2xl font-black text-gray-800">₹400</h2>
        </div>
      </div>

      {/* 3. QUICK ACTIONS */}
      <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 ml-2">{t.quickActions}</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* SHOP FEATURE */}
        <button 
          onClick={() => navigate('/shop')}
          className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm active:scale-95 transition-all group hover:border-green-200"
        >
          <span className="text-3xl mb-3 group-hover:bounce">🛒</span>
          <span className="font-black text-gray-800 text-sm">{t.myShop}</span>
          <span className="text-[10px] text-gray-400 font-bold">{t.listProducts}</span>
        </button>

        {/* GIGS FEATURE */}
        <button 
          onClick={() => navigate('/gigs')}
          className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm active:scale-95 transition-all group hover:border-blue-200"
        >
          <span className="text-3xl mb-3">💼</span>
          <span className="font-black text-gray-800 text-sm">{t.findGigs}</span>
          <span className="text-[10px] text-gray-400 font-bold">{t.earnExtra}</span>
        </button>

        {/* LEARN FEATURE */}
        <button 
          onClick={() => navigate('/skills')}
          className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm active:scale-95 transition-all group hover:border-orange-200"
        >
          <span className="text-3xl mb-3">📖</span>
          <span className="font-black text-gray-800 text-sm">{t.learnSkills}</span>
          <span className="text-[10px] text-gray-400 font-bold">{t.growIncome}</span>
        </button>

        {/* PAYMENTS FEATURE */}
        <button 
          onClick={() => navigate('/payments')}
          className="flex flex-col items-start p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm active:scale-95 transition-all group hover:border-purple-200"
        >
          <span className="text-3xl mb-3">💸</span>
          <span className="font-black text-gray-800 text-sm">{t.payments}</span> 
          <span className="text-[10px] text-gray-400 font-bold">{t.upiLabel}</span>
        </button>
      </div>

      {/* 4. AI TIP SECTION */}
      <div className="mt-8 bg-orange-50 p-5 rounded-[32px] border-l-8 border-orange-400 flex gap-4 items-center">
        <div className="text-2xl">💡</div>
        <div>
          <p className="font-black text-orange-800 text-xs uppercase tracking-widest">{t.aiTip}</p>
          <p className="text-orange-700 text-xs mt-1 font-medium">{t.aiMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;