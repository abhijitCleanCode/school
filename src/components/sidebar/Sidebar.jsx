import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Menu from "./Menu";
import { logo } from "../../assets";

const Sidebar = () => {
  return (
    <motion.aside className="fixed left-0 top-0 h-screen w-64 bg-gray-100 md:overflow-hidden overflow-auto md:hover:overflow-auto sidebar">
      {/* w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] */}
      <div className="p-4">
        <Link
          to="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <img src={logo} alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold text-black line-clamp-1">
            Sudama Sol
          </span>
        </Link>

        <Menu />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
