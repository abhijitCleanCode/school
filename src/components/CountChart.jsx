import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { male_female } from "../assets";

const CountChart = () => {
  const data = [
    {
      name: "Total",
      count: 460,
      fill: "white",
    },
    {
      name: "Girls",
      count: 300,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: 160,
      fill: "#C3EBFA",
    },
  ];

  return (
    <div className="relative w-full h-[75%]">
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
      <img
        src={male_female}
        alt=""
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CountChart;
