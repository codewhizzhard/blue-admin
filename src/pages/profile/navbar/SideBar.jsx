import profileImage from "../../../assets/user.jfif";

import { GrHome } from "react-icons/gr";
import { IoCart, IoWalletOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";

const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  const { user } = useAuthContext();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className="bg-white flex flex-col justify-center items-center py-5 rounded-2xl">
        <div className="rounded-full bg-white p-1 w-20 h-20">
          <img
            src={user.user.moreAboutUser?.profilePicture || profileImage}
            alt="user_image"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <p>
          <span>{user.user.moreAboutUser?.userName || "User"}</span>
        </p>
      </div>
      <div className="bg-white rounded-2xl">
        <div className="flex flex-col gap-5 pl-5 pr-2 py-4">
          <Link
            to="/"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <GrHome className="text-xl" />
            <span className="text-xl">Home</span>
          </Link>
          <Link
            to="/student"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <PiStudent className="text-xl" />
            <span className="text-xl">Student</span>
          </Link>
          <Link
            to="/market"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <IoCart className="text-xl" />
            <span className="text-xl">Market</span>
          </Link>
          <Link
            to="/network"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <BsPeople className="text-xl" />
            <span className="text-xl">Network</span>
          </Link>
          <Link
            to="/wallet"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <IoWalletOutline className="text-xl" />
            <span className="text-xl">Wallet</span>
          </Link>
          <Link
            to="/messages"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <TiMessages className="text-xl" />
            <span className="text-xl">Messages</span>
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100"
          >
            <IoSettingsOutline className="text-xl" />
            <span className="text-xl">Settings</span>
          </Link>
          <button
            onClick={handleClick}
            className="flex items-center gap-1 pb-1 border-b-2 border-blue-100 text-left"
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
