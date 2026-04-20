import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import React from "react";
import { toast } from "react-toastify";

export const AntdForm = () => {
  const onClick = (data) => {
    console.log(data);
    toast.success("Form submited");
  };

  return (
    <div>
      <h2>RegistrationForm</h2>
      <Form layout="vertical" onFinish={onClick}>
        <Form.Item label="Name" name={"name"} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name={"email"}
          rules={[
            { required: true },
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

              message: "Email is not valid",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            { required: true },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Repeat password"
          name={"repeat password"}
          rules={[
            { required: true },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
