import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "./components";

const App = () => {
  const togglesidebar = true;

  return (
    <div className="flex relative">
      <Sidebar />

      {/* Main Content */}
      <div
        className={
          togglesidebar
            ? "flex-1 flex flex-col min-h-screen w-full md:ml-72"
            : "min-h-screen w-full flex-2"
        }
      >
        <div className="ixed md:static w-full navbar">
          <Navbar />
        </div>

        {/* Other content */}
        <main className="p-6">
          {/* Dashboard or page content goes here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
