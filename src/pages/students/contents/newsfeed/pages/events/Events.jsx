import React from "react";
import Side from "./Side";
import { Outlet } from "react-router-dom";

const Events = () => {
  return (
    <div className="flex gap-2 mt-2">
      <div className="bg-white rounded-md shadow-md w-[70%] p-2 flex flex-col gap-1">
        <Outlet />
      </div>

      <div className="bg-white w-[30%]">
        <Side />
      </div>
    </div>
  );
};

export default Events;
