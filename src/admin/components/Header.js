import React from "react";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <header style={{
      height: "60px",
      background: "#f1f5f9",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      borderBottom: "1px solid #ddd"
    }}>
      <h3>Admin Panel</h3>

      <button
        onClick={logout}
        style={{
          padding: "8px 15px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
