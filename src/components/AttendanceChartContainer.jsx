import React from "react";
import { FaEllipsis } from "react-icons/fa6";

import AttendanceChart from "./AttendanceChart";

const AttendanceChartContainer = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const lastMonday = new Date(today);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const attendanceMap = {
    Mon: { present: 0, absent: 0 },
    Tue: { present: 0, absent: 0 },
    Wed: { present: 0, absent: 0 },
    Thu: { present: 0, absent: 0 },
    Fri: { present: 0, absent: 0 },
  };

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <span>
          <FaEllipsis size={20} color="#6B7280" />
        </span>
      </div>
      <AttendanceChart />
    </div>
  );
};

export default AttendanceChartContainer;
