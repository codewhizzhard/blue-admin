import { Link } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Logo from "../../assets/white_bg_logo.svg";

const TopNav = () => {
  const { user } = useAuthContext();
  const [dropdown, setDropDown] = useState(false);

  const initials = user?.user
    ? `${user.user.firstName[0]}${user.user.surName[0]}`
    : "SR";

  const fullName = user?.user
    ? `${user.user.firstName} ${user.user.surName}`
    : "Stylish Racon";

  return (
    <nav className="z-50 fixed bg-white w-full h-[67px] py-2 px-5 shadow-md">
      <header className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img src={Logo} alt="Logo" className="w-[82px]" />
        </Link>

        {/* Search Bar */}
        <div className="flex-grow ml-[8rem] mr-[3rem] flex items-center bg-bg h-[40px] rounded-[7px] px-4">
          <FiSearch className="text-mediumGray" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-grow text-[14px] focus:outline-none ml-2"
          />
        </div>

        {/* Icons and Profile */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-primaryGreen" aria-label="Status">
                <HiOutlineStatusOnline />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-mediumGray"
                aria-label="Messages"
              >
                <FaRegEnvelope />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-mediumGray"
                aria-label="Notifications"
              >
                <IoMdNotificationsOutline />
              </Link>
            </li>
          </ul>

          {/* Profile & Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2"
              onClick={() => setDropDown(!dropdown)}
              aria-expanded={dropdown}
              aria-controls="profile-dropdown"
            >
              <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-primaryGreen">
                <span className="text-white font-bold text-[14px]">{initials}</span>
              </div>
              <span className="text-textColor font-medium text-[14px]">
                {fullName}
              </span>
              {dropdown ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Dropdown Menu */}
            <div
              id="profile-dropdown"
              className={`absolute right-0 mt-2 bg-white shadow-xl rounded-[8px] transition-all ${
                dropdown ? "block" : "hidden"
              }`}
              role="menu"
            >
              <ul className="flex flex-col gap-3 p-4">
                <li>
                  <Link to="/" className="flex items-center gap-2">
                    <PiUserCircleLight />
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-2">
                    <GrCircleInformation />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-2">
                    <AiOutlineCustomerService />
                    <span>Customer Support</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-2">
                    <MdWorkspacePremium />
                    <span>Premium</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex items-center gap-2">
                    <RiDeleteBin6Line />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default TopNav;
