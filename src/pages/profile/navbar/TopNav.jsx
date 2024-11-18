import React, { useEffect, useState } from "react";
import Logo from "/white_bg_logo.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiHeadphones } from "react-icons/pi";
import { MdWorkspacePremium } from "react-icons/md";
import { SiLimesurvey } from "react-icons/si";
import {
  FaRegEnvelope,
  FaSearch,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import User from "../../../assets/user.jfif";

import { Link } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

import { useAuthContext } from "../../../hooks/useAuthContext";

const TopNav = () => {
  const { user } = useAuthContext();
  const [dropdown, setDropdown] = useState(false);

  // Generate initials and full name
  const initials = user?.user
    ? `${user.user.firstName[0]}${user.user.surName[0]}`
    : "SR";
  const fullName = user?.user
    ? `${user.user.firstName} ${user.user.surName}`
    : "Stylish Racon";

  // Close dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest("#profile-dropdown") && dropdown) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdown]);

  // Dropdown Item Component
  const DropdownItem = ({ to, icon, label }) => (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-sm hover:text-primaryGreen"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );

  return (
    <div className="flex items-center justify-between p-2 rounded-md bg-white w-full">
      <div className="flex">
        <img src={Logo} alt="logo" className="w-[80px]" />
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center justify-center">
          <AiOutlineExclamationCircle />
          <span>About</span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <PiHeadphones />
          <span>Customer Support</span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <MdWorkspacePremium />
          <span>Premium</span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <SiLimesurvey />
          <span>Survey</span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-1 w-[40%]">
        <div className="search flex justify-center items-center bg-gray-200 rounded-full w-[70%] px-2 py-1 gap-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-0 p-1 bg-transparent w-full"
          />
        </div>
        <div className="">
          <HiOutlineStatusOnline
            className={
              user?.user.isOnline == true
                ? "text-green-500 text-2xl"
                : "text-red-500 text-2xl"
            }
          />
        </div>
        <div className="flex">
          <IoIosNotificationsOutline className="text-xl" />
          <span className="bg-red-500 w-2 h-2 rounded-full -ml-3 mt-1"></span>
        </div>
        <div className="">
          <FaRegEnvelope className="text-2xl" />
        </div>
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={() => setDropdown(!dropdown)}
            aria-expanded={dropdown}
            aria-controls="profile-dropdown"
          >
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-500">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>
            <span className="text-gray-800 font-medium text-sm">
              {fullName}
            </span>
            {dropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Dropdown Menu */}
          {dropdown && (
            <div
              id="profile-dropdown"
              className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50"
              role="menu"
            >
              <ul className="flex flex-col gap-2 p-4 text-gray-700">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
