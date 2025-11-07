"use client";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const CreateNewScan = ({ userId, setIsOpen, setRefresh }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const [intensity, setIntensity] = React.useState("lite");
  const [type, setType] = React.useState("rgpd");
  const handleClose = () => {
    setUrl("");
    setError(null);

    setIsOpen(false);
  };
  const launchScan = async () => {
    setIsLoading(true);
    setError(null);
    if (!url) {
      setError("Veuillez entrer une URL valide.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/scans/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          url,
          type,
          intensity,
        }),
      });
      const data = await response.json();
      if (!data.ok) {
        setError(data.error || "Une erreur est survenue.");
      } else {
        setRefresh((prev) => prev + 1);
        handleClose();
      }
    } catch (e) {
      console.log(e);
      setError("Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black/30 fixed top-0 left-0 w-full h-full flex justify-center items-center ">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center z-20">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      )}
      <div className="bg-white rounded-md p-6 w-1/2 ">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Lancer un scan {type}</h2>
          <button className="" onClick={handleClose}>
            <IoCloseSharp size={36} />
          </button>
        </div>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-md my-2">
            {error}
          </div>
        )}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-2">
            Type de scan
          </label>
          <select
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="rgpd">RGPD</option>
            <option value="legals">Mentions légales</option>
            <option value="cgv">CGV</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-2">RGPD (URL)</label>
          <input
            type="url"
            placeholder="https://exemple.com/mentions-legales"
            className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue`}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-gray-700 mb-2">
            Intensité du scan
          </label>
          <select
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          >
            <option value="lite">Lite (rapide)</option>
            <option value="normal">Normale (complet)</option>
            <option value="advanced">Avancé (approfondi)</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary-blue text-white rounded-md px-6 py-2 mt-4"
            onClick={launchScan}
          >
            Lancer le scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewScan;
