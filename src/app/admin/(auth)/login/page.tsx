"use client";
import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./FormLogin/page";

const AdminLogin = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl lg:max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block bg-login-image relative">
              <img
                className="h-full object-cover"
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=JqaQGsfn44UQ7kNvgE9ulyc&_nc_zt=14&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AmPaotMqMlJAZoz4IytUbZM&oh=00_AYDE608Z5AiRuMwWtmWtYS5MgRxE6UunJLwU9N4Ta9QrwQ&oe=671AEF67"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
                LOGIN
              </h1>
              <LoginForm />
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
