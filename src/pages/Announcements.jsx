import React from "react";
import { FaPlus } from "react-icons/fa6";

import { Announcement } from "../components";

const Announcements = () => {
  return (
    <div>
      <div className="flex items-end justify-end gap-4 self-end my-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-lamaYellow">
          <FaPlus size={24} />
        </button>
      </div>
      <Announcement />
    </div>
  );
};

export default Announcements;
