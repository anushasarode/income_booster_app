import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding"; // Your profile page
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Skills from "./pages/Skills";
import Gigs from "./pages/Gigs";
import Payments from "./pages/Payments";
import CustomerStore from './pages/CustomerStore';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-gray-50 shadow-xl relative">
      {/* Hide header if we are on Login page */}
      {!isLoginPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/customer-store" element={<CustomerStore />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;