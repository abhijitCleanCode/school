import React from "react";
import { Link } from "react-router-dom";

const UserCards = ({ title, subtitle, to = "" }) => {
  return (
    <Link
      to={to}
      className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]"
    >
      {/* <div className="flex justify-between items-center">
        <span className="cursor-pointer">
          <FaEllipsis size={20} color="#000" />
        </span>
      </div> */}
      <h1 className="capitalize text-2xl font-semibold my-4">{title}</h1>
      <h2 className="capitalize text-sm font-medium text-black-200">
        {subtitle}
      </h2>
    </Link>
  );
};

export default UserCards;
