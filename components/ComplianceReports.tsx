import React from "react";
import {
  FaExclamation,
  FaFilePdf,
  FaRobot,
  FaUniversalAccess,
} from "react-icons/fa6";

const ComplianceReports = () => {
  return (
    <section id="compliance-reports" className="p-6">
      <div className="bg-white rounded-xl border border-light-gray">
        <div className="p-6 border-b border-light-gray">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-dark">
              Rapports de conformité
            </h3>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
              <FaFilePdf />
              <span>Générer rapport</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="border border-light-gray rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-success/20 rounded-lg p-2">
                <div className="text-success border border-dotted border-success rounded-full p-1">
                  <FaExclamation />
                </div>
              </div>
              <span className="text-xs text-gray-500">
                Mis à jour il y a 2h
              </span>
            </div>
            <h4 className="font-semibold text-dark mb-2">Rapport RGPD</h4>
            <p className="text-sm text-gray-600 mb-4">
              Analyse complète de la conformité RGPD avec recommandations
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-2 bg-gray-200 rounded-full">
                  <div className="w-7 h-2 bg-success rounded-full"></div>
                </div>
                <span className="text-sm text-success font-medium">92%</span>
              </div>
              <button className="text-primary hover:text-blue-600 text-sm font-medium">
                Télécharger
              </button>
            </div>
          </div>
          <div className="border border-light-gray rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-warning/20 rounded-lg p-2">
                <div className="text-warning">
                  <FaUniversalAccess />
                </div>
              </div>
              <span className="text-xs text-gray-500">
                Mis à jour il y a 4h
              </span>
            </div>
            <h4 className="font-semibold text-dark mb-2">Rapport WCAG</h4>
            <p className="text-sm text-gray-600 mb-4">
              Audit d&apos;accessibilité selon les critères WCAG 2.1 AA
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-2 bg-gray-200 rounded-full">
                  <div className="w-6 h-2 bg-warning rounded-full"></div>
                </div>
                <span className="text-sm text-warning font-medium">78%</span>
              </div>
              <button className="text-primary hover:text-blue-600 text-sm font-medium">
                Télécharger
              </button>
            </div>
          </div>
          <div className="border border-light-gray rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-100 rounded-lg p-2">
                <div className="text-red-600">
                  <FaRobot />
                </div>
              </div>
              <span className="text-xs text-gray-500">
                Mis à jour il y a 1j
              </span>
            </div>
            <h4 className="font-semibold text-dark mb-2">Rapport AI Act</h4>
            <p className="text-sm text-gray-600 mb-4">
              Évaluation de conformité pour les systèmes d&apos;IA
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-2 bg-gray-200 rounded-full">
                  <div className="w-4 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-sm text-red-600 font-medium">45%</span>
              </div>
              <button className="text-primary hover:text-blue-600 text-sm font-medium">
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceReports;
