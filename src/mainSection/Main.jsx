import React from "react";
import Content from "./Content";
import TopNav from "../components/Navbars/TopNav";
// import TopNav from "./navbar/TopNav";

const Main = () => {
  return (
    <div className="w-full">
      <div className="h-[10%]">
        <TopNav />
      </div>

      <div className="h-[90%]">
        <Content />
      </div>
    </div>
  );
};

export default Main;
