import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../../utils/Loader";

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, newPassword } = location.state || {}; // Safeguard to prevent error if email is undefined

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  // Handle OTP input change
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

  // Function to show success toast and navigate
  const handleSuccess = () => {
    toast.success(
      <div className="p-2 border-r-2 border-green-700">
        <h3 className="font-bold text-sm">You are all set!</h3>
        <p className="text-sm">Verification successful</p>
      </div>
    );
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Delay to ensure toast is shown before redirecting
  };

  // Function to handle OTP submission
  const submitOtp = async () => {
    if (!email || !newPassword) {
      toast.error("Email or password is missing. Please try again.");
      return;
    }

    try {
      setLoading(true);
      const otpCode = otp.join(""); // Join OTP array to form the code
      const response = await axios.post(
        `https://back-end-slwn.onrender.com/api/v1/user/reset-password/${otpCode}`,
        { email, newPassword, otp: otpCode }
      );
      setLoading(false);

      if (response.status === 200) {
        handleSuccess();
      } else {
        throw new Error(response.message || "OTP verification failed.");
      }
    } catch (error) {
      setLoading(false); // Ensure loading is disabled even in the case of an error
      const errorMessage = error.response?.data?.message || "Please try again.";
      toast.error(
        <div>
          <h3 className="font-bold text-sm">Verification Failed</h3>
          <p className="text-sm">{errorMessage}</p>
        </div>
      );
      console.log(error);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpComplete) {
      submitOtp();
    } else {
      toast.error("Please enter all OTP digits.");
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email is missing. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/reset-password",
        { email }
      );
      if (response.status === 200) {
        toast.info(
          <div className="p-2 border-r-2 border-blue-700">
            <h3 className="font-bold text-sm">Verification code resent</h3>
            <p className="text-sm">Check your email for the OTP.</p>
          </div>
        );
      } else {
        throw new Error("Failed to resend OTP.");
      }
    } catch (error) {
      toast.error("Resending OTP failed. Please try again.");
    }
  };

  return (
    <div className="otp-card flex flex-col justify-center items-center px-16 h-full">
      <ToastContainer />
      <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
        OTP Verification
      </h1>
      <p className="text-sm font-bold text-blue-700">
        Code has been sent to {email}
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
        <button onClick={handleResendOtp} className="text-blue-700">
          Resend
        </button>
      </p>
      <button
        onClick={handleSubmit}
        disabled={!isOtpComplete || loading}
        className={`bg-blue-600 border-none py-[15px] px-[50px] text-lg text-white rounded-[20px] cursor-pointer mt-[15px] ${
          !isOtpComplete || loading ? "opacity-50" : ""
        }`}
      >
        {loading ? <Loader /> : "Verify"}
      </button>
    </div>
  );
};

export default OTP;
