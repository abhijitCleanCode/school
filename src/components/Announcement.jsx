import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-black">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Picture Day Reminder</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              27/01/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis excepturi harum obcaecati tempore iusto fugiat provident
            distinctio odit non nesciunt reiciendis placeat iste blanditiis
            quae, delectus a corrupti doloribus.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Book Fair Opening</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              27/01/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            corporis excepturi harum obcaecati tempore iusto fugiat provident
            distinctio odit non nesciunt reiciendis placeat iste blanditiis
            quae, delectus a corrupti doloribus.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Sports Day Postponed</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              27/01/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            molestias reiciendis recusandae blanditiis sit laudantium eius?
            Illum, iste architecto quod nemo adipisci quasi vitae expedita
            cumque illo amet pariatur. Soluta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
