import React, { useEffect } from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  // const token = localStorage.getItem("admin-token");

  //   useEffect(() => {
  //     if (token) {
  //       setAuthToken(token);

  //       dispatch(
  //         getAdminLoggedIn(() => {
  //           history.push("/admin/dashboard");
  //         })
  //       );
  //     }
  //   }, [token, dispatch, history]);

  const onFinish = (values) => {
    if (
      values.email === "informationkiosk.admin@gmail.com" &&
      values.password === "kioskadmin2022"
    ) {
      localStorage.setItem("isLoggedIn", true);
      alert("Login success");
      navigate("/admin/activities");
    } else {
      localStorage.setItem("isLoggedIn", false);
      alert("Login failed: Username or password is incorrect!");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <Card
        title={
          <div className="logo-container d-flex align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <img
                src={Logo}
                alt="Logo"
                width="65"
                height="65"
                style={{ marginRight: 15 }}
              />
              <p className="fs-2 m-0 ">UA-TLMC Information Kiosk</p>{" "}
            </div>
          </div>
        }
        className="col-5 col-md-6"
      >
        <h3 className="m-3" style={{ color: "#444" }}>
          {" "}
          Please login your account.
        </h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
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
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
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

          <div className="d-flex justify-content-center">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
