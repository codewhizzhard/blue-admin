import React from "react";
import Sidebar from "./navbar/sidebar/Sidebar";
import Content from "./Content";
import TopNav from "./navbar/TopNav";

const Students = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 left-0 right-0 z-10 bg-white shadow-md">
        <TopNav />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation */}
        <aside className="hidden md:flex w-[20%] bg-white shadow-lg h-full">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-1 overflow-y-auto bg-gray-200">
          <Content />
        </main>
      </div>
    </div>
  );
};

export default Students;
