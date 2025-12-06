import React from "react";
import { List, Badge, Card } from "antd";

const notifications = [
  { id: 1, title: "New User Registered", time: "5 min ago" },
  { id: 2, title: "New Appointment Request", time: "20 min ago" },
  { id: 3, title: "Server Backup Completed", time: "1 hour ago" },
];

export default function Notifications() {
  return (
    <Card title="Notifications">
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Badge status="processing" />}
              title={item.title}
              description={item.time}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
