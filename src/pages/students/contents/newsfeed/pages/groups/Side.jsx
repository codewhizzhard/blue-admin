import React from "react";
import trendingImage from "../../../../../../assets/img14.jpg";

import { FaSearch, FaHome, FaUsers, FaCompass } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CreateGroup from "./CreaateGroup";

const tabs = [
  { path: ".", label: "Your Feeds", icon: <FaHome /> }, // Default route uses "."
  { path: "your-groups", label: "Your Group", icon: <FaUsers /> },
  { path: "discover", label: "Discover", icon: <FaCompass /> },
];

const groupsDetails = [
  { groupName: "Group1", active: "Last active 50mins ago" },
  { groupName: "Group2", active: "Last active 5mins ago" },
  { groupName: "Group3", active: "Last active 1hr ago" },
  { groupName: "Group4", active: "Last active 40mins ago" },
  { groupName: "Group5", active: "Last active 2hrs ago" },
  { groupName: "Group6", active: "Last active 20mins ago" },
];

const GroupItem = ({ groupName, active }) => (
  <li className="flex gap-3 items-center cursor-pointer">
    <img
      src={trendingImage}
      alt={`${groupName} group image`}
      className="w-12 h-12 rounded-full"
    />
    <div>
      <h3 className="font-bold text-sm">{groupName}</h3>
      <p className="text-xs text-gray-500">{active}</p>
    </div>
  </li>
);

const Side = () => {
  return (
    <aside className="w-full space-y-4">
      {/* Groups Section */}
      <div className="shadow-md rounded-md p-4">
        <h2 className="font-bold mb-4 text-2xl">Groups</h2>
        <div className="flex items-center bg-gray-200 p-2 rounded-md">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Groups"
            aria-label="Search Groups"
            className="bg-transparent outline-none flex-grow pl-2"
          />
        </div>

        {/* Navbar */}
        <div className="flex flex-col mt-3 gap-3">
          {tabs.map(({ path, label, icon }, index) => (
            <NavLink
              key={index}
              to={path}
              end={path === "."} // Ensure "All" matches only exact parent route
              className={({ isActive }) =>
                `flex gap-2 items-center px-2 py-2 cursor-pointer ${
                  isActive
                    ? "font-bold rounded-md bg-gray-300"
                    : "text-black hover:text-gray-700"
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {icon} {label}
            </NavLink>
          ))}
          <CreateGroup />
        </div>
      </div>

      {/* Groups Joined Section */}
      <div className="shadow-md rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Groups You've Joined</h2>
          <button
            className="text-sm px-3 py-2 text-blue-500 rounded-full"
            aria-label="See All Groups"
          >
            See All
          </button>
        </div>
        <ul className="space-y-4">
          {groupsDetails.map(({ groupName, active }, index) => (
            <GroupItem key={index} groupName={groupName} active={active} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Side;
