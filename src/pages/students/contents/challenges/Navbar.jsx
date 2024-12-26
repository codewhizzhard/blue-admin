import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  { path: ".", label: "All Challenges" },
  { path: "my-listing", label: "My Listings" },
  { path: "my-challenges", label: "My Challenges" },
];

const Navbar = () => {
  return (
    <div className="flex gap-1 w-full">
      <div className="bg-white rounded-md shadow-md w-full">
        {/* Tabs */}
        <div className="flex bg-white rounded-t-md border-b border-gray-200 gap-3 px-4 py-2">
          {tabs.map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              end={path === "."} // Ensure "overview" matches only exact parent route
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
      </div>
    </div>
  );
};

export default Navbar;
