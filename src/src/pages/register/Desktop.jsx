import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../Styles.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HeroSection = () => (
  <div className="py-4">
    <section className="desktopHero px-14 pt-7 rounded-xl">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[108px] h-[43px]" />
      </Link>
      <div className="mt-[330px] pb-10 mr-4">
        <p className="mb-3 text-white font-bold text-sm leading-[15.95px]">
          wv: xel "Empowering Students and Others"
        </p>
        <h2 className="leading-[25.5px] font-semibold font-[sora] text-white mt-5 text-2xl">
          Equipping students with essential skills for career success and
          readiness.
        </h2>
        <div className="w-full flex gap-2 my-5">
          <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]" />
          <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]" />
          <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]" />
        </div>
        <p className="text-white font-semibold font-[inter] text-xs leading-[19.05px]">
          Equip students with skills in e-commerce, marketing, finance,
          blockchain, communication, and essential school knowledge for
          comprehensive career readiness.
        </p>
      </div>
    </section>
  </div>
);

const DesktopForm = () => (
  <div className="">
    <Tabs className="px-16 mt-4">
      <TabList className="flex items-center border border-blue-500 rounded w-max">
        <Tab
          className="px-8 py-2 cursor-pointer focus:outline-none"
          selectedClassName="bg-blue-500 text-white"
        >
          Students
        </Tab>
        <Tab
          className="px-8 py-2 cursor-pointer focus:outline-none"
          selectedClassName="bg-blue-500 text-white"
        >
          Others
        </Tab>
      </TabList>

      <TabPanel>
        <form className="flex flex-col gap-4 my-10">
          {[
            { label: "Name of School", name: "school", type: "text" },
            { label: "Matric Number", name: "matric", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                className="border border-[#d0d5dd] rounded-md outline-none p-1"
                required
              />
            </div>
          ))}

          <div className="flex flex-col">
            <Link
              to="password"
              type="submit"
              className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
            >
              Proceed
            </Link>
          </div>

          <p className="text-[#645d5d] font-normal text-[11px] md:text-sm leading-[15.95px] text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#494cfa]">
              Login
            </Link>
          </p>
        </form>
      </TabPanel>

      <TabPanel>
        <form className="flex flex-col gap-4 my-10">
          {[
            { label: "First Name", name: "fName", type: "text" },
            { label: "Surname", name: "surname", type: "text" },
            { label: "Email", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
              >
                {label}
              </label>
              <input
                type={type}
                name={name}
                className="border border-[#d0d5dd] rounded-md outline-none p-1"
                required
              />
            </div>
          ))}

          <div className="flex flex-col">
            <Link
              to="password"
              type="submit"
              className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
            >
              Proceed
            </Link>
          </div>

          <p className="text-[#645d5d] font-normal text-{11px} md:text-sm leading-[15.95px] text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#494cfa]">
              Login
            </Link>
          </p>
        </form>
      </TabPanel>
    </Tabs>
  </div>
);

const Desktop = () => {
  return (
    <div className="h-screen px-10 lg:px-[2%]">
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="flex flex-col justify-center md:items-start items-center pt-20 px-16">
              <h1 className="font-[sora] font-semibold text-xl leading-[25.2px] text-[#1b1818]">
                Welcome to wv:xel
              </h1>
              <p className="text-sm font-bold text-blue-700">
                Let's sign you up...
              </p>
            </div>
            <DesktopForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
