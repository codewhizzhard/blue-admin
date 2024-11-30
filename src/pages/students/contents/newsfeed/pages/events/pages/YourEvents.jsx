import React from "react";
import EventImage from "../../../../../../../assets/img4.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DiscussionSection from "./DiscussionSection";
import AboutSection from "./AboutSection";

const YourEvents = () => {
  return (
    <div className="px-2">
      <div className="w-full h-[250px]">
        <img
          src={EventImage}
          alt=""
          className="w-full h-[250px] object-fill rounded-md"
        />
      </div>
      <div className="my-5">
        <h1 className="text-xl font-bold">
          Unlock your Earning Potential: Embrace International Income Through
          Digital Skills
        </h1>
        <p className="text-sm">
          Saturday, October 4, 2024 at 05:24PM | Online Event
        </p>
      </div>
      <div className="">
        <Tabs>
          <TabList>
            <Tab>Discussion</Tab>
            <Tab>About</Tab>
          </TabList>
          <TabPanel>
            <DiscussionSection />
          </TabPanel>
          <TabPanel>
            <AboutSection />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default YourEvents;
