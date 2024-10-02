import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../../utils/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "../../components/HeroSection";

const OTP = ({ loading, setLoading, handleVerification }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
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
        toast.success(
          <div className="p-2 border-r-2 border-green-700">
            <h3 className="font-bold text-sm">You are all set!</h3>
            <p className="text-sm">Verification successful</p>
          </div>
        );
        handleVerification();
      }, 1000);
    }
  };

  // Handle OTP resend
  const handleResendOtp = () => {
    console.log("Resending OTP...");
    toast.info(
      <div className="p-2 border-r-2 border-blue-700">
        <h3 className="font-bold text-sm">
          Verification code has been resent.
        </h3>
        <p className="text-sm">Check your mail for prompt comfirmation</p>
      </div>
    );
    // Implement OTP resend logic here
  };

  return (
    <div className="otp-card flex flex-col justify-center items-center px-16">
      <ToastContainer />
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

const Desktop = ({ handleVerification }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center py-4 px-4 lg:px-[2%]">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <OTP
            setLoading={setLoading}
            handleVerification={handleVerification}
          />
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Desktop;
