import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-blue font-medium font-inter">
                  <span>Solutions</span>
                  <i className="text-xs" data-fa-i2svg="">
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
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-blue font-medium font-inter">
                  <span>Conformité</span>
                  <i className="text-xs" data-fa-i2svg="">
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
                </button>
              </div>
              <span className="text-gray-700 hover:text-primary-blue font-medium font-inter cursor-pointer">
                Tarifs
              </span>
              <span className="text-gray-700 hover:text-primary-blue font-medium font-inter cursor-pointer">
                Ressources
              </span>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-blue font-medium font-inter">
              Connexion
            </button>
            <button className="bg-primary-blue text-white px-6 py-2 rounded-lg font-medium font-inter hover:bg-blue-600 transition-colors">
              Démo gratuite
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
