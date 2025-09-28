import React from "react";
import { FaPalette, FaWandMagicSparkles } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const AutomatedCorrections = () => {
  return (
    <section id="automated-corrections" className="p-6">
      <div className="bg-white rounded-xl border border-light-gray">
        <div className="p-6 border-b border-light-gray">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-dark">
                Corrections automatiques
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Violations corrigées automatiquement par Normatic
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Auto-correction:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="divide-y divide-light-gray">
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-success/20 rounded-lg p-2">
                <div className="text-success">
                  <FaWandMagicSparkles />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-dark">
                    Banner de cookies RGPD ajouté
                  </h4>
                  <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full">
                    Appliqué
                  </span>
                </div>
                <p className="text-gray-600 mt-1 font-manrope">
                  Banner de consentement conforme ajouté automatiquement sur
                  toutes les pages
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <span className="text-xs text-gray-500">
                    Appliqué il y a 1h
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    Impact: 15 violations résolues
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <button className="text-xs text-primary hover:text-blue-600 font-medium">
                    Voir les changements
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-success/20 rounded-lg p-2">
                <div className="text-success">
                  <FaPalette />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-dark">
                    Contraste des couleurs optimisé
                  </h4>
                  <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full">
                    Appliqué
                  </span>
                </div>
                <p className="text-gray-600 mt-1 font-manrope">
                  8 éléments mis à jour pour respecter le ratio de contraste
                  WCAG AA
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <span className="text-xs text-gray-500">
                    Appliqué il y a 3h
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    Impact: 8 violations résolues
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <button className="text-xs text-primary hover:text-blue-600 font-medium">
                    Voir avant/après
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-warning/20 rounded-lg p-2">
                <div className="text-warning">
                  <GoClockFill />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-dark">
                    Attributs alt manquants
                  </h4>
                  <span className="bg-warning/20 text-warning text-xs px-2 py-1 rounded-full">
                    En attente
                  </span>
                </div>
                <p className="text-gray-600 mt-1 font-manrope">
                  12 images nécessitent une description pour
                  l&apos;accessibilité
                </p>
                <div className="flex items-center space-x-4 mt-3">
                  <span className="text-xs text-gray-500">
                    Détecté il y a 2h
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">
                    Correction planifiée
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <button className="text-xs text-primary hover:text-blue-600 font-medium">
                    Appliquer maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AutomatedCorrections;
