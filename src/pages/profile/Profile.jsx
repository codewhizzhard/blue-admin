import React from "react";
import TopNav from "../../components/Navbars/TopNav";
import SideNav from "../../components/Navbars/SideNav";
import ProfileSection from "./ProfileSection";

const Profile = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopNav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 mt-[55px] h-screen">
        {/* Sidebar */}
        <aside className="w-1/5 hidden lg:block h-full">
          <SideNav />
        </aside>
        {/* Profile Section */}
        <main className="flex-1 p-1">
          <ProfileSection />
        </main>
      </div>
    </div>
  );
};

export default Profile;
