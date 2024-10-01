import React from "react";
import { Link } from "react-router-dom";
import "../../Styles.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HeroSection from "../../utils/HeroSection";

const DesktopForm = ({ handleRegistration }) => (
  <div className="px-10 mt-4">
    <Tabs>
      <TabList className="flex items-center border border-blue-500 rounded w-max">
        <Tab
          className="px-8 py-2 cursor-pointer outline-none"
          selectedClassName="bg-blue-500 text-white"
        >
          Students
        </Tab>
        <Tab
          className="px-8 py-2 cursor-pointer outline-none"
          selectedClassName="bg-blue-500 text-white"
        >
          Others
        </Tab>
      </TabList>

      <TabPanel>
        <form
          className="flex flex-col gap-4 my-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: "Name of School", name: "school", type: "text" },
            { label: "Matric Number", name: "matric", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="font-medium text-sm text-[#101928]"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                className="border border-[#d0d5dd] rounded-md p-1"
                required
              />
            </div>
          ))}

          <div className="flex flex-col">
            <button
              type="submit"
              onClick={handleRegistration}
              className="py-2 px-4 text-center bg-blue-600 w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
            >
              Proceed
            </button>
          </div>

          <p className="text-[#645d5d] text-[11px] md:text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </TabPanel>

      <TabPanel>
        <form
          className="flex flex-col gap-4 my-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { label: "First Name", name: "fName", type: "text" },
            { label: "Surname", name: "surname", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="font-medium text-sm text-[#101928]"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                className="border border-[#d0d5dd] rounded-md p-1"
                required
              />
            </div>
          ))}

          <div className="flex flex-col">
            <button
              type="submit"
              onClick={handleRegistration}
              className="py-2 px-4 text-center bg-blue-600 w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
            >
              Proceed
            </button>
          </div>

          <p className="text-[#645d5d] text-[11px] md:text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </TabPanel>
    </Tabs>
  </div>
);

const Desktop = ({ handleRegistration }) => {
  return (
    <div className="h-screen px-10 lg:px-[2%]">
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="flex flex-col justify-center md:items-start items-center pt-20 px-10">
              <h1 className="font-[sora] font-semibold text-xl leading-[25.2px] text-[#1b1818]">
                Welcome to wv:xel
              </h1>
              <p className="text-sm font-bold text-blue-700">
                Let's sign you up...
              </p>
            </div>
            <DesktopForm handleRegistration={handleRegistration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
