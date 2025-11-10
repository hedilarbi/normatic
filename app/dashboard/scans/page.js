"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { getScansByUser } from "@/services/scans.services";
import HistoriqueDashboardSkeleton from "@/components/skeletons/HistoriqueDashboardSkeleton";
import Link from "next/link";
import { FaExclamation, FaRobot } from "react-icons/fa";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
const Page = () => {
  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);
  const [scans, setScans] = React.useState([]);

  const fetchUserTypedScans = async () => {
    try {
      const response = await getScansByUser(user.uid);

      setScans(response);
    } catch (error) {
      console.error("Error fetching scans:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetchUserTypedScans();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Loading...
      </div>
    );
  }

  const renderState = (scan) => {
    if (scan.rgpd.conform === false) {
      return "Non conforme";
    } else {
      return "Conforme";
    }
  };
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
    <>
      <div className="flex justify-between bg-white p-6 border-b border-light-gray">
        <h1 className="text-2xl font-bold">Tous les scans</h1>
      </div>
      <div className="bg-white p-6 border-b border-light-gray mt-4">
        {isLoading ? (
          <HistoriqueDashboardSkeleton />
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
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
              {scans.map((scan, idx) => {
                const url =
                  scan.type === "free"
                    ? scan.websiteUrl
                    : scan?.[scan.type]?.url;
                return (
                  <tr className="hover:bg-gray-50" key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderIcon(scan.type)}
                        <span className="text-sm font-medium text-dark">
                          {scan.type === "free" ? "Scan Gratuit" : scan.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-52 text-sm text-gray-600 font-mono">
                      <span
                        className="block overflow-hidden text-ellipsis whitespace-nowrap"
                        title={url} // shows full text on hover
                      >
                        {url}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={` text-xs px-2 py-1 rounded-full ${
                          scan.status === "in_progress"
                            ? "bg-warning/20 text-warning"
                            : scan.status === "completed"
                            ? "bg-success/20 text-success"
                            : "bg-red-500/20 text-red-500"
                        }`}
                      >
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
                        href={`/dashboard/scans/${scan.scanUuid}`}
                        className="text-primary hover:text-blue-600 mr-3"
                      >
                        Voir rapport
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Page;
