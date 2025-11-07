"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
const Page = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-end">
        <h1 className="text-2xl font-bold">CGV</h1>
      </div>
    </>
  );
};

export default Page;
