import React from "react";

import CountChart from "./CountChart";
import { FaEllipsis } from "react-icons/fa6";

const CountChartContainer = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <span>
          <FaEllipsis size={20} color="#6B7280" />
        </span>
      </div>
      {/* CHART */}
      <CountChart />
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">160</h1>
          <h2 className="text-xs text-black-300">
            Boys ({Math.round((160 / 460) * 100)}%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">300</h1>
          <h2 className="text-xs text-black-300">
            Girls ({Math.round((300 / 460) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
