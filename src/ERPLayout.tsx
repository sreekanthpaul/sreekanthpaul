//import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;

function ERPLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          style={{ height: "100%", borderRight: 0 }}
          items={[
            { key: "dashboard", icon: <UserOutlined />, label: "Dashboard" },
            { key: "products", icon: <LaptopOutlined />, label: "Products" },
            { key: "orders", icon: <NotificationOutlined />, label: "Orders" },
            { key: "settings", icon: <UserOutlined />, label: "Settings" },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
          <h2>ERP System</h2>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <h3>Welcome to your ERP dashboard!</h3>
            <p>You can manage products, orders, and settings here.</p>
            <Button type="primary">Get Started</Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ERPLayout;
