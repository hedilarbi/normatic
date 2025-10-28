"use client";
import Image from "next/image";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
const HeaderProfileSection = () => {
  const { loading, user } = useAuth();
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center justify-center bg-gray-400 text-black p-2 rounded-full w-10 h-10">
        <FaUserAlt />
      </div>
      <div className="text-sm">
        <div className="font-medium text-dark capitalize">
          {user?.accountType === "individual" ? user?.last_name : user?.name}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderProfileSection;
