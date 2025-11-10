"use client";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { updateUserUrls } from "@/services/users.services";
const EditUrlModal = ({ urlKey, user, setIsOpen, index, setUser }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [url, setUrl] = React.useState(user.urls[index][urlKey] || "");

  const handleClose = () => {
    setUrl("");
    setError(null);

    setIsOpen(false);
  };
  const updateUrl = async () => {
    setIsLoading(true);
    setError(null);
    if (!url) {
      setError("Veuillez entrer une URL valide.");
      setIsLoading(false);
      return;
    }
    // validate URL format (allow missing scheme) and check domain matches user.urls[index].domain
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch (err) {
      console.error(err);
      try {
        parsedUrl = new URL("https://" + url);
      } catch (err2) {
        console.error(err2);
        setError("Veuillez entrer une URL valide.");
        setIsLoading(false);
        return;
      }
    }

    const expectedDomainRaw = user.urls[index]?.domain || "";
    let expectedHostname = expectedDomainRaw;

    // normalize expected domain if it's a full URL
    if (
      expectedDomainRaw &&
      (expectedDomainRaw.startsWith("http://") ||
        expectedDomainRaw.startsWith("https://") ||
        expectedDomainRaw.includes("/"))
    ) {
      try {
        expectedHostname = new URL(expectedDomainRaw).hostname;
      } catch (e) {
        console.error(e);
        // leave as-is if parsing fails
        expectedHostname = expectedDomainRaw;
      }
    }

    // if an expected domain is provided, ensure the URL's hostname matches or is a subdomain of it
    if (expectedHostname) {
      const host = parsedUrl.hostname;
      const isMatch =
        host === expectedHostname || host.endsWith("." + expectedHostname);
      if (!isMatch) {
        setError(`L'URL doit appartenir au domaine ${expectedHostname}.`);
        setIsLoading(false);
        return;
      }
    }
    try {
      const payload = { ...user.urls[index], [urlKey]: url };
      const updatedUrls = [...user.urls];
      updatedUrls[index] = payload;

      await updateUserUrls(user.uid, updatedUrls);
      setUser({ ...user, urls: updatedUrls });
      setUrl("");
      setIsOpen(false);
    } catch (e) {
      console.error(e);
      setError("Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black/30 absolute top-0 left-0 w-full h-full flex justify-center items-center ">
      <div className="bg-white rounded-md p-6 w-1/2 ">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Modifier {urlKey} URL</h2>
          <button className="" onClick={handleClose}>
            <IoCloseSharp size={36} />
          </button>
        </div>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded-md my-2">
            {error}
          </div>
        )}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            {urlKey} (URL)
          </label>
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

        <div className="flex justify-end">
          <button
            className="bg-primary-blue text-white rounded-md px-6 py-2 mt-4"
            onClick={updateUrl}
          >
            {isLoading ? "Mise à jour..." : "Mettre à jour"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUrlModal;
