import React from "react";
import Sidebar from "./navbar/sidebar/Sidebar";
// import Home from "./home/Main";
import Content from "./Content";
import Main from "./Main";

const Students = () => {
  return (
    <div className="flex w-full gap-1 bg-gray-200 h-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Students;
