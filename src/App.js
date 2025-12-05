import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SpeechTherapy from "./pages/SpeechTherapy";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";


import { AuthProvider } from "./context/AuthContext";   // ✅ AUTH CONTEXT

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <div style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/speech-therapy" element={<SpeechTherapy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            {/* LOGIN + SIGNUP ROUTES */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

          </Routes>
        </div>

        <Footer />
      </Router>
    </AuthProvider>
  );
}
