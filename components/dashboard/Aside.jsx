"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaChartLine, FaExclamation } from "react-icons/fa6";
import LogoutButton from "./LogoutButton";

const linkBase =
  "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors";
const inactive = "text-gray-600 hover:bg-gray-100";
const active = "bg-primary/10 text-primary";

const Aside = () => {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/tableau-de-bord"
      ? pathname === "/tableau-de-bord"
      : pathname.startsWith(href);

  return (
    <aside
      id="sidebar"
      className={`w-72 border-r border-light-gray h-[calc(100vh-100px)] overflow-y-auto `}
    >
      <div className="p-6 flex flex-col h-full justify-between pb-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className={`${linkBase} ${
                isActive("/dashboard") ? active : inactive
              }`}
            >
              <div className="text-2xl">
                <FaChartLine />
              </div>
              <span className="font-medium">Vue d&apos;ensemble</span>
            </Link>

            <Link
              href="/dashboard/rgpd"
              className={`${linkBase} ${
                isActive("/dashboard/rgpd") ? active : inactive
              }`}
            >
              <div
                className={`border border-dotted rounded-full p-1 ${
                  isActive("/dashboard/rgpd")
                    ? "border-current"
                    : "border-gray-600 text-gray-600"
                }`}
              >
                <FaExclamation />
              </div>
              <span>Conformité RGPD</span>
            </Link>

            <Link
              href="/dashboard/legales"
              className={`${linkBase} ${
                isActive("/dashboard/legales") ? active : inactive
              }`}
            >
              <div
                className={`border border-dotted rounded-full p-1 ${
                  isActive("/dashboard/legales")
                    ? "border-current"
                    : "border-gray-600 text-gray-600"
                }`}
              >
                <FaExclamation />
              </div>
              <span>Conformité Mentions légales</span>
            </Link>

            <Link
              href="/dashboard/cgv"
              className={`${linkBase} ${
                isActive("/dashboard/cgv") ? active : inactive
              }`}
            >
              <div
                className={`border border-dotted rounded-full p-1 ${
                  isActive("/dashboard/cgv")
                    ? "border-current"
                    : "border-gray-600 text-gray-600"
                }`}
              >
                <FaExclamation />
              </div>
              <span>Conformité CGV</span>
            </Link>
          </div>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
};

export default Aside;
