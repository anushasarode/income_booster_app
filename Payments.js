import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext'; // 1. Import the hook

const Payments = () => {
  const navigate = useNavigate();
  const { t } = useLang(); // 2. Extract the translation object

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/dashboard')} 
          className="mr-4 p-2 bg-white rounded-full shadow-sm text-xl"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-gray-800">{t.payments}</h1>
      </div>

      {/* UPI QR CARD */}
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          {t.yourQR}
        </p>
        
        <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-200 mb-4">
          <span className="text-4xl">🏁</span> 
        </div>

        <h2 className="text-lg font-black text-gray-800">Ramesh Vasudev</h2>
        <p className="text-sm text-blue-600 font-mono italic">ramesh.vendor@upi</p>
        
        <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black rounded-full border border-green-100">BHIM UPI</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full border border-blue-100">GPay</span>
        </div>
      </div>

      {/* BANK DETAILS */}
      <div className="mt-6 space-y-4">
        <h3 className="text-gray-500 text-xs font-bold px-2 uppercase tracking-wider">
          {t.bankSettlement}
        </h3>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase">{t.linkedAccount}</p>
            <p className="font-black text-gray-700 tracking-tight">SBI •••• 4210</p>
          </div>
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">✓</div>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="mt-6">
         <h3 className="text-gray-500 text-xs font-bold px-2 uppercase mb-3 tracking-wider">
           {t.recentIncome}
         </h3>
         <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            {[
                { name: "Suresh K.", amount: "+₹150", time: "2m ago" },
                { name: "Anita M.", amount: "+₹45", time: "1h ago" }
            ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center p-4 border-b border-gray-50">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-sm">💰</div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm">{tx.name}</p>
                            <p className="text-[10px] text-gray-400">{tx.time}</p>
                        </div>
                    </div>
                    <span className="font-black text-green-600">{tx.amount}</span>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Payments;