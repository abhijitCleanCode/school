import React from "react";
import { FaMagnifyingGlass, FaCommentDots, FaBell } from "react-icons/fa6";

const Navbar = () => {
  // const user = getUser();

  return (
    <nav className="flex items-center justify-between p-4 w-full">
      {/* icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <span className="flex items-center justify-center cursor-pointer">
          <FaBell size={24} color="#8B5DFF" />
        </span>
        <div className="flex flex-col gap-2">
          <span className="text-lg text-slate-900 leading-3 font-medium">
            Sudarshan
          </span>
          <span className="text-base text-black-300 text-right">{"Admin"}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
