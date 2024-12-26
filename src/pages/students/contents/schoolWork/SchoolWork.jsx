import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SchoolWork = () => {
  return (
    <div>
      <h3 className="font-bold text-xl bg-white rounded-md p-4 my-1">
        Welcome User
      </h3>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SchoolWork;
