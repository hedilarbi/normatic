"use client";
import React from "react";

const Page = ({ params }) => {
  const { id } = params;

  const [isLoading, setIsLoading] = React.useState(true);
  const [scan, setScan] = React.useState(null);

  const fetchScan = async () => {
    try {
      setIsLoading(true);

      const reponse = await getScanByUUID(id);
      setScan(reponse);
    } catch (error) {
      console.error("Error fetching scan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchScan();
  }, []);

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
    <>
      {" "}
      <div className="flex justify-between bg-white p-6 border-b border-light-gray">
        <h1 className="text-2xl font-bold">Scan # {id}</h1>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p className="text-gray-600">URL scannée: {scan?.rgpd?.url}</p>
            <p className="text-gray-600">
              Date du scan: {formatDate(scan?.createdAt)}
            </p>
            <p className="text-gray-600">
              État: {scan ? renderState(scan) : "N/A"}
            </p>
          </div>
        )}
      </div>
      <div className="p-6">
        {isLoading ? (
          <div>Loading scan details...</div>
        ) : scan ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Détails du scan {scan.type}
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(scan.rgpd, null, 2)}
              </pre>
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
