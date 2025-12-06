import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SidebarMenu() {
  const navigate = useNavigate();

  const menuItems = [
    { key: "/admin", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/admin/users", icon: <UserOutlined />, label: "Users" },
    { key: "/admin/appointments", icon: <CalendarOutlined />, label: "Appointments" },
    { key: "/admin/products", icon: <ShoppingCartOutlined />, label: "Products" },
    { key: "/admin/messages", icon: <MessageOutlined />, label: "Messages" },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuItems}
      onClick={(item) => navigate(item.key)}
    />
  );
}
