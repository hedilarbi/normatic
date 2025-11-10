import React from "react";

import Image from "next/image";

const DashboardSkeleton = () => {
  const linkBase =
    "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors";
  return (
    <div className="animate-pulse">
      <header
        id="header"
        className="bg-white border-b border-light-gray sticky top-0 z-50"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div
                href="/dashboard"
                className="text-2xl font-bold font-inter text-primary-dark"
              >
                <Image
                  src="/logo.svg"
                  alt="Normatic Logo"
                  width={160}
                  height={70}
                  className="object-contain w-auto h-16"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-primary">
              <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            <div className="h-5 w-32 rounded-full bg-gray-200 dark:bg-gray-800"></div>
          </div>
        </div>
      </header>
      <div className="flex bg-gray-50 ">
        <aside
          id="sidebar"
          className={`w-72 border-r border-light-gray h-[calc(100vh-100px)] overflow-y-auto `}
        >
          <div className="p-6 flex flex-col h-full justify-between pb-4">
            <div className="space-y-6">
              <div className="space-y-1">
                <div className={`${linkBase} `}>
                  <div className="text-2xl">
                    <div className="h-8 w-8 rounded-full  bg-gray-200 dark:bg-gray-800" />
                  </div>
                  <div className="w-full h-8  bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <div className={`${linkBase} `}>
                  <div className="text-2xl">
                    <div className="h-8 w-8 rounded-full  bg-gray-200 dark:bg-gray-800" />
                  </div>
                  <div className="w-full h-8  bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <div className={`${linkBase} `}>
                  <div className="text-2xl">
                    <div className="h-8 w-8 rounded-full  bg-gray-200 dark:bg-gray-800" />
                  </div>
                  <div className="w-full h-8  bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <div className={`${linkBase} `}>
                  <div className="text-2xl">
                    <div className="h-8 w-8 rounded-full  bg-gray-200 dark:bg-gray-800" />
                  </div>
                  <div className="w-full h-8  bg-gray-200 dark:bg-gray-800"></div>
                </div>
              </div>
            </div>
            <div className=" bg-gray-200 dark:bg-gray-800 h-10 w-full"></div>
          </div>
        </aside>
        <main
          className="flex-1 h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-y-auto relative w-full"
          id="main-content"
        ></main>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
