import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgetPassword.css";
import logo from "../../assets/logo.svg";

const MobileHeroSection = () => (
  <div className="registerHero h-[324px] flex flex-col items-center pt-[50px] pb-12 px-[34px]">
    <Link to="/" className="">
      <img src={logo} alt="logo" className="w-[119px] h-[43px]" />
    </Link>

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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Simulate a successful form submission (you would replace this with an API call)
    setError("");
    console.log("Password reset link sent to:", email);

    // Redirect to verification page after success
    navigate("/verification", { replace: true });
  };

  return (
    <div className="loginForm pt-[80px] px-1 flex flex-col items-center h-[600px] -mt-16">
      <div className="flex flex-col justify-center px-4">
        <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
          Ready to regain <br />
          <span>access</span> ?
        </h1>
        <p className="text-sm font-bold text-blue-700">
          Let's get you back in control...
        </p>
        <p className="font-light text-sm text-gray-500 mt-4 text-justify">
          Enter your email address or matric number below and we'll send you a
          link to reset your password. Once you've received it, simply follow
          the instructions in the email to set up a new password and regain
          access to your account.
        </p>

        <form className="mt-5 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="wv:xeluser@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#d0d5dd] rounded-md outline-none p-2"
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
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
      </div>
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
