"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";

import { getUserLatestScans } from "@/services/scans.services";
import Link from "next/link";

const CrititcalIssues = () => {
  const { user, loading } = useAuth();

  const [scans, setScans] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchLatestScans = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      // Prefer a server route like /api/scans/me that reads cookie+uid server-side.
      const data = await getUserLatestScans(user.id);

      setScans(data);
    } catch (error) {
      console.error("Error fetching latest scans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchLatestScans();
  }, [user && user.uid]);

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
              {scans.map((scan, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  {/* <div className="bg-red-100 rounded-lg p-2">
                    <div className="border border-dotted border-red-600 rounded-full p-1 text-red-600">
                      <FaExclamation />
                    </div>
                  </div> */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-semibold text-dark">
                        {scan.type === "free" ? `Scan Gratuit ` : scan.type}
                      </h4>
                      <div className="flex-1 space-y-2">
                        {scan.cgv.result !== null && (
                          <div className="flex items-center">
                            <p className="font-semibold text-dark w-1/6">CGV</p>
                            <p
                              className={`ml-2 text-xs px-2 py-1 rounded-full w-1/6 ${
                                scan.cgv.conform
                                  ? " bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {scan.cgv.conform ? "Conforme" : "Non Conforme"}
                            </p>
                            <p
                              className={`${
                                scan.cgv.errors.length > 0
                                  ? "text-red-600"
                                  : "text-green-600"
                              } ml-2`}
                            >
                              {scan.cgv.errors.length} problèmes détectés
                            </p>
                          </div>
                        )}
                        {scan.rgpd.result !== null && (
                          <div className="flex items-center">
                            <p className="font-semibold text-dark w-1/6">
                              RGPD
                            </p>
                            <p
                              className={`ml-2 text-xs px-2 py-1 rounded-full w-1/6" ${
                                scan.rgpd.conform
                                  ? " bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {scan.rgpd.conform ? "Conforme" : "Non Conforme"}
                            </p>
                            <p
                              className={`${
                                scan.rgpd.errors.length > 0
                                  ? "text-red-600"
                                  : "text-green-600"
                              } ml-2`}
                            >
                              {scan.rgpd.errors.length} problèmes détectés
                            </p>
                          </div>
                        )}
                        {scan.cookies.result !== null && (
                          <div className="flex items-center">
                            <p className="font-semibold text-dark w-1/6">
                              Cookies
                            </p>
                            <p
                              className={`ml-2 text-xs px-2 py-1 rounded-full w-1/6" ${
                                scan.cookies.conform
                                  ? " bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {scan.cookies.conform
                                ? "Conforme"
                                : "Non Conforme"}
                            </p>
                            <p
                              className={`${
                                scan.cookies.errors.length > 0
                                  ? "text-red-600"
                                  : "text-green-600"
                              } ml-2`}
                            >
                              {scan.cookies.errors.length} problèmes détectés
                            </p>
                          </div>
                        )}
                        {scan.legals.result !== null && (
                          <div className="flex items-center">
                            <p className="font-semibold text-dark w-1/6">
                              Légales
                            </p>
                            <p
                              className={`ml-2 text-xs px-2 py-1 rounded-full w-1/6"${
                                scan.legals.conform
                                  ? " bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {scan.legals.conform
                                ? "Conforme"
                                : "Non Conforme"}
                            </p>
                            <p
                              className={`${
                                scan.legals.errors.length > 0
                                  ? "text-red-600"
                                  : "text-green-600"
                              } ml-2`}
                            >
                              {scan.legals.errors.length} problèmes détectés
                            </p>
                          </div>
                        )}
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          scan.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : scan.status === "in_progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {scan.status === "completed"
                          ? "Terminé"
                          : scan.status === "in_progress"
                          ? "En cours"
                          : "Échoué"}
                      </span>
                      <Link
                        href="#"
                        className="bg-primary text-white hover:bg-blue-600 text-sm font-medium px-4 py-2 rounded-lg"
                      >
                        Voir le rapport
                      </Link>
                    </div>

                    {/* <div className="flex items-center space-x-4 mt-3">
                      <span className="text-xs text-gray-500">
                        Détecté il y a 2h
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">
                        Impact: Élevé
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <button className="text-xs text-primary hover:text-blue-600 font-medium">
                        Corriger automatiquement
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CrititcalIssues;
