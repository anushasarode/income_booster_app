import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

const Header = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* App Logo/Name */}
      <div className="flex items-center">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-2">
          <span className="text-white font-bold text-xs">IB</span>
        </div>
        <span className="font-black text-gray-800 tracking-tight">IncomeBooster</span>
      </div>

      {/* Profile Section (Top Right) */}
      <button 
        onClick={() => navigate('/onboarding')} 
        className="flex items-center space-x-2 bg-gray-50 p-1 pr-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-all"
      >
        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner">
          RV
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-[10px] font-bold text-gray-800 leading-none">Ramesh V.</p>
          <p className="text-[8px] text-gray-500 uppercase tracking-tighter">Verified Vendor</p>
        </div>
      </button>
    </div>
  );
};

export default Header;