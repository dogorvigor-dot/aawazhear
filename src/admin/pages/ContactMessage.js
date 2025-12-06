import React, { useState } from "react";
import {
  Table,
  Card,
  Tag,
  Input,
  Button,
  Modal,
  Space,
  message,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function ContactMessages() {
  const navigate = useNavigate();

  // SAMPLE DATA
  const [messages, setMessages] = useState([
    {
      key: 1,
      name: "Hari",
      email: "hari@gmail.com",
      message: "Need help with hearing test",
      status: "New",
      date: "2025-01-05",
    },
    {
      key: 2,
      name: "Sita",
      email: "sita@mail.com",
      message: "Do you offer speech therapy for kids?",
      status: "Seen",
      date: "2025-01-04",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  // FILTER FUNCTION
  const filteredData = messages.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.message.toLowerCase().includes(searchText.toLowerCase())
  );

  // DELETE MESSAGE
  const handleDelete = (key) => {
    setMessages(messages.filter((item) => item.key !== key));
    message.success("Message deleted");
  };

  // MARK AS SEEN
  const markAsSeen = (record) => {
    const updated = messages.map((msg) =>
      msg.key === record.key ? { ...msg, status: "Seen" } : msg
    );
    setMessages(updated);
    message.success("Marked as seen");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 200,
    },
    {
      title: "Message",
      dataIndex: "message",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 100,
      render: (status) =>
        status === "New" ? (
          <Tag color="green">New</Tag>
        ) : (
          <Tag color="blue">Seen</Tag>
        ),
    },
    {
      title: "Date",
      dataIndex: "date",
      width: 120,
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Actions",
      width: 160,
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            type="link"
            onClick={() => setSelectedMessage(record)}
          >
            View
          </Button>

          {record.status === "New" && (
            <Button size="small" type="link" onClick={() => markAsSeen(record)}>
              Mark as Seen
            </Button>
          )}

          <Button
            size="small"
            danger
            type="link"
            onClick={() => handleDelete(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      {/* BACK BUTTON */}
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/admin")}
        style={{ marginBottom: 15 }}
      >
        Back to Dashboard
      </Button>

      <Card
        title="Contact Messages"
        extra={
          <Input.Search
            placeholder="Search messages..."
            style={{ width: 250 }}
            allowClear
            onChange={(e) => setSearchText(e.target.value)}
          />
        }
      >
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      {/* VIEW MESSAGE MODAL */}
      {selectedMessage && (
        <Modal
          title="Message Details"
          open={true}
          onCancel={() => setSelectedMessage(null)}
          footer={[
            <Button key="close" onClick={() => setSelectedMessage(null)}>
              Close
            </Button>,
          ]}
        >
          <p><strong>Name:</strong> {selectedMessage.name}</p>
          <p><strong>Email:</strong> {selectedMessage.email}</p>
          <p><strong>Date:</strong> {selectedMessage.date}</p>
          <p><strong>Status:</strong> {selectedMessage.status}</p>
          <p><strong>Message:</strong></p>
          <p>{selectedMessage.message}</p>
        </Modal>
      )}
    </div>
  );
}
