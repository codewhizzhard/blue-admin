import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Loader from "../../../utils/Loader";

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

const OTP = ({ loading, setLoading }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  // Handle OTP input
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace and focus previous input
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Check if OTP is complete
  const isOtpComplete = otp.every((val) => val !== "");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpComplete) {
      setLoading(true);
      // Simulate API call for OTP verification
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1000);
    }
  };

  // Handle OTP resend
  const handleResendOtp = () => {
    console.log("Resending OTP...");
    // Implement OTP resend logic here
  };

  return (
    <div className="otp-card flex flex-col justify-center items-center px-16">
      <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
        OTP Verification
      </h1>
      <p className="text-sm font-bold text-blue-700">
        Code has been sent to your email
      </p>
      <form
        onSubmit={handleSubmit}
        className="otp-card-inputs my-[30px] grid gap-[30px] justify-center grid-cols-4"
      >
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[60px] h-[70px] text-[35px] text-center rounded-[20px] border border-black focus:outline-2 focus:outline-blue-600 focus:border-transparent"
          />
        ))}
      </form>
      <p>
        Didn't get the OTP?{" "}
        <Link to="#" onClick={handleResendOtp}>
          Resend
        </Link>
      </p>
      <button
        onClick={handleSubmit}
        disabled={!isOtpComplete}
        className={`bg-blue-600 border-none py-[15px] px-[50px] text-lg text-white rounded-[20px] cursor-pointer mt-[15px] ${
          !isOtpComplete ? "opacity-50" : ""
        }`}
      >
        {loading ? <Loader /> : "Verify"}
      </button>
    </div>
  );
};

const Desktop = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center py-4 px-4 lg:px-[2%]">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <OTP setLoading={setLoading} />
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Desktop;
