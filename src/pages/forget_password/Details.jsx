import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios"; // Import Axios
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../utils/Loader";
import { useAuth } from "../../context/ProtectedRouteContext";

// ResetPasswordForm Component using Formik
const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { completeForgetPassword } = useAuth();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Make an API request for password reset
      const response = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/reset-password",
        values
      );
      // const email = values.email;
      const email = values.email.toLowerCase();
      await completeForgetPassword();

      // Handle success response
      if (response.status === 200) {
        toast.success(
          <div className="p-2 border-r-2 border-green-700">
            <h3 className="font-bold text-sm">
              Success! We've sent a password reset code to your email address.
            </h3>
          </div>,
          { autoClose: 5000 }
        );
        navigate("/reset-password", { state: { email } });
      }
    } catch (error) {
      // Handle error response
      setErrors({
        email: "Failed to send password reset code. Please try again.",
      });
      toast.error("Failed to send password reset code. Please try again.", {
        autoClose: 5000,
      });
      console.log(error);
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
              {isSubmitting ? <Loader /> : "Reset Password"}
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

const Details = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center h-full">
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
            Enter your email address below and we'll send you a code to reset
            your password.
          </p>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default Details;
