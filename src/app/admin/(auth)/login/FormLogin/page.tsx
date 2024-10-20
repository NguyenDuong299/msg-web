import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useAppContext } from "@/app/AppProvider";

const LoginForm = () => {
  const { setSessionToken } = useAppContext();
  const handleSubmit = async (value: { email: string; password: string }) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (res.ok) {
        const resultNextSever = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: data.token }),
        });
        const resNextSever = await resultNextSever.json();
        setSessionToken(resNextSever.token)
    }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  return (
    <Form className="space-y-6" onFinish={handleSubmit}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      {/* <p className="text-red-500 text-xs text-center">{error && error}</p> */}
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember Me</Checkbox>
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        block
        className="w-full h-10 bg-blue-600 text-white rounded-full"
      >
        Login
      </Button>
      <hr className="my-4" />
      <Button
        type="default"
        block
        className="w-full h-10 bg-white text-black border border-gray-300 rounded-full mb-2"
      >
        <i className="fab fa-google mr-2" /> Login with Google
      </Button>
      <Button
        type="default"
        block
        className="w-full h-10 bg-white text-black border border-gray-300 rounded-full"
      >
        <i className="fab fa-facebook-f mr-2" /> Login with Facebook
      </Button>
    </Form>
  );
};

export default LoginForm;
LoginForm.displayName = "AdminLogin";
