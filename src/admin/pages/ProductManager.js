import React, { useState } from "react";
import { Table, Card, Button, Input, Tag, Modal, Form, Select, message } from "antd";
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const [data, setData] = useState([
    {
      key: 1,
      name: "Hearing Aid Pro",
      price: 12000,
      category: "Digital",
      image: "https://via.placeholder.com/60"
    },
    {
      key: 2,
      name: "Premium Digital Hearing Aid",
      price: 22000,
      category: "Premium",
      image: "https://via.placeholder.com/60"
    }
  ]);

  // Filtered Data
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? item.category === categoryFilter : true)
    );
  });

  // Table Columns
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => <img src={img} alt="" width={50} style={{ borderRadius: 8 }} />,
    },
    {
      title: "Product",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (cat) => <Tag color="blue">{cat}</Tag>,
      filters: [
        { text: "Digital", value: "Digital" },
        { text: "Premium", value: "Premium" },
      ],
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Price (Rs)",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button
            icon={<EditOutlined />}
            style={{ marginRight: 10 }}
            onClick={() => handleEdit(record)}
          />
          <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
        </>
      )
    }
  ];

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
    message.success("Product deleted");
  };

  const handleEdit = (product) => {
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleAddProduct = () => {
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      if (values.key) {
        // Update
        setData((prev) =>
          prev.map((item) => (item.key === values.key ? { ...values } : item))
        );
        message.success("Product updated successfully!");
      } else {
        // Add new
        setData((prev) => [...prev, { ...values, key: Date.now() }]);
        message.success("New product added!");
      }
      setIsModalOpen(false);
    });
  };

  return (
    <Card
      title="Products Management"
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate("/admin")}>
          Back to Dashboard
        </Button>
      }
      style={{ paddingBottom: 20 }}
    >
      {/* Tools Row */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <Input
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 250 }}
        />

        <Select
          placeholder="Filter Category"
          allowClear
          style={{ width: 200 }}
          onChange={(value) => setCategoryFilter(value)}
        >
          <Select.Option value="Digital">Digital</Select.Option>
          <Select.Option value="Premium">Premium</Select.Option>
        </Select>

        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>

      {/* Table */}
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />

      {/* Add / Edit Modal */}
      <Modal
        title="Product Details"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText="Save"
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="key" hidden><Input /></Form.Item>

          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: "Enter product name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price (Rs)"
            name="price"
            rules={[{ required: true, message: "Enter price" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Select category" }]}
          >
            <Select>
              <Select.Option value="Digital">Digital</Select.Option>
              <Select.Option value="Premium">Premium</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image"
            rules={[{ required: true, message: "Enter image URL" }]}
          >
            <Input placeholder="https://example.com/product.jpg" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
