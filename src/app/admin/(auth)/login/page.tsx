"use client";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (value: { email: string; password: string }) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      console.log("res", res);
      if (res.status === 401) {
        const errorData = await res.json();
        setError(errorData.message);
      }
      const resultFromNextSever = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("resultFromNextSever", resultFromNextSever);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl lg:max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block bg-login-image relative">
              <img
                className="h-full object-cover"
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=PJZLcT72Hj4Q7kNvgH3MBeI&_nc_ht=scontent.fhan17-1.fna&_nc_gid=Aa1pHD3aA-HnA7SSIzdRWz8&oh=00_AYD-aZSRQy2w7nfnc53i-ffObhzOyjs3nTrs7h8EGbAMlw&oe=6712CE27"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
                LOGIN
              </h1>
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
                  <Input />
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
                  <Input.Password />
                </Form.Item>
                <p className="text-red-500 text-xs text-center">
                  {error && error}
                </p>
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
              <hr className="my-4" />
              <div className="text-center">
                <a className="text-sm text-blue-600 hover:underline cursor-pointer">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="text-sm text-blue-600 hover:underline"
                  href="register.html"
                >
                  Create an Account!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
AdminLogin.displayName = "AdminLogin";
