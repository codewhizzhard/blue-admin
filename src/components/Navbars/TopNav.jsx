import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/white_bg_logo.svg";
import {
  FaSearch,
  FaChevronUp,
  FaChevronDown,
  FaRegEnvelope,
} from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import { PiUserCircleLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

// const DropdownItem = ({ to, icon, label, onClick }) => (
//   <li>
//     <Link
//       to={to}
//       className="flex items-center gap-2 text-sm hover:text-primaryGreen focus:outline-none focus:text-primaryGreen"
//       role="menuitem"
//       tabIndex={0}
//     >
//       {icon}
//       <span>{label}</span>
//     </Link>
//   </li>
// );

const DropdownItem = ({ to, icon, label, onClick }) => (
  <li>
    {to ? (
      <Link
        to={to}
        className="flex items-center gap-2 text-sm hover:text-primaryGreen focus:outline-none focus:text-primaryGreen"
        role="menuitem"
        tabIndex={0}
      >
        {icon}
        <span>{label}</span>
      </Link>
    ) : (
      <button
        onClick={onClick}
        className="flex items-center gap-2 text-sm hover:text-primaryGreen focus:outline-none focus:text-primaryGreen w-full text-left"
        role="menuitem"
        tabIndex={0}
      >
        {icon}
        <span>{label}</span>
      </button>
    )}
  </li>
);

// const TopNav = () => {
//   const { user } = useAuthContext();
//   const [dropdown, setDropdown] = useState(false);
//   const dropdownRef = useRef();
//   const navigate = useNavigate();
//   const { logout } = useLogout();

//   const initials = `${user?.user?.firstName?.[0] ?? "S"}${
//     user?.user?.surName?.[0] ?? "R"
//   }`;
//   const fullName = `${user?.user?.firstName ?? "Stylish"} ${
//     user?.user?.surName ?? "Racon"
//   }`;

//   const isOnline = user?.user?.isOnline ?? false;

//   const toggleDropdown = () => setDropdown((prev) => !prev);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdown(false);
//       }
//     };

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") setDropdown(false);
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <header className="flex items-center p-2 bg-white rounded-md w-full">
//       {/* Logo */}
//       <div className="w-[20%]">
//         <img src={Logo} alt="Logo" className="w-[80px]" />
//       </div>

//       {/* Right-side Actions */}
//       <div className="flex items-center justify-between gap-4 w-[80%]">
//         {/* Search */}
//         <div className="flex items-center bg-gray-200 rounded-md px-3 py-1 w-[70%]">
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none p-1 w-full text-sm"
//             aria-label="Search"
//           />
//         </div>
//         <div className="flex items-center gap-4">
//           {/* Online Status */}
//           <HiOutlineStatusOnline
//             className={`text-2xl ${
//               isOnline ? "text-green-500" : "text-red-500"
//             }`}
//             title={isOnline ? "Online" : "Offline"}
//           />

//           {/* Notifications */}
//           <div className="relative">
//             <IoIosNotificationsOutline className="text-xl" />
//             <span className="absolute bg-red-500 w-2 h-2 rounded-full top-0 right-0"></span>
//           </div>
//           {/* Messages */}
//           <FaRegEnvelope className="text-2xl" />

//           {/* Profile Dropdown */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={toggleDropdown}
//               className="flex items-center gap-2"
//               aria-expanded={dropdown}
//               aria-haspopup="true"
//               aria-controls="profile-dropdown"
//             >
//               <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-500">
//                 <span className="text-white font-bold text-sm">{initials}</span>
//               </div>
//               <span className="text-sm font-medium text-gray-800">
//                 {fullName}
//               </span>
//               {dropdown ? <FaChevronUp /> : <FaChevronDown />}
//             </button>

//             {/* Dropdown Menu */}
//             {dropdown && (
//               <ul
//                 id="profile-dropdown"
//                 className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50 flex flex-col gap-2 p-4 text-gray-700"
//                 role="menu"
//               >
//                 <DropdownItem
//                   to="/profile"
//                   icon={<PiUserCircleLight />}
//                   label="My Profile"
//                 />
//                 <DropdownItem
//                   to="/about"
//                   icon={<GrCircleInformation />}
//                   label="About"
//                 />
//                 <DropdownItem
//                   to="/support"
//                   icon={<AiOutlineCustomerService />}
//                   label="Customer Support"
//                 />
//                 <DropdownItem
//                   to="/premium"
//                   icon={<MdWorkspacePremium />}
//                   label="Premium"
//                 />
//                 <DropdownItem
//                   onClick={handleLogout}
//                   icon={<CiLogout />}
//                   label="Logout"
//                 />
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopNav;

const TopNav = () => {
  const { user } = useAuthContext();
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const { logout } = useLogout();

  const initials = `${user?.user?.firstName?.[0] ?? "S"}${
    user?.user?.surName?.[0] ?? "R"
  }`;
  const fullName = `${user?.user?.firstName ?? "Stylish"} ${
    user?.user?.surName ?? "Racon"
  }`;

  const isOnline = user?.user?.isOnline ?? false;

  const toggleDropdown = () => setDropdown((prev) => !prev);

  // Close dropdown on outside click or Esc key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDropdown(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex items-center p-2 bg-white rounded-md w-full">
      {/* Logo */}
      <div className="w-[20%]">
        <img src={Logo} alt="Logo" className="w-[80px]" />
      </div>

      {/* Right-side Actions */}
      <div className="flex items-center justify-between gap-4 w-[80%]">
        {/* Search */}
        <div className="flex items-center bg-gray-200 rounded-md px-3 py-1 w-[70%]">
          <FaSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none p-1 w-full text-sm"
            aria-label="Search"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Online Status */}
          <HiOutlineStatusOnline
            className={`text-2xl ${
              isOnline ? "text-green-500" : "text-red-500"
            }`}
            title={isOnline ? "Online" : "Offline"}
          />

          {/* Notifications */}
          <div className="relative">
            <IoIosNotificationsOutline className="text-xl" />
            <span className="absolute bg-red-500 w-2 h-2 rounded-full top-0 right-0"></span>
          </div>
          {/* Messages */}
          <FaRegEnvelope className="text-2xl" />

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2"
              aria-expanded={dropdown}
              aria-haspopup="true"
              aria-controls="profile-dropdown"
            >
              <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-green-500">
                <span className="text-white font-bold text-sm">{initials}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">
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
                <DropdownItem
                  onClick={handleClick}
                  icon={<CiLogout />}
                  label="Logout"
                />
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
