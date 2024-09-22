import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Password.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FaAngleLeft, FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

// Password validation schema using Yup
const SignupSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const HeroSection = () => (
  <div className="registerHero h-[324px] pl-8">
    <Link to="/" className="">
      <img src={logo} alt="logo" className="w-[80px] pt-[32px]" />
    </Link>
    <div className="text-white font-[sora] font-semibold flex leading-[25.2px] mt-[60px] gap-11 text-xl">
      <FaAngleLeft />
      <p>Sign Up</p>
    </div>
  </div>
);

const PasswordForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="passwordForm h-[600px] -mt-20">
      <div className="flex flex-col justify-center items-center pt-24">
        <h1 className="font-[sora] font-semibold text-xl leading-[25.2px] text-[#1b1818]">
          Choose a password
        </h1>
      </div>
      <Formik
        initialValues={{
          newPassword: "",
          cPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form className="px-5 flex flex-col gap-4 mt-10">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="newPassword"
                className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
              >
                New Password
              </label>
              <div
                className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                  errors.newPassword && touched.newPassword
                    ? "border-red-500"
                    : !errors.newPassword && touched.newPassword
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <Field
                  type={show ? "text" : "password"}
                  name="newPassword"
                  placeholder="Input new password"
                  className="outline-none p-2 w-full"
                />
                <button
                  type="button"
                  className="bg-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-col gap-1 my-4">
              <label
                htmlFor="cPassword"
                className="font-[inter] font-medium text-sm leading-[17.4px] text-[#101928]"
              >
                Confirm Password
              </label>
              <div
                className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                  errors.cPassword && touched.cPassword
                    ? "border-red-500"
                    : !errors.cPassword && touched.cPassword
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              >
                <Field
                  type={show ? "text" : "password"}
                  name="cPassword"
                  placeholder="Confirm password"
                  className="outline-none p-2 w-full"
                />
                <button
                  type="button"
                  className="bg-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                name="cPassword"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 items-center">
              <div className="flex items-center gap-2">
                <FaCheckCircle
                  className={
                    values.newPassword.length >= 8
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    values.newPassword.length >= 8
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  8 characters
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  className={
                    /[0-9]/.test(values.newPassword)
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    /[0-9]/.test(values.newPassword)
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  One number
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  className={
                    /[A-Z]/.test(values.newPassword)
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    /[A-Z]/.test(values.newPassword)
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  One uppercase
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  className={
                    /[@$!%*?&#]/.test(values.newPassword)
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    /[@$!%*?&#]/.test(values.newPassword)
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  One special character
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  className={
                    /[a-z]/.test(values.newPassword)
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    /[a-z]/.test(values.newPassword)
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  One lowercase
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle
                  className={
                    values.newPassword === values.cPassword &&
                    values.cPassword.length > 0
                      ? "text-green-400"
                      : "text-gray-400"
                  }
                />
                <p
                  className={
                    values.newPassword === values.cPassword &&
                    values.cPassword.length > 0
                      ? "text-sm text-green-400"
                      : "text-sm text-gray-400"
                  }
                >
                  Password match
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign me up"}
            </button>

            <p className="text-[#645d5d] first-line:font-normal text-[11px] leading-[15.95px] text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#494cfa]">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Mobile = () => {
  return (
    <div>
      <HeroSection />
      <PasswordForm />
    </div>
  );
};

export default Mobile;
