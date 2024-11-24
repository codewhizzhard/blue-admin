import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../../../utils/Loader";
import { useAuthContext } from "../../../hooks/useAuthContext";

const OTP = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = useCallback(
    (value, index) => {
      if (!/^\d*$/.test(value)) return; // Allow only numbers
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    },
    [otp]
  );

  const handleKeyDown = useCallback(
    (e, index) => {
      if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    },
    [otp]
  );

  const isOtpComplete = otp.every((val) => val !== "");

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

  const handleError = (error) => {
    toast.error(
      <div>
        <h3 className="font-bold text-sm">Verification Failed</h3>
        <p className="text-sm">
          {error.response?.data?.message || "Please try again."}
        </p>
      </div>
    );
  };
  const receivedEmail = user?.user.email;
  const submitOtp = async () => {
    try {
      setLoading(true);
      const otpCode = otp.join("");
      const response = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/verify-email",
        { receivedEmail, otp: otpCode }
      );
      setLoading(false);

      if (response.status === 200) {
        handleSuccess();
      } else {
        throw new Error(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpComplete) {
      submitOtp();
    } else {
      toast.error("Please enter all OTP digits.");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/reset-password",
        { receivedEmail }
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
      toast.error("Pls retry after 5 mins");
    }
  };

  return (
    <div className="otp-card flex flex-col justify-center items-center px-16">
      <ToastContainer />
      <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
        OTP Verification
      </h1>
      <p className="text-sm font-bold text-blue-700">
        Code has been sent to {receivedEmail}
      </p>
      <form
        onSubmit={handleSubmit}
        className="otp-card-inputs my-[30px] grid gap-[30px] justify-center grid-cols-4"
        aria-label="OTP Verification Form"
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
            aria-label={`OTP Digit ${index + 1}`}
          />
        ))}
      </form>
      <p>
        Didn't get the OTP?{" "}
        <button
          onClick={handleResendOtp}
          className="text-blue-700"
          aria-label="Resend OTP"
        >
          Resend
        </button>
      </p>
      <button
        onClick={handleSubmit}
        disabled={!isOtpComplete || loading}
        className={`bg-blue-600 border-none py-[15px] px-[50px] text-lg text-white rounded-[20px] cursor-pointer mt-[15px] ${
          !isOtpComplete || loading ? "opacity-50" : ""
        }`}
        aria-label="Verify OTP"
      >
        {loading ? <Loader /> : "Verify"}
      </button>
    </div>
  );
};

export default OTP;
