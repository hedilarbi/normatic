"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { FaExclamation, FaRobot } from "react-icons/fa6";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const CrititcalIssues = () => {
  const { user, loading } = useAuth();
  const [scans, setScans] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchLatestScans = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const response = await getUserLatestScans(user.email);
      console.log(response);
      setScans(response);
    } catch (error) {
      console.error("Error fetching latest scans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchLatestScans();
  }, [user]);

  return (
    <section id="critical-issues" className="p-6">
      <div className="bg-white rounded-xl border border-light-gray">
        <div className="p-6 border-b border-light-gray">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-dark">Derniers Scans</h3>
            <button className="text-primary hover:text-blue-600 text-sm font-medium">
              Voir tout
            </button>
          </div>
        </div>
        {loading || isLoading ? (
          <div className="divide-y divide-light-gray animate-pulse">
            <div className="flex items-center justify-between p-6">
              <div className="w-28 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-36 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="w-28 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-36 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="w-28 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-36 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-20 h-5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-light-gray">
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-lg p-2">
                  <div className="border border-dotted border-red-600 rounded-full p-1 text-red-600">
                    <FaExclamation />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-dark">
                      Cookies non conformes RGPD
                    </h4>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      Critique
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1 font-manrope">
                    15 cookies tiers collectent des données sans consentement
                    explicite sur www.exemple.com
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="text-xs text-gray-500">
                      Détecté il y a 2h
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Impact: Élevé</span>
                    <span className="text-xs text-gray-500">•</span>
                    <button className="text-xs text-primary hover:text-blue-600 font-medium">
                      Corriger automatiquement
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-warning/20 rounded-lg p-2">
                  <div className="bg-warning rounded-full p-1 text-white">
                    <PiPersonArmsSpreadFill />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-dark">
                      Contraste insuffisant WCAG
                    </h4>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Important
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1 font-manrope">
                    8 éléments ne respectent pas le ratio de contraste minimum
                    de 4.5:1
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="text-xs text-gray-500">
                      Détecté il y a 4h
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Impact: Moyen</span>
                    <span className="text-xs text-gray-500">•</span>
                    <button className="text-xs text-primary hover:text-blue-600 font-medium">
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-purple/20 rounded-lg p-2">
                  <div className="text-purple text-lg">
                    <FaRobot />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-dark">
                      Documentation IA manquante
                    </h4>
                    <span className="bg-purple/20 text-purple text-xs px-2 py-1 rounded-full">
                      AI Act
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1 font-manrope">
                    Système de recommandation sans documentation de transparence
                    requise
                  </p>
                  <div className="flex items-center space-x-4 mt-3">
                    <span className="text-xs text-gray-500">
                      Détecté il y a 1j
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Impact: Moyen</span>
                    <span className="text-xs text-gray-500">•</span>
                    <button className="text-xs text-primary hover:text-blue-600 font-medium">
                      Générer documentation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CrititcalIssues;
