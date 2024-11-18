import React from "react";
import TopNav from "./navbar/TopNav";
import SideBar from "./navbar/SideBar";
import ProfileSection from "./ProfileSection";

const Profile = () => {
  return (
    <div className="bg-gray-200 py-3 px-5">
      <TopNav />
      <div className="flex gap-4 mt-1">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[80%]">
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;
