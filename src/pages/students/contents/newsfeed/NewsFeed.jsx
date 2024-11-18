import React from "react";
import { NavLink } from "react-router-dom";

const NewsFeed = () => {
  return (
    <div className="flex gap-1 w-full">
      <div className="bg-white rounded-md shadow-md w-[70%]">
        <div className="flex bg-white rounded-t-md border-b border-gray-200 gap-3 px-4">
          {[
            { path: "all", label: "All" },
            { path: "school-news", label: "School News" },
            { path: "trending", label: "Trending" },
            { path: "groups", label: "Groups" },
            { path: "events", label: "Events" },
          ].map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path}
              className="px-2 py-3 cursor-pointer text-gray-700 hover:text-black"
              activeClassName="font-bold border-b-2 border-black"
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md shadow-md w-[30%] p-2">Sidebar</div>
    </div>
  );
};

export default NewsFeed;
