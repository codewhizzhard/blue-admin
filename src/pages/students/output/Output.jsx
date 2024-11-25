import React from "react";
import TopNav from "../navbar/TopNav";
import { Outlet } from "react-router-dom";

const Output = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default Output;
