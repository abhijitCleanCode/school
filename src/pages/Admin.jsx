import React from "react";

import {
  Announcement,
  //   AttendanceChartContainer,
  CountChartContainer,
  EventList,
  FinanceChart,
  UserCards,
} from "../components";
import EventCalendar from "../components/EventCalendar";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards title={1} subtitle="admin" />
          <UserCards title={46} subtitle="teacher" />
          <UserCards title={460} subtitle="student" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full h-[450px]">
            <CountChartContainer />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <EventCalendar />
            {/* <AttendanceChartContainer /> */}
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventList />
        <Announcement />
      </div>
    </div>
  );
};

export default Admin;
