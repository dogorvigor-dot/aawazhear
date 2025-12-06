import React from "react";
import { Table, Card } from "antd";

export default function Users() {
  const data = [
    { key: 1, name: "Amit", email: "amit@gmail.com", role: "User" },
    { key: 2, name: "Admin", email: "admin@gmail.com", role: "Admin" },
  ];

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  return (
    <Card title="Users List">
      <Table dataSource={data} columns={columns} />
    </Card>
  );
}
