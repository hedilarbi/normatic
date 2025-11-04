"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";
import {
  FaCheck,
  FaEllipsis,
  FaExclamation,
  FaPlay,
  FaRobot,
  FaTriangleExclamation,
} from "react-icons/fa6";
import HistoriqueDashboardSkeleton from "@/components/skeletons/HistoriqueDashboardSkeleton";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { getUserLatestScans } from "@/services/scans.services";

const ScanMonitoring = () => {
  const { user, loading } = useAuth();

  const [scans, setScans] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchLatestScans = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      // Prefer a server route like /api/scans/me that reads cookie+uid server-side.
      const data = await getUserLatestScans(user.id);
      console.log("Latest scans data:", data);
      setScans(data);
    } catch (error) {
      console.error("Error fetching latest scans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchLatestScans();
  }, [user && user.id]);

  const renderIcon = (type) => {
    switch (type) {
      case "rgpd":
        return (
          <div className="bg-success/20 rounded-lg p-1 mr-3">
            <div className="border border-dotted border-success rounded-full p-1 text-success">
              <FaExclamation />
            </div>
          </div>
        );

      case "legals":
        return (
          <div className="bg-success/20 rounded-lg p-1 mr-3">
            <div className="border border-dotted border-success rounded-full p-1 text-success">
              <FaExclamation />
            </div>
          </div>
        );
      case "free":
        return (
          <div className="bg-success/20 rounded-lg p-1 mr-3">
            <div className="border border-dotted border-success rounded-full p-1 text-success">
              <FaExclamation />
            </div>
          </div>
        );
      case "cgv":
        return (
          <div className="bg-success/20 rounded-lg p-1 mr-3">
            <div className="border border-dotted border-success rounded-full p-1 text-success">
              <FaExclamation />
            </div>
          </div>
        );
      case "wcag":
        return (
          <div className="bg-warning/20 rounded-lg p-1 mr-3">
            <div className="bg-warning rounded-full p-1 text-white">
              <PiPersonArmsSpreadFill />
            </div>
          </div>
        );
      case "ai_act":
        return (
          <div className="bg-purple/20 rounded-lg p-1 mr-3">
            <div className="text-purple text-lg">
              <FaRobot />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderState = (scan) => {
    if (scan.type === "free") {
      if (
        scan.cgv.conform === false ||
        scan.rgpd.conform === false ||
        scan.cookies.conform === false ||
        scan.legals.conform === false
      ) {
        return "Non comforme";
      } else {
        return "Conforme";
      }
    } else {
      if (scan[scan.type].conform === false) {
        return "Non comforme";
      } else {
        return "Conforme";
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";

    let date;
    // Firestore Timestamp
    if (timestamp?.toDate && typeof timestamp.toDate === "function") {
      date = timestamp.toDate();
    } else if (typeof timestamp === "number") {
      date = new Date(timestamp);
    } else if (timestamp?.seconds) {
      // object with seconds (e.g. REST or other representation)
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }

    if (isNaN(date.getTime())) return "";

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yy = String(date.getFullYear() % 100).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mi = String(date.getMinutes()).padStart(2, "0");

    return `${dd}/${mm}/${yy} ${hh}:${mi}`;
  };

  return (
    <section id="scan-monitoring" className="p-6">
      <div className="grid grid-cols-1  gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-light-gray">
          <div className="p-6 border-b border-light-gray">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-dark">
                Historique des scans
              </h3>
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard/scans/new"
                  className="flex items-center space-x-2 px-3 py-1 bg-primary text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                >
                  <div>
                    <FaPlay />
                  </div>
                  <span>Nouveau scan</span>
                </Link>
                <Link
                  href="/dashboard/scans"
                  className="flex items-center space-x-2 px-3 py-1 bg-white border border-primary text-primary rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span>Voir tout</span>
                </Link>
              </div>
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

              {isLoading || loading ? (
                <HistoriqueDashboardSkeleton />
              ) : (
                <tbody className="divide-y divide-gray-200">
                  {scans.map((scan, idx) => (
                    <tr className="hover:bg-gray-50" key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {renderIcon(scan.type)}
                          <span className="text-sm font-medium text-dark">
                            {scan.type === "free" ? "Scan Gratuit" : scan.type}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                        {scan.type === "free"
                          ? scan.websiteUrl
                          : scan[scan.type].url}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-success/20 text-success text-xs px-2 py-1 rounded-full">
                          {scan.status === "in_progress"
                            ? "En cours"
                            : scan.status === "completed"
                            ? "Terminé"
                            : "Échoue"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {renderState(scan)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {formatDate(scan.completedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Link
                          href="#"
                          className="text-primary hover:text-blue-600 mr-3"
                        >
                          Voir rapport
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>

        {/* <div className="bg-white rounded-xl border border-light-gray">
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
        </div> */}
      </div>
    </section>
  );
};

export default ScanMonitoring;
