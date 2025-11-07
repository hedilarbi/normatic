"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserTypedScans } from "@/services/scans.services";
import HistoriqueDashboardSkeleton from "@/components/skeletons/HistoriqueDashboardSkeleton";
import Link from "next/link";
import LaunchScanModal from "@/components/LaunchScanModal";

const POLL_MS = 5000;

const Page = () => {
  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);
  const [scans, setScans] = React.useState([]);
  const [showLaunchModal, setShowLaunchModal] = React.useState(false);
  const [refresh, setRefresh] = React.useState(0);

  const isFetchingRef = React.useRef(false);
  const mountedRef = React.useRef(true);

  const fetchUserTypedScans = async () => {
    if (!user?.uid) return;
    if (isFetchingRef.current) return;

    try {
      isFetchingRef.current = true;
      // keep existing table while polling; only show skeleton on first load
      setIsLoading((prev) => (scans.length ? prev : true));

      const response = await getUserTypedScans(user.uid, "rgpd");
      if (!mountedRef.current) return;
      setScans(response || []);
    } catch (error) {
      console.error("Error fetching scans:", error);
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
        isFetchingRef.current = false;
      }
    }
  };

  React.useEffect(() => {
    mountedRef.current = true;
    if (user) fetchUserTypedScans();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, refresh]);

  React.useEffect(() => {
    if (!user?.uid) return;

    const shouldPoll = () =>
      !showLaunchModal && document.visibilityState === "visible";

    let intervalId;

    const start = () => {
      fetchUserTypedScans(); // immediate tick
      intervalId = window.setInterval(() => {
        if (shouldPoll()) fetchUserTypedScans();
      }, POLL_MS);
    };

    const stop = () => {
      if (intervalId) window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const handleVisibility = () => {
      stop();
      if (shouldPoll()) start();
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [user?.uid, showLaunchModal]); // rewire when modal or user changes

  if (loading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        Loading...
      </div>
    );
  }

  const renderState = (scan) => {
    if (scan?.rgpd?.conform === false) return "Non conforme";
    return "Conforme";
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    let date;

    if (timestamp?.toDate && typeof timestamp.toDate === "function") {
      date = timestamp.toDate();
    } else if (typeof timestamp === "number") {
      date = new Date(timestamp);
    } else if (timestamp?.seconds) {
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
      {showLaunchModal && (
        <LaunchScanModal
          type="rgpd"
          userId={user.uid}
          setIsOpen={setShowLaunchModal}
          setRefresh={setRefresh}
        />
      )}
      <div className="flex justify-between bg-white p-6 border-b border-light-gray">
        <h1 className="text-2xl font-bold">RGPD</h1>
        <button
          className="bg-primary-blue rounded-md px-6 py-2 text-white"
          onClick={() => setShowLaunchModal(true)}
        >
          Lancer un scan RGPD
        </button>
      </div>
      <div className="bg-white p-6 border-b border-light-gray mt-4">
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

          {isLoading ? (
            <HistoriqueDashboardSkeleton />
          ) : (
            <tbody className="divide-y divide-gray-200">
              {scans.map((scan, idx) => (
                <tr className="hover:bg-gray-50" key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                    {scan?.rgpd?.url || "—"}
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
                        : "Échec"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {scan.status === "completed" ? renderState(scan) : "__"}
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
    </>
  );
};

export default Page;
