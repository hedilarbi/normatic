import React from "react";
import { FaCircleQuestion, FaDownload, FaGear } from "react-icons/fa6";

const SettingsConfig = () => {
  return (
    <section id="settings-config" className="p-6">
      <div className="bg-white rounded-xl border border-light-gray">
        <div className="p-6 border-b border-light-gray">
          <h3 className="text-lg font-semibold text-dark">
            Configuration et paramètres
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-dark">
              Surveillance automatique
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Scans quotidiens</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Corrections auto</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Alertes email</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-dark">Niveaux de priorité</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">RGPD</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  Critique
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">WCAG</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Élevé
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Act</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Élevé
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">DSA/DMA</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Moyen
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-dark">Actions rapides</h4>
            <div className="space-y-2 ">
              <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <FaGear />
                </div>
                <span>Paramètres avancés</span>
              </button>
              <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <FaDownload />
                </div>
                <span>Exporter données</span>
              </button>
              <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <FaCircleQuestion />
                </div>
                <span>Centre d&apos;aide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsConfig;
