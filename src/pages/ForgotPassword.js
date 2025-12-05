import React from "react";
import "../styles/forgot.css";

export default function ForgotPassword() {
  return (
    <div className="forgot-container">

      <div className="forgot-box">
        <h2>Reset Password</h2>
        <p>Enter your registered email, and we will send you a reset link.</p>

        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="reset-btn">Send Reset Link</button>

          <div className="back-login">
            <a href="/login">← Back to Login</a>
          </div>
        </form>
      </div>

    </div>
  );
}
