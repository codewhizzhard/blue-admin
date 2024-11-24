import React from "react";
import SideNav from "../components/Navbars/SideNav";
import TopNav from "../components/Navbars/TopNav";
import Content from "./Content";

const MainSection = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-10">
        <TopNav />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-grow mt-[60px] bg-gray-200">
        {/* Side Navigation */}
        <aside className="w-[250px] bg-white shadow-lg">
          <SideNav />
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-4">
          <Content />
        </main>
      </div>
    </div>
  );
};

export default MainSection;
