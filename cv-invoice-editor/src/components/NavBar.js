import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <Layout className="layout">
        <Header style={{ backgroundColor: 'rgba(17, 70, 73, 1)' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" style={{ backgroundColor: 'rgb(45, 137, 139)' }}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/invoice-editor">Invoice</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/cv-editor">CV</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default NavBar;
