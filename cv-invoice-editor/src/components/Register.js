import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

class Register extends React.Component {
  state = {};
  onFinish(values) {
    console.log("Received values of form: ", values);
  }
  render() {
    return (
      <div className="loginPage">
        <div className="popUp">
          <h1 className="titleText">Register</h1>
          <hr className="hLine"></hr>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button loginButton"
              >
                Sign up
              </Button>
            </Form.Item>
            <Link to="/login" className="titleText ">
              Log in
            </Link>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
