import React from "react";
import EditProfile from "./editProfile/EditProfile";
import Preferences from "./editProfile/Preferences";
import Security from "./editProfile/Security";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ProfileSection = () => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md">
      <Tabs>
        {/* Tab List with selectedClassName for active styling */}
        <TabList className="flex border-b-2 border-gray-200 mb-5">
          <Tab
            className="px-8 py-2 cursor-pointer text-blue-500 outline-none"
            selectedClassName="font-bold border-b-4 border-blue-500"
          >
            Edit Profile
          </Tab>
          <Tab
            className="px-8 py-2 cursor-pointer text-blue-500 outline-none"
            selectedClassName="font-bold border-b-4 border-blue-500"
          >
            Preference
          </Tab>
          <Tab
            className="px-8 py-2 cursor-pointer text-blue-500 outline-none"
            selectedClassName="font-bold border-b-4 border-blue-500"
          >
            Security
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <EditProfile />
        </TabPanel>
        <TabPanel>
          <Preferences />
        </TabPanel>
        <TabPanel>
          <Security />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProfileSection;
