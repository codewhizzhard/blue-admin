import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import "./ForgetPassword.css";

// ProgressIndicator Component
const ProgressIndicator = () => (
  <div className="w-full flex gap-2 my-5">
    <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]" />
    <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]" />
    <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]" />
  </div>
);

// HeroSection Component
const HeroSection = () => (
  <div className="py-4">
    <section className="desktopHero px-14 pt-7 pb-5 rounded-xl">
      <Link to="/">
        <img src={logo} alt="Company Logo" className="w-[108px] h-[43px]" />
      </Link>
      <div className="mt-[330px] pb-10 mr-4">
        <p className="mb-3 text-white font-bold text-sm leading-[15.95px]">
          wv: xel "Empowering Students and Others"
        </p>
        <h2 className="leading-[25.5px] font-semibold font-[sora] text-white mt-5 text-2xl">
          Equipping students with essential skills for career success and
          readiness.
        </h2>
        <ProgressIndicator />
        <p className="text-white font-semibold font-[inter] text-xs leading-[19.05px]">
          Equip students with skills in e-commerce, marketing, finance,
          blockchain, communication, and essential school knowledge for
          comprehensive career readiness.
        </p>
      </div>
    </section>
  </div>
);

// ResetPasswordForm Component
const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate an API request for password reset
    if (email === "") {
      setError("Email is required");
      return;
    }

    // Assume the reset request is successful
    console.log("Password reset request sent to:", email);

    // Redirect to 2fa page
    navigate("/verification");
  };

  return (
    <form className="mt-5 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="wv:xeluser@gmail.com"
          className="border border-[#d0d5dd] rounded-md outline-none p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button
        type="submit"
        className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-7"
      >
        Reset Password
      </button>
      <p className="text-[#645d5d] font-normal text-sm leading-[15.95px] text-center mt-3">
        Remember login credentials?{" "}
        <Link to="/login" className="text-[#1519ff]">
          Login
        </Link>
      </p>
    </form>
  );
};

// Desktop Component
const Desktop = () => {
  return (
    <div className="h-screen py-4 px-10 lg:px-[10%] flex items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <div className="lg:pr-[20%]">
            <FaAngleLeft className="border rounded-full border-gray-700 text-gray-800 p-1 size-7 mx-16 mb-8" />
            <div className="flex flex-col justify-center md:items-start items-center px-16">
              <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
                Ready to regain <br />
                <span>access</span>?
              </h1>
              <p className="text-sm font-bold text-blue-700">
                Let's get you back in control...
              </p>
              <p className="font-light text-sm text-gray-500 mt-4">
                Enter your email address or matric number below and we'll send
                you a link to reset your password. Once you've received it,
                simply follow the instructions in the email to set up a new
                password and regain access to your account.
              </p>
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
