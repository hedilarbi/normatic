import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center">
                <i className="text-white" data-fa-i2svg="">
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
              <span className="text-2xl font-bold font-inter">Normatic</span>
            </div>

            <p className="text-gray-300 font-manrope max-w-md">
              Automatisez votre conformité réglementaire avec l&apos;IA. RGPD,
              WCAG, AI Act, DSA, DMA - Une solution complète pour les
              entreprises européennes.
            </p>

            <div className="flex space-x-4">
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors cursor-pointer">
                <div className="text-white">
                  <FaLinkedin />
                </div>
              </span>
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors cursor-pointer">
                <div className="text-white">
                  <FaTwitter />
                </div>
              </span>
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors cursor-pointer">
                <div className="text-white">
                  <FaGithub />
                </div>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-inter">Solutions</h4>
            <div className="space-y-2 font-manrope text-gray-300">
              <span className="block hover:text-white transition-colors cursor-pointer">
                Scan automatisé
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Corrections IA
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Dashboard
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                API &amp; Intégrations
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Rapports
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-inter">Conformité</h4>
            <div className="space-y-2 font-manrope text-gray-300">
              <span className="block hover:text-white transition-colors cursor-pointer">
                RGPD
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                WCAG 2.1
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                AI Act
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                DSA
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                DMA
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold font-inter">Support</h4>
            <div className="space-y-2 font-manrope text-gray-300">
              <span className="block hover:text-white transition-colors cursor-pointer">
                Documentation
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Centre d&apos;aide
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Nous contacter
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Status
              </span>
              <span className="block hover:text-white transition-colors cursor-pointer">
                Changelog
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 font-manrope text-sm">
            © 2024 Normatic. Tous droits réservés.
          </div>

          <div className="flex space-x-6 text-sm font-manrope text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">
              Mentions légales
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Confidentialité
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Cookies
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              CGU
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
