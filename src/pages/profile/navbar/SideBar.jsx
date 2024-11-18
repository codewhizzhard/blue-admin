import User from "../../../assets/user.jfif";

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
import { Link, useNavigate } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";
import { useEffect } from "react";

const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const { profilePicture, userName } = user.user.moreAboutUser || {};

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  const menuItems = [
    { label: "Home", icon: <GrHome className="text-lg" />, link: "/" },
    {
      label: "Student",
      icon: <PiStudent className="text-lg" />,
      link: "/students/dashboard/newsfeed",
    },
    { label: "Market", icon: <IoCart className="text-lg" />, link: "/market" },
    {
      label: "Network",
      icon: <BsPeople className="text-lg" />,
      link: "/network",
    },
    {
      label: "Wallet",
      icon: <IoWalletOutline className="text-lg" />,
      link: "/wallet",
    },
    {
      label: "Messages",
      icon: <TiMessages className="text-lg" />,
      link: "/messages",
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline className="text-lg" />,
      link: "/settings",
    },
  ];

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className="bg-white flex flex-col justify-center items-center py-5 rounded-2xl">
        <div className="rounded-full bg-white p-1 w-20 h-20">
          <img
            src={
              profilePicture ? `data:image/jpeg;base64,${profilePicture}` : User
            }
            alt={`${userName || "User"} profile`}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <p>
          <span>{userName || "User"}</span>
        </p>
      </div>
      <div className="bg-white rounded-2xl">
        <div className="flex flex-col gap-4 pl-5 pr-2 py-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
              aria-label={`Go to ${item.label}`}
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleClick}
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100 text-left"
            aria-label="Logout"
          >
            <CiLogout className="text-xl" />
            <span className="text-xl">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
