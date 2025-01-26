import React from "react";
import { schoolTimeTable } from "../assets";
import { FaPlus } from "react-icons/fa6";

function Card({
  heading = "",
  description = "Click to edit or delete",
  thumbnailSrc = { schoolTimeTable },
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg p-6 shadow-sm ${className} bg-lamaSky`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={schoolTimeTable}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-[14px] font-normal text-gray-600 block">
        {heading}
      </h3>
      <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition hover:text-[#FA5252] mt-2">
        {description}
      </p>
    </div>
  );
}

const TimeTable = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center">
        <h1>Manage Time Table</h1>
        <div className="flex items-end justify-end gap-4 self-end my-4">
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-lamaYellow">
            <FaPlus size={24} />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card heading="Class 1 A" />
        <Card heading="Class 1 B" />
        <Card heading="Class 2 A" />
        <Card heading="Class 2 B" />
        <Card heading="Class 3 A" />
      </div>
    </>
  );
};

export default TimeTable;
