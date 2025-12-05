import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // DEMO → Replace with backend result
    login(email, "John Doe");

    navigate("/");
  };

  return (
    <div className="login-container">

      <div className="login-image">
        <img src="/images/login-side.jpg" alt="login-visual" />
      </div>

      <div className="login-form">
        <h2>Welcome Back</h2>
        <p>Please log in to continue</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="extra-options">
            <a href="/forgot-password">Forgot Password?</a>
            <span> | </span>
            <a href="/signup">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
