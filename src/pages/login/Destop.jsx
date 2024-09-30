import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify"; // Import Toast components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const HeroSection = () => (
  <div className="py-4">
    <section className="desktopHero px-14 pt-7 pb-1 rounded-xl">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[108px] h-[43px]" />
      </Link>
      <div className="mt-[330px] pb-10 mr-4">
        <p className="mb-3 text-white font-bold text-sm">
          wv: xel "Empowering Students and Others"
        </p>
        <h2 className="text-white font-semibold text-2xl leading-6 mt-5">
          Equipping students with essential skills for career success and
          readiness.
        </h2>
        <div className="w-full flex gap-2 my-5">
          <div className="w-[30px] h-[6px] bg-white rounded-full" />
          <div className="w-[100px] h-[6px] bg-red-600 rounded-full" />
          <div className="w-[30px] h-[6px] bg-white rounded-full" />
        </div>
        <p className="text-white text-xs font-semibold">
          Equip students with skills in e-commerce, marketing, finance,
          blockchain, and communication for comprehensive career readiness.
        </p>
      </div>
    </section>
  </div>
);

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success (replace this with real authentication logic)
    const isLoginSuccessful = true; // Replace with actual login condition

    if (isLoginSuccessful) {
      toast.success("Login successful! Redirecting to homepage...", {
        position: "top-right", // Set notification position
      });
      navigate("/"); // Redirect to homepage
    } else {
      toast.error("Login failed! Please check your credentials.", {
        position: "top-right", // Set notification position
      });
    }
  };

  return (
    <div className="px-6 flex flex-col items-center">
      <h1 className="text-[30px] font-bold text-gray-900">Welcome back!</h1>
      <p className="text-sm text-gray-600 mt-1">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Sign Up
        </Link>
      </p>
      <form className="mt-5 w-full px-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-900">
            Email or Matric Number
          </label>
          <input
            type="text"
            name="email"
            placeholder="wv:xeluser@gmail.com"
            className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 my-4">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full focus:outline-none"
            />
            <button
              type="button"
              className="text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className="text-sm text-gray-600 text-center mt-2">
          Forgot Password?{" "}
          <Link to="/forget-password" className="text-blue-500">
            Click here
          </Link>
        </p>
      </form>
      <ToastContainer
        position="top-right" // Position of the toast notifications
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        closeOnClick // Close on click
        pauseOnHover // Pause on hover
        draggable // Allow dragging
        theme="light" // Theme of the toast
      />
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="h-screen px-10 lg:px-[2%] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
