import React from "react";
import { upload } from "../assets";

const Exam = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="bg-lamaYellowLight hover:bg-brand-100 transition-all rounded-full button h-[52px] gap-2 px-10 shadow-drop-1 text-center flex flex-col items-center justify-center p-10">
        <img src={upload} alt="upload" width={24} height={24} />{" "}
        <p>Upload exam routine</p>
      </button>

      <p className="mt-4 text-lg">
        No exam routine uploaded, upload one to see it here
      </p>
    </div>
  );
};

export default Exam;
