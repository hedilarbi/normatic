import React from "react";
import {
  FaChartLine,
  FaDownload,
  FaExclamation,
  FaPlay,
  FaRobot,
} from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const Aside = () => {
  return (
    <aside id="sidebar" className="w-72 bg-white border-r border-light-gray">
      <div className="p-6">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Actions rapides
            </h3>
            <button className="w-full bg-primary text-white rounded-lg px-4 py-3 font-medium hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
              <div>
                <FaPlay />
              </div>
              <span>Nouveau scan</span>
            </button>
            <button className="w-full bg-gray-100 text-gray-700 rounded-lg px-4 py-2 font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <div>
                <FaDownload />
              </div>
              <span>Exporter rapport</span>
            </button>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Navigation
            </h3>
            <span className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
              <div className="text-2xl">
                <FaChartLine />
              </div>
              <span className="font-medium">Vue d'ensemble</span>
            </span>
            <span className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="border border-dotted border-gray-600 rounded-full p-1 text-gray-600">
                <FaExclamation />
              </div>
              <span>Conformité RGPD</span>
            </span>
            <span className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="bg-gray-600 rounded-full p-1 text-white">
                <PiPersonArmsSpreadFill />
              </div>
              <span>Accessibilité WCAG</span>
            </span>
            <span className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="text-2xl">
                <FaRobot />
              </div>
              <span>AI Act</span>
            </span>
            <span className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer">
              <div className="text-2xl">
                <ImHammer2 />
              </div>
              <span>DSA/DMA</span>
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Statut réglementaire
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-success">RGPD</span>
                </div>
                <span className="text-xs text-success">92%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-sm font-medium text-warning">WCAG</span>
                </div>
                <span className="text-xs text-warning">78%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-600">
                    AI Act
                  </span>
                </div>
                <span className="text-xs text-red-600">45%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span className="text-sm font-medium text-purple">DSA</span>
                </div>
                <span className="text-xs text-purple">85%</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Activité récente
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">Scan RGPD terminé</p>
                  <p className="text-xs text-gray-500">il y a 2h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    3 violations détectées
                  </p>
                  <p className="text-xs text-gray-500">il y a 4h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">Rapport généré</p>
                  <p className="text-xs text-gray-500">il y a 6h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
