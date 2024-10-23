"use client";
import { useAppContext } from "@/app/AppProvider";
import React, { useEffect } from "react";

const UserManagement = () => {
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const resultProfile = await fetch("http://127.0.0.1:8000/api/user/ShowUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      console.log("req", resultProfile);
    };
    fetchRequest();
  }, [sessionToken]);
  return <div></div>;
};

export default UserManagement;
UserManagement.displayName = "UserManagement";
