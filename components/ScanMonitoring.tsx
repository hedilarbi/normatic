import React from "react";
import {
  FaCheck,
  FaEllipsis,
  FaExclamation,
  FaPlay,
  FaRobot,
  FaTriangleExclamation,
} from "react-icons/fa6";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const ScanMonitoring = () => {
  return (
    <section id="scan-monitoring" className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-light-gray">
          <div className="p-6 border-b border-light-gray">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-dark">
                Historique des scans
              </h3>
              <button className="flex items-center space-x-2 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                <div>
                  <FaPlay />
                </div>
                <span>Nouveau scan</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cible
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Violations
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-success/20 rounded-lg p-1 mr-3">
                        <div className="border border-dotted border-success rounded-full p-1 text-success">
                          <FaExclamation />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-dark">
                        RGPD
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                    www.exemple.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full">
                      Terminé
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    3 détectées
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Il y a 2h
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-primary hover:text-blue-600 mr-3">
                      Voir rapport
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsis />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-warning/20 rounded-lg p-1 mr-3">
                        <div className="bg-warning rounded-full p-1 text-white">
                          <PiPersonArmsSpreadFill />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-dark">
                        WCAG
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                    app.exemple.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      En cours
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    -
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Il y a 30min
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-warning hover:text-yellow-600 mr-3">
                      Suivre
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsis />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-purple/20 rounded-lg p-1 mr-3">
                        <div className="text-purple text-lg">
                          <FaRobot />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-dark">
                        AI Act
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                    api.exemple.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full">
                      Terminé
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    1 détectée
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Il y a 4h
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-primary hover:text-blue-600 mr-3">
                      Voir rapport
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsis />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-light-gray">
          <div className="p-6 border-b border-light-gray">
            <h3 className="text-lg font-semibold text-dark">
              Surveillance active
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-dark">
                    Site principal
                  </p>
                  <p className="text-xs text-gray-500 font-mono">
                    www.exemple.com
                  </p>
                </div>
              </div>
              <div className="text-success">
                <FaCheck />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-dark">Application</p>
                  <p className="text-xs text-gray-500 font-mono">
                    app.exemple.com
                  </p>
                </div>
              </div>
              <div className="text-success">
                <FaCheck />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-dark">API</p>
                  <p className="text-xs text-gray-500 font-mono">
                    api.exemple.com
                  </p>
                </div>
              </div>
              <div className="text-warning">
                <FaTriangleExclamation />
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-light-gray">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Prochaine vérification
                </p>
                <p className="text-lg font-semibold text-dark">Dans 2h 15min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanMonitoring;
