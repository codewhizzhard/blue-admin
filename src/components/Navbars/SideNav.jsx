import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GrHome } from "react-icons/gr";
import {
  IoCart,
  IoWalletOutline,
  IoSettingsOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import Vector from "../../assets/Vector.png";
import { useLogout } from "../../hooks/useLogout";

const SideNav = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const { logout } = useLogout();

  // Reusable Nav Item Component
  const NavItem = ({ to, icon, label, onClick }) => (
    <li>
      {onClick ? (
        <button
          onClick={onClick}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primaryBlue transition-colors w-full text-left"
        >
          <span className="text-2xl">{icon}</span>
          {label}
        </button>
      ) : (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-2 text-sm font-medium ${
              isActive ? "text-primaryBlue" : "text-gray-600"
            } hover:text-primaryBlue transition-colors`
          }
        >
          <span className="text-2xl">{icon}</span>
          {label}
        </NavLink>
      )}
    </li>
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-[20%] min-w-[250px] flex flex-col gap-1 h-screen bg-white shadow-lg">
      <div className="py-12 px-5 flex flex-col gap-5">
        {/* Navigation Links */}
        <ul className="flex flex-col gap-5 text-3xl">
          <NavItem to="/" icon={<GrHome />} label="Home" />
          <NavItem
            to="/students/dashboard/newsfeed"
            icon={<PiStudent />}
            label="Student"
          />
          <NavItem to="/market" icon={<IoCart />} label="Market" />
          <NavItem to="/network" icon={<PiStudent />} label="Network" />
          <NavItem to="/wort" icon={<IoWalletOutline />} label="Wallet" />
          <NavItem to="/chat" icon={<TiMessages />} label="Messages" />
          <NavItem to="/profile" icon={<IoSettingsOutline />} label="Setting" />
          <NavItem onClick={handleLogout} icon={<CiLogout />} label="Logout" />
        </ul>

        {/* Profile Update Section */}
        <div
          className={`absolute bottom-10 left-5 w-[211px] bg-[#344054] rounded-lg p-5 text-white transition-all ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="relative">
              <img src={Vector} alt="Profile Update" />
              <IoCloseOutline
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => setShow(false)}
              />
            </div>
            <p className="text-xs font-medium text-center leading-5">
              Update your profile with more details to attract connections and
              get more views to build up your network.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs">
                <span>60%</span>
                <span>100%</span>
              </div>
              <div className="w-full h-2 bg-white rounded-full">
                <div className="h-full w-[60%] bg-primaryBlue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
