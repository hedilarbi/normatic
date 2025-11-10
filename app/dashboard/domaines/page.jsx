"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { LuSquarePen } from "react-icons/lu";
import EditUrlModal from "@/components/EditUrlModal";
const Page = () => {
  const { user, loading, setUser } = useAuth();

  const [userUrls, setUserUrls] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editKey, setEditKey] = useState(""); // To force remounting the modal

  useEffect(() => {
    if (user && user.urls) {
      setUserUrls(user.urls);
    }
  }, [user]);
  if (loading) {
    return (
      <>
        <div className="flex justify-between bg-white p-6 border-b border-light-gray">
          <h1 className="text-2xl font-bold">Domaines & URLs</h1>
        </div>

        <div className="w-full animate-pulse px-6 bg-white rounded-xl border border-light-gray">
          <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-md mb-4"></div>
        </div>
      </>
    );
  }

  return (
    <>
      {openEditModal && (
        <EditUrlModal
          urlKey={editKey}
          user={user}
          setIsOpen={setOpenEditModal}
          index={editIndex}
          setUser={setUser}
        />
      )}
      <div className="flex justify-between bg-white p-6 border-b border-light-gray">
        <h1 className="text-2xl font-bold">Domaines & URLs</h1>
      </div>
      {userUrls.length === 0 ? (
        <div className="bg-white p-6 mt-4 rounded-xl border border-light-gray">
          <p className="text-gray-600">
            Aucun domaine ou URL ajouté pour le moment.
          </p>
        </div>
      ) : (
        userUrls.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 mt-4 rounded-xl border border-light-gray mx-4"
          >
            <h2 className="text-xl font-semibold mb-2">
              Domaine: {item.domain || "N/A"}
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <label className="w-36 text-sm text-gray-700">RGPD</label>
                <input
                  type="text"
                  readOnly
                  value={item.rgpd || ""}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                  disabled
                />
                <button
                  type="button"
                  aria-label="Edit RGPD"
                  className="ml-2 p-2 rounded hover:bg-gray-100 text-blue-500"
                  onClick={() => {
                    setEditIndex(index);
                    setEditKey("rgpd");
                    setOpenEditModal(true);
                  }}
                >
                  <LuSquarePen />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <label className="w-36 text-sm text-gray-700">CGV</label>
                <input
                  type="text"
                  readOnly
                  value={item.cgv || ""}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                  disabled
                />
                <button
                  type="button"
                  aria-label="Edit CGV"
                  className="ml-2 p-2 rounded hover:bg-gray-100  text-blue-500"
                  onClick={() => {
                    setEditIndex(index);
                    setEditKey("cgv");
                    setOpenEditModal(true);
                  }}
                >
                  <LuSquarePen />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <label className="w-36 text-sm text-gray-700">
                  Mentions Légales
                </label>
                <input
                  type="text"
                  readOnly
                  value={item.legals || ""}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm"
                  disabled
                />
                <button
                  type="button"
                  aria-label="Edit Mentions Légales"
                  className="ml-2 p-2 rounded hover:bg-gray-100  text-blue-500"
                  onClick={() => {
                    setEditIndex(index);
                    setEditKey("legals");
                    setOpenEditModal(true);
                  }}
                >
                  <LuSquarePen />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Page;
