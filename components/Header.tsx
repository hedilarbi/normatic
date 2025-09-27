import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                <i className="text-white text-sm" data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-shield-halved"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shield-halved"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
                    ></path>
                  </svg>
                </i>
              </div>
              <span className="text-2xl font-bold font-inter text-primary-dark">
                Normatic
              </span>
            </div>

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
