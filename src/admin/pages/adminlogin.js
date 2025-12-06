import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@aawaz.com" && password === "admin123") {
        localStorage.setItem("adminToken", "true");
        window.location.href = "/admin";
      } else {
        setError("Invalid email or password. Please try again!");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#edf2f7",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          width: "400px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          animation: "fadeIn 0.8s ease"
        }}
      >
        <h1 style={{ marginBottom: "10px", color: "#2563eb" }}>
          Welcome, Admin
        </h1>
        <p style={{ marginBottom: "25px", color: "#555" }}>
          Please login to access the dashboard
        </p>

        {error && (
          <div
            style={{
              padding: "10px",
              background: "#fee2e2",
              color: "#b91c1c",
              borderRadius: "5px",
              marginBottom: "15px",
              border: "1px solid #fca5a5"
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              marginBottom: "18px",
              outlineColor: "#2563eb"
            }}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                marginBottom: "18px",
                outlineColor: "#2563eb"
              }}
            />

            <span
              style={{
                position: "absolute",
                right: "12px",
                top: "12px",
                cursor: "pointer",
                color: "#555"
              }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              background: loading ? "#3b82f6b3" : "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* Simple fade animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
