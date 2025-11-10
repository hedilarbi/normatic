"use client";

import { IoCloseSharp } from "react-icons/io5";

const NoUrlModal = ({ message, setIsOpen }) => {
  return (
    <div className="bg-black/30 absolute top-0 left-0 w-full h-full flex justify-center items-center ">
      <div className="bg-white rounded-md p-6 w-1/2 ">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-red-500">Erreur</h2>
          <button className="" onClick={() => setIsOpen(false)}>
            <IoCloseSharp size={36} />
          </button>
        </div>

        <div className="mt-8">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NoUrlModal;
