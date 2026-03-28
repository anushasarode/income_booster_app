import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // This state matches your Flutter 'UserModel' structure
  const [user, setUser] = useState({
    name: "Loading...", 
    earnings: 0.0,
    skills: []
  });

  useEffect(() => {
    // BACKEND INTEGRATION POINT:
    // In a real run, this would be: const data = await fetchUserData(auth.currentUser.uid);
    // For the hackathon demo, we use your UserModel defaults:
    const simulateBackendFetch = () => {
      setUser({
        name: "Rajesh Kumar", // From your UserModel 'name'
        earnings: 1250.50,    // From your UserModel 'earnings'
        skills: ["Tailoring", "Mobile Repair"] // From your UserModel 'skills'
      });
    };

    const timer = setTimeout(simulateBackendFetch, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      {/* User Profile Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Hello, {user.name}</h1>
          <p className="text-gray-500 text-sm">Income Booster Dashboard</p>
        </div>
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
          {user.name[0]}
        </div>
      </div>

      {/* Earnings Card - Visualizing your Backend 'earnings' variable */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-xl mb-8">
        <p className="text-green-100 text-xs uppercase font-semibold tracking-widest">Available Balance</p>
        <h2 className="text-4xl font-bold mt-2">₹{user.earnings.toLocaleString()}</h2>
        <div className="mt-4 flex items-center text-xs bg-white bg-opacity-20 w-fit px-3 py-1 rounded-full">
          <span className="mr-1">▲</span> 12% increase this month
        </div>
      </div>

      {/* Navigation Grid - Linking to your other Backend-driven pages */}
      <h3 className="text-gray-700 font-bold mb-4 px-1">Services for You</h3>
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/shop')}
          className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all flex flex-col items-center shadow-sm"
        >
          <div className="bg-orange-100 p-3 rounded-xl mb-2 text-xl">🛒</div>
          <span className="font-semibold text-gray-700 text-sm">Marketplace</span>
        </button>
        
        <button 
          onClick={() => navigate('/gigs')}
          className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all flex flex-col items-center shadow-sm"
        >
          <div className="bg-blue-100 p-3 rounded-xl mb-2 text-xl">💼</div>
          <span className="font-semibold text-gray-700 text-sm">Daily Gigs</span>
        </button>

        <button 
          onClick={() => navigate('/skills')}
          className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all flex flex-col items-center shadow-sm"
        >
          <div className="bg-purple-100 p-3 rounded-xl mb-2 text-xl">📖</div>
          <span className="font-semibold text-gray-700 text-sm">Learn & Earn</span>
        </button>

        <button 
          className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all flex flex-col items-center shadow-sm"
        >
          <div className="bg-yellow-100 p-3 rounded-xl mb-2 text-xl">🏦</div>
          <span className="font-semibold text-gray-700 text-sm">My Savings</span>
        </button>
      </div>

      {/* Skills Badge Section - Mapping from your SkillModel */}
      <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
        <h4 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-tight">Your Verified Skills</h4>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-white px-3 py-1 rounded-lg text-xs font-medium text-green-700 border border-green-100 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;