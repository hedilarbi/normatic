import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";

import { AuthButton } from "./auth-button";

const DashboardHeader = () => {
  return (
    <header
      id="header"
      className="bg-white border-b border-light-gray sticky top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="text-2xl font-bold font-inter text-primary-dark"
            >
              <Image
                src="/logo.svg"
                alt="Normatic Logo"
                width={160}
                height={70}
                className="object-contain w-auto h-16"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <span className="text-primary font-medium border-b-2 border-primary pb-4 cursor-pointer">
              Dashboard
            </span>
            <span className="text-gray-600 hover:text-primary pb-4 cursor-pointer">
              Scans
            </span>
            <span className="text-gray-600 hover:text-primary pb-4 cursor-pointer">
              Conformité
            </span>
            <span className="text-gray-600 hover:text-primary pb-4 cursor-pointer">
              Rapports
            </span>
            <span className="text-gray-600 hover:text-primary pb-4 cursor-pointer">
              Paramètres
            </span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />

            <div className="absolute left-3 top-3 text-gray-400">
              <FaMagnifyingGlass />
            </div>
          </div>
          <button className="relative p-2 text-gray-600 hover:text-primary">
            <div className="text-lg">
              <FaBell />
            </div>
            <span className="absolute -top-1 -right-1 bg-warning text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <AuthButton />
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium text-dark">Jean Dupont</div>
              <div className="text-gray-500">Admin</div>
            </div>
            <i className="text-gray-400" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-chevron-down"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                ></path>
              </svg>
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
