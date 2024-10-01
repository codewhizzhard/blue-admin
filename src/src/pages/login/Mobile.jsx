import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MobileHeroSection = () => (
  <div className="loginHero flex flex-col items-center pt-[50px] pb-12 px-[34px] rounded-2xl h-[324px] m-2">
    <a href="/" className="">
      <img src={logo} alt="logo" className="w-[119px] h-[43px]" />
    </a>

    <div className="mt-[10px]">
      <p className="my-3 text-white font-extrabold text-[11px] leading-[15.95px]">
        wv: xel "Empowering Students and Others"
      </p>
      <h2 className="text-[15px] leading-[16.5px] font-semibold font-[sora] text-white mt-5">
        Equipping student with essential skills for career success and
        readiness.
      </h2>
      <div className="w-[100%] flex gap-2 my-3">
        <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]"></div>
        <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]"></div>
        <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]"></div>
      </div>

      <p className="text-white font-semibold font-[inter] text-[9px] leading-[14.05px]">
        Equip students with skills in e-commerce, marketing, finance,
        blockchain, communication, and essential school knowledge for
        comprehensive career readiness.
      </p>
    </div>
  </div>
);

const Form = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="loginForm pt-[80px] px-6 flex flex-col items-center h-[600px] -mt-16">
      <h1 className="font-[sora] font-semibold text-[30px] leading-[37.8px] text-[#1b1818]">
        Welcome back!
      </h1>
      <p className="text-[#645d5d] font-normal text-[11px] leading-[15.95px]">
        Don't have an account?{" "}
        <Link to="/register" className="text-[#494cfa]">
          Sign Up
        </Link>
      </p>
      <form className="mt-5 w-full">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
          >
            Email or Matric Number
          </label>
          <input
            type="text"
            name="email"
            placeholder="wv:xeluser@gmail.com"
            className="border border-[#d0d5dd] rounded-md outline-none p-1"
          />
        </div>
        <div className="flex flex-col gap-1 my-4">
          <label
            htmlFor="password"
            className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
          >
            Password
          </label>
          <div className="flex gap-2 w-full border border-[#d0d5dd] rounded-md bg-white px-1">
            <input
              type={show ? "text" : "password"}
              name="password"
              className="outline-none p-1 w-full"
            />
            <button
              type="button"
              className="bg-transparent outline-none p-1"
              onClick={() => setShow(!show)}
              aria-label="Toggle Password Visibility"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-7"
        >
          Login
        </button>
        <p className="text-[#645d5d] font-normal text-[11px] leading-[15.95px] text-center mt-3">
          Forgot Password?{" "}
          <Link to="/forget-password" className="text-[#1519ff]">
            Click here
          </Link>
        </p>
      </form>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="flex flex-col">
      <MobileHeroSection />
      <Form />
    </div>
  );
};

export default Mobile;
