import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Create Your Account</h2>
        <p>Join AawAZ Hearing & Speech Care Center</p>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" required />
          </div>

          <button type="submit" className="signup-btn">Create Account</button>

          <div className="extra-options">
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Signup;
