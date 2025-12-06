import React, { useState } from "react";
import {
  Table,
  Card,
  Tag,
  Button,
  Modal,
  Input,
  Select,
  Descriptions,
  message,
  Space,
  Divider,
} from "antd";
import { ArrowLeftOutlined, FilePdfOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy orders (replace with backend later)
  const [orders, setOrders] = useState([
    {
      id: "ORD-101",
      customer: "Hari Prasad",
      email: "hari@gmail.com",
      phone: "9812345678",
      address: "Kathmandu, Nepal",
      total: 22000,
      date: "2025-01-12",
      status: "Pending",
      payment: "COD",
      items: [
        { name: "Hearing Aid Pro", qty: 1, price: 12000 },
        { name: "Premium Ear Mold", qty: 1, price: 10000 },
      ],
    },
    {
      id: "ORD-102",
      customer: "Sita Kumari",
      email: "sita@gmail.com",
      phone: "9801234567",
      address: "Pokhara, Nepal",
      total: 12000,
      date: "2025-01-13",
      status: "Completed",
      payment: "Online",
      items: [{ name: "Digital Hearing Aid", qty: 1, price: 12000 }],
    },
  ]);

  const statusColors = {
    Pending: "orange",
    Processing: "blue",
    Completed: "green",
    Cancelled: "red",
  };

  // Filter Orders
  const filteredOrders = orders.filter((o) => {
    return (
      o.customer.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? o.status === statusFilter : true)
    );
  });

  // Update Status
  const updateStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    message.success("Order status updated!");
  };

  // Columns
  const columns = [
    {
      title: "Order ID",
      dataIndex: "id",
      width: 130,
      render: (id) => <strong>{id}</strong>,
    },
    {
      title: "Customer",
      dataIndex: "customer",
      sorter: (a, b) => a.customer.localeCompare(b.customer),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Total (Rs)",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      render: (val) => <strong>Rs {val}</strong>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, record) => (
        <Select
          defaultValue={status}
          onChange={(v) => updateStatus(record.id, v)}
          style={{ width: 140 }}
        >
          <Select.Option value="Pending">Pending</Select.Option>
          <Select.Option value="Processing">Processing</Select.Option>
          <Select.Option value="Completed">Completed</Select.Option>
          <Select.Option value="Cancelled">Cancelled</Select.Option>
        </Select>
      ),
    },
    {
      title: "Action",
      width: 120,
      render: (_, record) => (
        <Button type="primary" onClick={() => openOrderDetails(record)}>
          View
        </Button>
      ),
    },
  ];

  const openOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <Card
      title={
        <Space>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/admin")}
          />
          <span style={{ fontSize: 18, fontWeight: 600 }}>Order Management</span>
        </Space>
      }
    >
      {/* Filters */}
      <Space style={{ marginBottom: 20 }} wrap>
        <Input
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 260 }}
        />

        <Select
          placeholder="Filter by status"
          allowClear
          onChange={(value) => setStatusFilter(value)}
          style={{ width: 200 }}
        >
          <Select.Option value="Pending">Pending</Select.Option>
          <Select.Option value="Processing">Processing</Select.Option>
          <Select.Option value="Completed">Completed</Select.Option>
          <Select.Option value="Cancelled">Cancelled</Select.Option>
        </Select>
      </Space>

      {/* Orders Table */}
      <Table
        columns={columns}
        dataSource={filteredOrders}
        pagination={{ pageSize: 5 }}
        rowKey="id"
      />

      {/* Order Details Modal */}
      <Modal
        title={`Order Details — ${selectedOrder?.id}`}
        open={isModalOpen}
        width={720}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        {selectedOrder && (
          <>
            <Descriptions bordered column={2} size="middle">
              <Descriptions.Item label="Customer">
                {selectedOrder.customer}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {selectedOrder.email}
              </Descriptions.Item>

              <Descriptions.Item label="Phone">
                {selectedOrder.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {selectedOrder.address}
              </Descriptions.Item>

              <Descriptions.Item label="Payment Method">
                {selectedOrder.payment}
              </Descriptions.Item>
              <Descriptions.Item label="Order Date">
                {selectedOrder.date}
              </Descriptions.Item>

              <Descriptions.Item label="Status">
                <Tag color={statusColors[selectedOrder.status]}>
                  {selectedOrder.status}
                </Tag>
              </Descriptions.Item>

              <Descriptions.Item label="Total (Rs)">
                <strong>Rs {selectedOrder.total}</strong>
              </Descriptions.Item>
            </Descriptions>

            <Divider />

            <h3>Ordered Items</h3>
            {selectedOrder.items.map((item, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                • <strong>{item.name}</strong> — Qty: {item.qty}, Price: Rs{" "}
                {item.price}
              </div>
            ))}

            <Divider />

            <Space>
              <Button type="primary" icon={<FilePdfOutlined />}>
                Download Invoice
              </Button>

              <Select
                defaultValue={selectedOrder.status}
                style={{ width: 160 }}
                onChange={(value) => updateStatus(selectedOrder.id, value)}
              >
                <Select.Option value="Pending">Pending</Select.Option>
                <Select.Option value="Processing">Processing</Select.Option>
                <Select.Option value="Completed">Completed</Select.Option>
                <Select.Option value="Cancelled">Cancelled</Select.Option>
              </Select>

              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </Space>
          </>
        )}
      </Modal>
    </Card>
  );
}
