import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { path: ".", label: "All" }, // Default route uses "."
  { path: "school-news", label: "School News" },
  { path: "trending", label: "Trending" },
  { path: "groups", label: "Groups" },
  { path: "events", label: "Events" },
];

const NewsFeed = () => {
  return (
    <div className="flex gap-1 w-full">
      <div className="bg-white rounded-md shadow-md w-full">
        {/* Tabs */}
        <div className="flex bg-white rounded-t-md border-b border-gray-200 gap-3 px-4 py-2">
          {tabs.map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              end={path === "."} // Ensure "All" matches only exact parent route
              className={({ isActive }) =>
                `px-2 py-2 cursor-pointer ${
                  isActive
                    ? "font-bold border-b-2 border-blue-500"
                    : "text-black hover:text-blue-300"
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default NewsFeed;
