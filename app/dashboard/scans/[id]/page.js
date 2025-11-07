"use client";
import React from "react";
import { getScanByUUID } from "@/services/scans.services";

const Page = ({ params }) => {
  // Unwrap params Promise (Next 15+)
  const { id } = React.use(params);

  const [isLoading, setIsLoading] = React.useState(true);
  const [scan, setScan] = React.useState(null);

  const fetchScan = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getScanByUUID(id);
      setScan(response);
    } catch (error) {
      console.error("Error fetching scan:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    if (!id) return;
    fetchScan();
  }, [id, fetchScan]);

  const renderState = (scan) => {
    if (!scan) return "";
    if (scan.type === "free") {
      if (
        scan?.cgv?.conform === false ||
        scan?.rgpd?.conform === false ||
        scan?.cookies?.conform === false ||
        scan?.legals?.conform === false
      ) {
        return "Non conforme";
      }
      return "Conforme";
    } else {
      return scan?.[scan.type]?.conform === false ? "Non conforme" : "Conforme";
    }
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

  // Helpers for "free" scans
  const getFreeSections = (s) => [
    { key: "rgpd", label: "RGPD", errors: s?.rgpd?.errors ?? [] },
    {
      key: "legals",
      label: "Mentions légales",
      errors: s?.legals?.errors ?? [],
    },
    { key: "cookies", label: "Cookies", errors: s?.cookies?.errors ?? [] },
    { key: "cgv", label: "CGV", errors: s?.cgv?.errors ?? [] },
  ];

  const isFree = scan?.type === "free";
  const freeSections = isFree ? getFreeSections(scan) : [];
  const hasAnyFreeErrors = isFree
    ? freeSections.some(
        (sec) => Array.isArray(sec.errors) && sec.errors.length > 0
      )
    : false;

  // Non-free (single section) fallback
  const currentErrors =
    !isFree && scan?.type ? scan?.[scan.type]?.errors ?? [] : [];

  return (
    <>
      <div className="bg-white p-6 border-b border-light-gray">
        <h1 className="text-2xl font-bold">Scan # {id}</h1>
        <div className="mt-2 text-gray-600">
          <p>Type de scan: {scan?.type ?? ""}</p>
          <p>Date de création: {scan ? formatDate(scan.createdAt) : ""}</p>
          <p>Statut: {renderState(scan)}</p>
        </div>
      </div>

      <div className="p-6 bg-white">
        {isLoading ? (
          <div>Loading scan details...</div>
        ) : scan ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Détails du scan {scan.type}
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg space-y-6">
              {isFree ? (
                hasAnyFreeErrors ? (
                  freeSections.map((sec) =>
                    sec.errors?.length ? (
                      <div key={sec.key}>
                        <h3 className="text-lg font-medium mb-2 text-red-600">
                          {sec.label} — {sec.errors.length} erreur(s)
                        </h3>
                        <ul className="list-disc list-inside text-red-600">
                          {sec.errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null
                  )
                ) : (
                  <p className="text-green-600">Aucune erreur détectée.</p>
                )
              ) : currentErrors.length > 0 ? (
                <div>
                  <h3 className="text-lg font-medium mb-2 text-red-600">
                    Erreurs rencontrées ({currentErrors.length}) :
                  </h3>
                  <ul className="list-disc list-inside text-red-600">
                    {currentErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-green-600">Aucune erreur détectée.</p>
              )}
            </div>
          </div>
        ) : (
          <div>Aucun scan trouvé avec cet ID.</div>
        )}
      </div>
    </>
  );
};

export default Page;
