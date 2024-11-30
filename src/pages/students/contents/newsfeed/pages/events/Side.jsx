import React from "react";
import trendingImage from "../../../../../../assets/img14.jpg";

import { FaSearch, FaHome, FaUsers, FaCompass } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CreateEvent from "./CreateEvent";
// import CreateEvent from "../Events/CreaateEvent";

const tabs = [
  { path: ".", label: "Home", icon: <FaHome /> }, // Default route uses "."
  { path: "your-events", label: "Your Event", icon: <FaCompass /> },
];

const EventsDetails = [
  { EventName: "Event1", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
  { EventName: "Event2", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
  { EventName: "Event3", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
  { EventName: "Event4", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
  { EventName: "Event5", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
  { EventName: "Event6", active: "Oct 22 at 5PM - Oct 28 at 10PM" },
];

const EventItem = ({ EventName, active }) => (
  <li className="flex gap-3 items-center cursor-pointer">
    <img
      src={trendingImage}
      alt={`${EventName} Event image`}
      className="w-12 h-12 rounded-full"
    />
    <div>
      <h3 className="font-bold text-sm">{EventName}</h3>
      <p className="text-xs text-gray-500">{active}</p>
    </div>
  </li>
);

const Side = () => {
  return (
    <aside className="w-full space-y-4">
      {/* Events Section */}
      <div className="shadow-md rounded-md p-4">
        <h2 className="font-bold mb-4 text-2xl">Events</h2>
        <div className="flex items-center bg-gray-200 p-2 rounded-md">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Events"
            aria-label="Search Events"
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
          <CreateEvent />
        </div>
      </div>

      {/* Events Recommendation Section */}
      <div className="shadow-md rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Recommended Events</h2>
          <button
            className="text-sm px-3 py-2 text-blue-500 rounded-full"
            aria-label="See All Events"
          >
            See All
          </button>
        </div>
        <ul className="space-y-4">
          {EventsDetails.map(({ EventName, active }, index) => (
            <EventItem key={index} EventName={EventName} active={active} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Side;
