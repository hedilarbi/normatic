import React from "react";
import { BsFillClockFill } from "react-icons/bs";
import {
  FaExclamation,
  FaRobot,
  FaTriangleExclamation,
  FaUserShield,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { HiMiniWrench } from "react-icons/hi2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const DashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Un dashboard
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              {" "}
              intuitif et puissant
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-manrope max-w-3xl mx-auto">
            Visualisez en temps réel l&apos;état de votre conformité avec des
            métriques détaillées et des actions recommandées
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-primary-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                </div>
                <span className="font-medium font-inter">
                  Normatic Dashboard
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-bell"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bell"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                    ></path>
                  </svg>
                </i>
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-primary-green/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary-green font-inter">
                        98.2%
                      </div>
                      <div className="text-sm text-gray-600 font-manrope">
                        Conformité globale
                      </div>
                    </div>
                    <div className="rounded-full border border-dotted border-primary-green text-primary-green p-1 text-2xl">
                      <FaExclamation />
                    </div>
                  </div>
                </div>

                <div className="bg-primary-blue/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary-blue font-inter">
                        247
                      </div>
                      <div className="text-sm text-gray-600 font-manrope">
                        Corrections auto
                      </div>
                    </div>
                    <div className="text-primary-blue text-2xl">
                      <FaWandMagicSparkles />
                    </div>
                  </div>
                </div>

                <div className="bg-primary-orange/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary-orange font-inter">
                        3
                      </div>
                      <div className="text-sm text-gray-600 font-manrope">
                        Actions requises
                      </div>
                    </div>
                    <div className="text-primary-orange text-2xl">
                      <FaTriangleExclamation />
                    </div>
                  </div>
                </div>

                <div className="bg-primary-purple/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary-purple font-inter">
                        24h
                      </div>
                      <div className="text-sm text-gray-600 font-manrope">
                        Dernière analyse
                      </div>
                    </div>
                    <div className="text-primary-purple text-2xl">
                      <BsFillClockFill />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold font-inter text-primary-dark">
                    Réglementations par statut
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-primary-blue text-xl">
                          <FaUserShield />
                        </div>
                        <span className="font-medium font-inter text-black">
                          RGPD
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-4/5 h-2 bg-primary-green rounded-full"></div>
                        </div>
                        <span className="text-sm font-jetbrains text-primary-green ">
                          96%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="rounded-full bg-primary-green text-white p-1">
                          <PiPersonArmsSpreadFill />
                        </div>
                        <span className="font-medium font-inter text-black">
                          WCAG 2.1
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-5/6 h-2 bg-primary-green rounded-full"></div>
                        </div>
                        <span className="text-sm font-jetbrains text-primary-green">
                          94%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-primary-purple text-xl">
                          <FaRobot />
                        </div>
                        <span className="font-medium font-inter text-black">
                          AI Act
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-full h-2 bg-primary-green rounded-full"></div>
                        </div>
                        <span className="text-sm font-jetbrains text-primary-green">
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold font-inter text-primary-dark">
                    Actions récentes
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-primary-green/10 rounded-lg">
                      <div className="text-primary-green">
                        <IoIosCheckmarkCircle />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium font-inter text-black">
                          Cookie banner mis à jour
                        </div>
                        <div className="text-xs text-gray-500 font-manrope">
                          Il y a 2 heures
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-primary-blue/10 rounded-lg">
                      <div className="text-primary-blue">
                        <HiMiniWrench />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium font-inter text-black">
                          Contraste images corrigé
                        </div>
                        <div className="text-xs text-gray-500 font-manrope">
                          Il y a 4 heures
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-primary-orange/10 rounded-lg">
                      <div className="text-primary-orange ">
                        <FaTriangleExclamation />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium font-inter text-black">
                          Validation manuelle requise
                        </div>
                        <div className="text-xs text-gray-500 font-manrope">
                          Il y a 6 heures
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
