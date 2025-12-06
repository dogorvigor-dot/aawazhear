import React from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Typography,
  Table,
  Tag,
  Button,
  Timeline,
  Divider,
} from "antd";

import {
  UserOutlined,
  CalendarOutlined,
  MessageOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

/* ---------------------- EXAMPLE PRODUCT ORDERS ---------------------- */
const recentProductOrders = [
  {
    key: 1,
    customer: "Rita Thapa",
    product: "Hearing Aid Pro X2",
    status: "Delivered",
    price: "Rs. 45,000",
    date: "2025-01-02",
  },
  {
    key: 2,
    customer: "Sujan Lama",
    product: "Ear Protection Kit",
    status: "Pending",
    price: "Rs. 2,500",
    date: "2025-01-06",
  },
  {
    key: 3,
    customer: "Mina Rai",
    product: "Digital Hearing Aid Air3",
    status: "Cancelled",
    price: "Rs. 38,000",
    date: "2025-01-07",
  },
];

/* ---------------------- COLUMN SETUP ---------------------- */
const orderColumns = [
  { title: "Customer", dataIndex: "customer" },
  { title: "Product", dataIndex: "product" },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color =
        status === "Delivered"
          ? "green"
          : status === "Pending"
          ? "gold"
          : "red";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  { title: "Price", dataIndex: "price" },
  { title: "Date", dataIndex: "date" },
];

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div style={{ padding: 20 }}>
      {/* -------------------------- Header -------------------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Title level={2} style={{ marginBottom: 0 }}>
            Admin Dashboard
          </Title>
          <Text type="secondary">Management overview and analytics.</Text>
        </div>

        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      {/* ----------------------- TOP STAT CARDS ---------------------- */}
      <Row gutter={20} style={{ marginTop: 20 }}>
        {/* PRODUCTS */}
        <Col span={6}>
          <Card
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
              borderRadius: 12,
            }}
          >
            <Statistic
              title="Total Products"
              value={48}
              prefix={<ShoppingCartOutlined />}
            />
            <Text type="success">
              <ArrowUpOutlined /> +3 this month
            </Text>
            <Button
              type="link"
              href="/admin/products"
              style={{ marginTop: 10 }}
            >
              Manage Products <ArrowRightOutlined />
            </Button>
          </Card>
        </Col>

        {/* ORDERS */}
        <Col span={6}>
          <Card
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
              borderRadius: 12,
            }}
          >
            <Statistic
              title="Total Orders"
              value={120}
              prefix={<CalendarOutlined />}
            />
            <Text type="success">
              <ArrowUpOutlined /> +14 this week
            </Text>
            <Button type="link" href="/admin/orders" style={{ marginTop: 10 }}>
              View Orders <ArrowRightOutlined />
            </Button>
          </Card>
        </Col>

        {/* DOCTORS */}
        <Col span={6}>
          <Card
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #e1f5fe, #b3e5fc)",
              borderRadius: 12,
            }}
          >
            <Statistic title="Doctors" value={8} prefix={<TeamOutlined />} />
            <Text type="success">
              <ArrowUpOutlined /> +1 this month
            </Text>
            <Button type="link" href="/admin/users" style={{ marginTop: 10 }}>
              Manage Doctors <ArrowRightOutlined />
            </Button>
          </Card>
        </Col>

        {/* MESSAGES */}
        <Col span={6}>
          <Card
            bordered={false}
            style={{
              background: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
              borderRadius: 12,
            }}
          >
            <Statistic
              title="Messages"
              value={42}
              prefix={<MessageOutlined />}
            />
            <Text type="danger">
              <ArrowUpOutlined /> +9 new
            </Text>
            <Button
              type="link"
              href="/admin/messages"
              style={{ marginTop: 10 }}
            >
              View Messages <ArrowRightOutlined />
            </Button>
          </Card>
        </Col>
      </Row>

      {/* ---------------------- PRODUCT ANALYTICS ---------------------- */}
      <Row gutter={20} style={{ marginTop: 30 }}>
        <Col span={16}>
          <Card title="Product Sales Overview" extra={<InfoCircleOutlined />}>
            <div
              style={{
                height: 260,
                textAlign: "center",
                paddingTop: 80,
                fontSize: 22,
                color: "#777",
              }}
            >
              🛒 <i>Product sales charts will appear here…</i>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Recent Activities">
            <Timeline
              items={[
                { color: "green", children: "Product 'Hearing Aid Air3' sold" },
                { color: "blue", children: "New product added to catalog" },
                { color: "red", children: "1 order cancelled" },
                { color: "gray", children: "Inventory updated" },
              ]}
            />
          </Card>
        </Col>
      </Row>

      {/* ---------------------- RECENT ORDERS TABLE ---------------------- */}
      <Card title="Recent Product Purchases" style={{ marginTop: 30 }}>
        <Table
          columns={orderColumns}
          dataSource={recentProductOrders}
          pagination={false}
        />
      </Card>

      {/* ---------------------- QUICK ACTIONS ---------------------- */}
      <Divider />
      <Title level={4}>Quick Actions</Title>

      <Row gutter={20}>
        <Col span={6}>
          <Button block type="primary" size="large" href="/admin/products/add">
            ➕ Add New Product
          </Button>
        </Col>

        <Col span={6}>
          <Button block type="default" size="large" href="/admin/products">
            📦 View Product List
          </Button>
        </Col>

        <Col span={6}>
          <Button block type="default" size="large" href="/admin/users">
            👨‍⚕️ Manage Doctors
          </Button>
        </Col>

        <Col span={6}>
          <Button block type="dashed" size="large" href="/admin/orders">
            🛍 View All Orders
          </Button>
        </Col>

        <Col span={6} style={{ marginTop: 20 }}>
          <Button block danger size="large" href="/admin/system-settings">
            ⚠ System Settings
          </Button>
        </Col>
      </Row>
    </div>
  );
}
