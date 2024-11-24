import React from "react";
import userImage from "../../../../../../assets/user.jfif";
import trendingImage from "../../../../../../assets/img14.jpg";

import { BsThreeDots } from "react-icons/bs";
import { IoIosExpand } from "react-icons/io";
import { FaEdit, FaSearch } from "react-icons/fa";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ChatItem = ({ image, name, message, time }) => (
  <div className="flex gap-2 items-center p-2">
    <img
      src={image}
      alt={`${name}'s profile`}
      className="rounded-full w-[50px] h-[50px] object-cover"
    />
    <div>
      <h3 className="font-bold">{name}</h3>
      <div className="flex gap-2 items-center">
        <p className="text-sm text-gray-500">{message}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  </div>
);

const TrendingItem = ({ image, title, location, time, hashtag }) => (
  <div className="mt-2">
    <div className="flex gap-2 items-center">
      <img
        src={image}
        alt="Trending"
        className="w-[50px] h-[50px] rounded-md"
      />
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-blue-500 hover:underline">
          {title}
        </p>
        <p className="text-xs">{location}</p>
      </div>
    </div>
    <div className="flex gap-2 items-center mt-2 justify-between">
      <div className="text-xs">
        Trending with <span className="text-blue-500">{hashtag}</span>
      </div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  </div>
);

const Side = () => {
  return (
    <aside className="w-full h-screen">
      {/* Chats Section */}
      <div className="shadow-md rounded-md h-1/2 overflow-y-scroll py-2">
        <div className="flex justify-between p-1 items-center">
          <h2 className="font-bold mb-4 text-2xl">Chats</h2>
          <div className="flex items-center text-2xl gap-3">
            <BsThreeDots />
            <IoIosExpand />
            <FaEdit />
          </div>
        </div>
        <div className="flex gap-2 items-center w-full bg-gray-200 p-2 rounded-md">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Messenger"
            className="bg-transparent outline-none border-0 p-1"
          />
        </div>

        {/* Tabs */}
        <div className="bg-white p-5 h-full">
          <Tabs>
            <TabList className="flex mb-5 gap-5">
              <Tab
                className="py-2 px-5 cursor-pointer text-black bg-gray-200 rounded-full border border-gray-300 outline-none"
                selectedClassName="font-bold bg-[blue] text-white border-none"
              >
                Chats
              </Tab>
              <Tab
                className="py-2 px-5 cursor-pointer text-black bg-gray-200 rounded-full border border-gray-300 outline-none"
                selectedClassName="font-bold bg-[blue] text-white border-none"
              >
                Communities
              </Tab>
            </TabList>

            {/* Tab Panels */}
            <TabPanel>
              <div className="space-y-2">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <ChatItem
                      key={index}
                      image={userImage}
                      name={`User Name ${index + 1}`}
                      message="Last message..."
                      time="4h"
                    />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Community</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {/* Trending Section */}
      <div className="shadow-md rounded-md mt-3 px-2 h-1/2 overflow-y-scroll py-2">
        <div className="flex gap-1 justify-between items-center">
          <h2 className="font-bold text-xl">What's happening</h2>
          <button className="text-sm cursor-pointer rounded-full py-2 px-3 bg-gray-200 border border-gray-400">
            View All
          </button>
        </div>
        <p>Stay informed daily.</p>

        <ul className="space-y-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <TrendingItem
                key={index}
                image={trendingImage}
                title="Highlights from Recent School Events and Activities"
                location="Kwara State, University of Ilorin"
                time="August 14, 2024, 18:45"
                hashtag="#Unilorin"
              />
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Side;
