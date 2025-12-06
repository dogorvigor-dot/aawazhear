import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

// FIXED — correct import
import Appointment from "./pages/Appointment";

import { AuthProvider } from "./context/AuthContext";

// ==== ADMIN IMPORTS =====
import AdminLogin from "./admin/pages/adminlogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import ManageUsers from "./admin/pages/ManageDoctors";
import ContactMessage from "./admin/pages/ContactMessage";
import ProductManager from "./admin/pages/ProductManager";
import AppointmentManager from "./admin/pages/AppointmentManager";
import ProtectedRoute from "./admin/ProtectedRoute";
import SystemSettings from "./admin/pages/SystemSettings";
import Orders from "./admin/pages/Orders";

function AppContent() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin") &&
    !location.pathname.startsWith("/admin/login");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <div style={{ minHeight: "80vh" }}>
        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* FIXED — Appointment Page Route */}
          <Route path="/appoin" element={<Appointment />} />

          {/* USER AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <ManageUsers />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <ContactMessage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <ProductManager />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/appointments"
            element={
              <ProtectedRoute>
                <AppointmentManager />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/system-settings"
            element={
              <ProtectedRoute>
                <SystemSettings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
