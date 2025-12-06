import React, { useState } from "react";
import { Layout, Avatar, Dropdown, Badge } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import { BellOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const profileMenu = {
    items: [
      { key: "1", label: "Profile" },
      { key: "2", label: "Settings" },
      {
        key: "3",
        label: "Logout",
        icon: <LogoutOutlined />,
        onClick: () => {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        },
      },
    ],
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" style={{ color: "white", padding: 20 }}>
          {collapsed ? "A" : "Admin Panel"}
        </div>
        <SidebarMenu />
      </Sider>

      {/* MAIN LAYOUT */}
      <Layout>
        
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <Badge count={5}>
            <BellOutlined style={{ fontSize: 20, marginRight: 20 }} />
          </Badge>

          <Dropdown menu={profileMenu} placement="bottomRight">
            <Avatar style={{ backgroundColor: "#1677ff", cursor: "pointer" }}>
              A
            </Avatar>
          </Dropdown>
        </Header>

        <Content style={{ margin: 20 }}>
          <Outlet /> {/* PAGE CONTENT */}
        </Content>
      </Layout>
    </Layout>
  );
}
