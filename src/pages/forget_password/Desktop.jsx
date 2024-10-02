import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ForgetPassword.css";
import HeroSection from "../../components/HeroSection";

// ResetPasswordForm Component using Formik
const ResetPasswordForm = ({ handleForgetPassword }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    // Simulate an API request for password reset
    try {
      console.log("Password reset request sent to:", values.email);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated async request

      // Show success message
      toast.success(
        <div className="p-2 border-r-2 border-green-700">
          <h3 className="font-bold text-sm">
            Success! We've sent a password reset link to your email address.
          </h3>
          <p className="text-sm">
            Please check your inbox (and don't forget to look in your spam
            folder, just in case). Once you've received the main, click the link
            to reset your password and regain access to your account. Need
            further assistance, feel free to reach out to our support team.
          </p>
        </div>
      );
      // handleForgetPassword();
      // Redirect to verification page
      // navigate("/verification");
      handleForgetPassword();
    } catch (error) {
      setErrors({
        email: "Failed to send password reset link. Please try again.",
      });
      toast.error("Failed to send password reset link. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-5 w-full">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="wv:xeluser@gmail.com"
                className="border border-[#d0d5dd] rounded-md outline-none p-2"
              />
              <ErrorMessage
                component="p"
                className="text-red-500 text-sm mt-1"
                name="email"
              />
            </div>
            <button
              type="submit"
              className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-7"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </button>
            <p className="text-[#645d5d] font-normal text-sm leading-[15.95px] text-center mt-3">
              Remember login credentials?{" "}
              <Link to="/login" className="text-[#1519ff]">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};

// Desktop Component
const Desktop = ({ handleForgetPassword }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen py-4 px-10 lg:px-[2%] flex items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <div className="px-12">
            <button
              onClick={goBack}
              className="border rounded-full p-1 w-max border-black mb-8 cursor-pointer"
            >
              <FaAngleLeft className="text-2xl font-light" />
            </button>
            <div className="flex flex-col justify-center md:items-start items-center">
              <h1 className="font-[sora] font-bold text-2xl leading-[35px] text-[#1b1818]">
                Ready to regain <br />
                <span>access</span>?
              </h1>
              <p className="text-sm font-bold text-blue-700">
                Let's get you back in control...
              </p>
              <p className="font-light text-sm text-gray-500 mt-4">
                Enter your email address below and we'll send you a link to
                reset your password. Once you've received it, simply follow the
                instructions in the email to set up a new password and regain
                access to your account.
              </p>
              <ResetPasswordForm handleForgetPassword={handleForgetPassword} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
