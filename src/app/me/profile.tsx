"use client";

import { cookies } from "next/headers";
import { useEffect } from "react";
import { useAppContext } from "../AppProvider";

export default async function Profile() {
  const { sessionToken } = useAppContext();
  useEffect(() => {
    const fetchRequest = async () => {
      const resultProfile = await fetch("http://127.0.0.1:8000/api/ShowUser", {
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
  return <div>Profile</div>;
}
