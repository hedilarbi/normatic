import React from "react";
import { BsExclamationLg } from "react-icons/bs";
import {
  FaMagnifyingGlass,
  FaTriangleExclamation,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const DashboardHero = () => {
  return (
    <section
      id="dashboard-header"
      className="bg-white p-6 border-b border-light-gray"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-dark mb-2">
            Dashboard de conformité
          </h1>
          <p className="text-gray-600 font-manrope">
            Surveillez et gérez la conformité réglementaire de votre entreprise
            en temps réel
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <i data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-calendar-days"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="calendar-days"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                ></path>
              </svg>
            </i>
            <span>Derniers 30 jours</span>
            <i data-fa-i2svg="">
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
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
            <i data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-rotate"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="rotate"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
                ></path>
              </svg>
            </i>
            <span>Actualiser</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-success to-green-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">
                Conformité globale
              </p>
              <p className="text-3xl font-bold mt-2">78%</p>
              <p className="text-green-100 text-xs mt-1">+5% ce mois</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="border border-dotted border-white rounded-full p-1 text-white">
                <BsExclamationLg />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm font-medium">
                Violations actives
              </p>
              <p className="text-3xl font-bold mt-2">23</p>
              <p className="text-red-100 text-xs mt-1">-8 cette semaine</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-white text-lg">
                <FaTriangleExclamation />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary to-blue-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Scans ce mois</p>
              <p className="text-3xl font-bold mt-2">156</p>
              <p className="text-blue-100 text-xs mt-1">+12% vs mois dernier</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-white text-lg">
                <FaMagnifyingGlass />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-gradient-to-r from-warning to-yellow-400 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm font-medium">
                Corrections auto
              </p>
              <p className="text-3xl font-bold mt-2">89</p>
              <p className="text-yellow-100 text-xs mt-1">Appliquées ce mois</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <div className="text-white text-lg">
                <FaWandMagicSparkles />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DashboardHero;
