import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Switch,
  Form,
  Typography,
  message,
  Divider,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function SystemSettings() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const saveSettings = (section = "Settings") => {
    setLoading(true);
    setTimeout(() => {
      message.success(`${section} saved successfully!`);
      setLoading(false);
    }, 700);
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      {/* BACK BUTTON */}
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/admin")}
        style={{ marginBottom: 20 }}
      >
        Back to Dashboard
      </Button>

      <Title level={2}>System Settings</Title>
      <p style={{ color: "#555" }}>
        Manage your website's essential settings and admin preferences.
      </p>

      {/* WEBSITE INFO */}
      <Card title="Website Information" style={{ marginTop: 20 }}>
        <Form layout="vertical">
          <Form.Item label="Website Name">
            <Input placeholder="Aawaz Hearing & Speech Care Center" />
          </Form.Item>

          <Form.Item label="Address">
            <Input placeholder="Enter your clinic address" />
          </Form.Item>

          <Form.Item label="Contact Email">
            <Input placeholder="info@example.com" />
          </Form.Item>

          <Form.Item label="Phone Number">
            <Input placeholder="+977 98XXXXXXXX" />
          </Form.Item>

          <Button type="primary" loading={loading} onClick={() => saveSettings("Website Information")}>
            Save
          </Button>
        </Form>
      </Card>

      <Divider />

      {/* NOTIFICATION SETTINGS */}
      <Card title="Notifications">
        <Form layout="vertical">
          <Form.Item label="Email Alerts">
            <Switch defaultChecked />
          </Form.Item>

          <Form.Item label="Notification Email">
            <Input placeholder="alerts@example.com" />
          </Form.Item>

          <Button type="primary" loading={loading} onClick={() => saveSettings("Notification Settings")}>
            Save
          </Button>
        </Form>
      </Card>

      <Divider />

      {/* ADMIN SETTINGS */}
      <Card title="Admin Account Settings">
        <Form layout="vertical">
          <Form.Item label="Admin Email">
            <Input placeholder="admin@example.com" />
          </Form.Item>

          <Form.Item label="New Password">
            <Input.Password placeholder="Enter new password" />
          </Form.Item>

          <Form.Item label="Confirm Password">
            <Input.Password placeholder="Re-enter new password" />
          </Form.Item>

          <Button type="primary" loading={loading} onClick={() => saveSettings("Admin Account")}>
            Update Admin Account
          </Button>
        </Form>
      </Card>

      <Divider />

      {/* DATA EXPORT */}
      <Card title="Data Export">
        <Button block style={{ marginTop: 10 }}>Export Users CSV</Button>
        <Button block style={{ marginTop: 10 }}>Export Appointments CSV</Button>
        <Button block style={{ marginTop: 10 }}>Export Messages CSV</Button>
        <Button block style={{ marginTop: 10 }}>Export Products CSV</Button>
      </Card>
    </div>
  );
}
