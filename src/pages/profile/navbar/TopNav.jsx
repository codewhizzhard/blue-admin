import Logo from "/logo.svg";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiHeadphones } from "react-icons/pi";
import { MdWorkspacePremium } from "react-icons/md";
import { SiLimesurvey } from "react-icons/si";
import { FaRegEnvelope, FaSearch } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImage from "../../../assets/user.jfif";
import { useAuthContext } from "../../../hooks/useAuthContext";

const TopNav = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex items-center justify-center py-2 px-5 rounded-full bg-white w-full">
      <div className="flex w-[15%]">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-2 w-[35%]">
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
      <div className="flex justify-center items-center gap-3 w-[50%]">
        <div className="search flex justify-center items-center bg-gray-200 rounded-full w-full px-2 py-1 gap-2">
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
          <IoIosNotificationsOutline className="text-2xl" />
          <span className="bg-red-500 w-2 h-2 rounded-full -ml-3 mt-1"></span>
        </div>
        <div className="">
          <FaRegEnvelope className="text-2xl" />
        </div>
        <div className="rounded-full bg-white p-1 w-10 h-10">
          <img
            src={user?.user.moreAboutUser.profilePicture || profileImage}
            alt="user_image"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
