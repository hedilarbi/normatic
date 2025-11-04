import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderButtons from "./HeaderButtons";
const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
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

            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Link
                  href="#features"
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-blue font-medium font-inter"
                >
                  <span>Solutions</span>
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="#regulations"
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-blue font-medium font-inter"
                >
                  <span>Conformité</span>
                </Link>
              </div>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-primary-blue font-medium font-inter cursor-pointer"
              >
                Tarifs
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-primary-blue font-medium font-inter cursor-pointer"
              >
                FAQ
              </Link>
            </nav>
          </div>

          <HeaderButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
