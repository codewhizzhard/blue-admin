import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  MdOutlineMarkUnreadChatAlt,
  MdOutlineNotifications,
} from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Logo from "/white_bg_logo.svg";
import defaultProfileImage from "../../../assets/user.jfif"; // Fallback profile image

const ChatIcon = ({ ariaLabel }) => (
  <button
    aria-label={ariaLabel}
    className="relative text-gray-600 hover:text-gray-800"
  >
    <MdOutlineMarkUnreadChatAlt size={24} />
  </button>
);

const NotificationIcon = ({ ariaLabel, hasNotifications }) => (
  <div className="relative">
    <button
      aria-label={ariaLabel}
      className="text-gray-600 hover:text-gray-800"
    >
      <MdOutlineNotifications size={24} />
    </button>
    {hasNotifications && (
      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
    )}
  </div>
);

const DropdownItem = ({ to, icon, label }) => (
  <li>
    <Link
      to={to}
      className="flex items-center gap-2 text-sm hover:text-primaryGreen focus:text-primaryGreen"
      role="menuitem"
      tabIndex={0}
    >
      {icon}
      <span>{label}</span>
    </Link>
  </li>
);

const TopNav = ({
  user = null,
  profileImage = defaultProfileImage,
  userName = "Stylish Racon",
  hasNotifications = true,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();

  const initials =
    user?.firstName && user?.surName
      ? `${user.firstName[0]}${user.surName[0]}`
      : "SR";

  const fullName =
    user?.firstName && user?.surName
      ? `${user.firstName} ${user.surName}`
      : userName;

  const toggleDropdown = () => setDropdown((prev) => !prev);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-2 px-4 bg-white shadow-md w-full">
      <div className="">
        <NavLink>
          <img src={Logo} alt="logo" className="w-[80px]" />
        </NavLink>
      </div>
      {/* Search Bar */}
      <div className="searchBar flex items-center bg-gray-200 w-full max-w-[500px] p-2 rounded-md">
        <button aria-label="Search">
          <CiSearch className="text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent ml-2 w-full outline-none text-gray-700"
          aria-label="Search input"
        />
      </div>

      {/* Icons and Profile Section */}
      <div className="flex gap-6 items-center">
        <ChatIcon ariaLabel="Chats" />
        <NotificationIcon
          ariaLabel="Notifications"
          hasNotifications={hasNotifications}
        />

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2"
            onClick={toggleDropdown}
            aria-expanded={dropdown}
            aria-haspopup="true"
            aria-controls="profile-dropdown"
          >
            <img
              src={profileImage}
              alt={`${fullName}'s profile`}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-800 font-medium text-sm">
              {fullName}
            </span>
            {dropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Dropdown Menu */}
          {dropdown && (
            <ul
              id="profile-dropdown"
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50 flex flex-col gap-2 p-4 text-gray-700"
              role="menu"
            >
              <DropdownItem
                to="/profile"
                icon={<PiUserCircleLight />}
                label="My Profile"
              />
              <DropdownItem
                to="/about"
                icon={<GrCircleInformation />}
                label="About"
              />
              <DropdownItem
                to="/support"
                icon={<AiOutlineCustomerService />}
                label="Customer Support"
              />
              <DropdownItem
                to="/premium"
                icon={<MdWorkspacePremium />}
                label="Premium"
              />
              <DropdownItem to="/logout" icon={<CiLogout />} label="Logout" />
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
