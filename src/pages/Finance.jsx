import React from "react";
import { maintanance } from "../assets";

const Finance = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={maintanance}
        alt=""
        className="w-1/3 h-1/3 object-contain rounded-lg"
      />
      <p className="mt-4 text-2xl">Under maintainance</p>
    </div>
  );
};

export default Finance;
