import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold font-inter text-primary-dark"
            >
              <Image
                src="/logoLight.svg"
                alt="Normatic Logo"
                width={160}
                height={70}
                className="object-contain w-auto h-16"
              />
            </Link>

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
            © 2025 Normatic. Tous droits réservés.
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
