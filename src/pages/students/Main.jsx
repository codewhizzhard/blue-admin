import React from "react";
import Content from "./Content";
import TopNav from "./navbar/TopNav";

const Main = () => {
  return (
    <div className="w-full">
      <div className="h-[10%]">
        <TopNav />
      </div>

      <div className="my-2 h-[90%] overflow-y-scroll">
        <Content />
      </div>
    </div>
  );
};

export default Main;
