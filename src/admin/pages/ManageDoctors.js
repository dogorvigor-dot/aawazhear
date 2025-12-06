import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Input,
  Select,
  Modal,
  Tag,
  Card,
  Row,
  Col,
  Space,
  Typography,
} from "antd";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function ManageDoctors() {
  const { Title, Text } = Typography;
  const [form] = Form.useForm();

  const [doctors, setDoctors] = useState([
    {
      key: 1,
      id: "DR-1001",
      name: "Dr. Suman Karki",
      specialty: "ENT Specialist",
      status: "Active",
      createdAt: "2025-01-01",
    },
    {
      key: 2,
      id: "DR-1002",
      name: "Dr. Priya Sharma",
      specialty: "Speech Therapist",
      status: "Inactive",
      createdAt: "2025-01-04",
    },
  ]);

  const [editingDoctor, setEditingDoctor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onFinish = (values) => {
    if (editingDoctor) {
      setDoctors(
        doctors.map((doc) =>
          doc.key === editingDoctor.key ? { ...doc, ...values } : doc
        )
      );
      setEditingDoctor(null);
    } else {
      const newDoctor = {
        key: Date.now(),
        id: "DR-" + Math.floor(1000 + Math.random() * 9000),
        createdAt: new Date().toISOString().split("T")[0],
        ...values,
      };
      setDoctors([...doctors, newDoctor]);
    }

    form.resetFields();
    setIsModalVisible(false);
  };

  const handleEdit = (doctor) => {
    setEditingDoctor(doctor);
    form.setFieldsValue(doctor);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure?",
      okText: "Delete",
      okType: "danger",
      onOk: () => setDoctors(doctors.filter((doc) => doc.key !== key)),
    });
  };

  const columns = [
    { title: "Doctor ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Specialty", dataIndex: "specialty" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    { title: "Created", dataIndex: "createdAt" },
    {
      title: "Actions",
      render: (_, doctor) => (
        <Space>
          <Button type="primary" size="small" onClick={() => handleEdit(doctor)}>
            Edit
          </Button>
          <Button danger size="small" onClick={() => handleDelete(doctor.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ padding: 25 }}>
      {/* HEADER */}
      <Card style={{ marginBottom: 20 }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Space align="center">
              <Button
                type="text"
                icon={<ArrowLeftOutlined style={{ fontSize: 20 }} />}
                onClick={() => (window.location.href = "/admin/dashboard")}
              />

              <div>
                <Title level={3} style={{ margin: 0 }}>
                  👨‍⚕️ Manage Doctors
                </Title>
                <Text type="secondary">
                  Add, update, and manage clinic doctors.
                </Text>
              </div>
            </Space>
          </Col>
        </Row>
      </Card>

      {/* ACTION BAR */}
      <Card style={{ marginBottom: 20 }}>
        <Row gutter={20}>
          <Col span={8}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search doctor..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Col>

          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setEditingDoctor(null);
                form.resetFields();
                setIsModalVisible(true);
              }}
            >
              Add Doctor
            </Button>
          </Col>
        </Row>
      </Card>

      {/* TABLE */}
      <Card>
        <Table
          columns={columns}
          dataSource={filteredDoctors}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      {/* MODAL */}
      <Modal
        title={editingDoctor ? "Edit Doctor" : "Add Doctor"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Doctor Name"
            rules={[{ required: true, message: "Enter doctor's name" }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="specialty"
            label="Specialty"
            rules={[{ required: true, message: "Select specialty" }]}
          >
            <Select placeholder="Select specialty">
              <Select.Option value="ENT Specialist">ENT Specialist</Select.Option>
              <Select.Option value="Audiologist">Audiologist</Select.Option>
              <Select.Option value="Speech Therapist">Speech Therapist</Select.Option>
              <Select.Option value="Hearing Aid Specialist">
                Hearing Aid Specialist
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Select status" }]}
          >
            <Select>
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editingDoctor ? "Update Doctor" : "Add Doctor"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
