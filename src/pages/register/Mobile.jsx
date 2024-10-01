import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./Register.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MobileHeroSection = () => (
  <section className="registerHero rounded-2xl h-[324px] pl-8 m-2">
    <Link to="/">
      <img src={logo} alt="logo" className="w-[80px] pt-[32px]" />
    </Link>
    <div className="text-white font-[sora] font-semibold flex items-center gap-3 mt-[60px] text-xl">
      <FaAngleLeft />
      <p>Student Sign Up</p>
    </div>
  </section>
);

const MobileForm = ({ handleRegistration }) => (
  <div className="p-6">
    <Tabs className="px-3 lg:px-16 mt-4">
      <TabPanel>
        <div className="md:hidden">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-3 lg:px-16 flex flex-col gap-4 mt-10"
          >
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
              <button
                type="submit"
                onClick={handleRegistration}
                className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="px-3 flex flex-col gap-4 mt-10"
          >
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
              <button
                onClick={handleRegistration}
                type="submit"
                className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 cursor-pointer"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </TabPanel>
      <TabList className="flex items-center border-2 border-blue-500 rounded-lg my-5 mx-2">
        <Tab
          className="cursor-pointer focus:outline-none flex justify-center w-full py-2 text-blue-500"
          selectedClassName="hidden"
        >
          Signup as Students
        </Tab>
        <Tab
          className="cursor-pointer focus:outline-none flex justify-center w-full py-2 text-blue-500"
          selectedClassName="hidden"
        >
          Signup as Others
        </Tab>
      </TabList>
    </Tabs>
    <p className="text-[#645d5d] font-normal text-sm leading-[15.95px] text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-[#494cfa]">
        Login
      </Link>
    </p>
  </div>
);

const Mobile = ({ handleRegistration }) => {
  return (
    <div>
      <MobileHeroSection />
      <div className="registerForm h-[600px] -mt-20">
        <div className="flex flex-col justify-center items-center pt-20">
          <h1 className="font-[sora] font-semibold text-xl leading-[25.2px] text-[#1b1818]">
            Welcome to wv:xel
          </h1>
          <p className="text-xs font-bold text-blue-700">
            Let's sign you up...
          </p>
        </div>
        <MobileForm handleRegistration={handleRegistration} />
      </div>
    </div>
  );
};

export default Mobile;
