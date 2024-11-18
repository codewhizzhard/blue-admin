import React from "react";
import { MdPayment, MdSchool, MdSettings } from "react-icons/md";
import { FaChevronLeft, FaNewspaper } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiWechatLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "/white_bg_logo.svg";

const navItems = [
  { to: "/students/dashboard/newsfeed", label: "News Feed", icon: <FaNewspaper /> },
  { to: "/students/dashboard/school-work", label: "School Work", icon: <MdSchool /> },
  { to: "/students/dashboard/xel-challenge", label: "Xel Challenge", icon: <BsPersonWorkspace /> },
  { to: "/students/dashboard/payment", label: "Payment", icon: <MdPayment /> },
  { to: "/students/dashboard/chats", label: "Chats", icon: <RiWechatLine /> },
  { to: "/students/dashboard/settings", label: "Settings", icon: <MdSettings /> },
];

const NavItem = ({ to, label, icon, isActive }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md ${
        isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
      }`
    }
    aria-label={label}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-[20%] min-w-[250px] flex flex-col gap-1 h-screen bg-white shadow-lg">
      {/* Return to Dashboard */}
      <div className="p-3 border-b">
        <NavLink
          to="/"
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
          aria-label="Return to Main Dashboard"
        >
          <FaChevronLeft /> Return to Main Dashboard
        </NavLink>
      </div>

      {/* Logo Section */}
      <div className="p-3">
        <div className="logo py-2">
          <img src={Logo} alt="Company Logo" className="h-6" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-1 p-3">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            to={item.to}
            label={item.label}
            icon={item.icon}
            isActive={location.pathname === item.to}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
