import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Appointments from "./pages/Appointments";
import ContactMessages from "./pages/ContactMessages";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="messages" element={<ContactMessages />} />
      </Route>
    </Routes>
  );
}
