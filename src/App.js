import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Skills from "./pages/Skills";
import Gigs from "./pages/Gigs";

function App() {
  return (
    <Router>
      <div className="max-w-sm mx-auto min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/gigs" element={<Gigs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
