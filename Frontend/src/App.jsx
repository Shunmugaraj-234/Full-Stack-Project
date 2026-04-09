import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Roadmap from "./pages/Roadmap";
import Resources from "./pages/Resources";
import About from "./pages/About";
import LogoPage from "./pages/LogoPage";
import Settings from "./pages/Settings";
import PreviousPapers from "./pages/PreviousPapers";
import AdminDashboard from "./pages/AdminDashboard";
import MockTest from "./pages/MockTest"; // ✅ NEW
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  // ✅ Hide Navbar & Footer only on Landing page
  const hideLayout = location.pathname === "/landing";

  return (
    <>
      {/* ✅ Navbar */}
      {!hideLayout && <Navbar />}

      {/* ✅ Routes */}
      <Routes>
        {/* Landing Page */}
        <Route path="/landing" element={<LogoPage />} />

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/roadmap/:id" element={<Roadmap />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />

        {/* Features */}
        <Route path="/previous-papers" element={<PreviousPapers />} />
        <Route path="/mock-test" element={<MockTest />} /> {/* ✅ NEW */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* ✅ NEW */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Fallback (optional but PRO) */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* ✅ Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;