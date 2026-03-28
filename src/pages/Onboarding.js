import { useNavigate } from "react-router-dom";

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