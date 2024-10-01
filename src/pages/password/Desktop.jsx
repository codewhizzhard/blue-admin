import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../Styles.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import Loader from "../../utils/Loader";
import {
  FaAlignLeft,
  FaAngleLeft,
  FaArrowLeft,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import HeroSection from "../../utils/HeroSection";

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

const PasswordForm = ({ setLoading }) => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex w-full items-center">
      <div className="w-full">
        <div className="flex flex-col justify-center">
          <button
            onClick={goBack}
            className="border rounded-full p-1 w-max border-black mb-8 cursor-pointer"
          >
            <FaAngleLeft className="text-2xl font-light" />
          </button>

          <h1 className="text-[#1b1818] font-bold text-4xl">
            Continue Signup...
          </h1>
          <h3 className="font-[sora] font-semibold text-base leading-[25.2px] text-blue-600">
            Choose a password
          </h3>
        </div>
        <Formik
          initialValues={{
            newPassword: "",
            cPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setLoading(true);
            setSubmitting(true);
            setTimeout(() => {
              console.log(values);
              setLoading(false);
              setSubmitting(false);
              resetForm();
              navigate("/register-verification");
            }, 2000);
          }}
        >
          {({ values, touched, errors, isSubmitting }) => (
            <Form className="flex flex-col gap-4 mt-10">
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
                    className="bg-transparent outline-none p-2"
                    onClick={() => setShow(!show)}
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

              {/* Confirm Password Field */}
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
                    className="bg-transparent outline-none p-2"
                    onClick={() => setShow(!show)}
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

              {/* Password Strength Indicators */}
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-3">
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

              {/* Submit Button and Loader */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white rounded-md"
              >
                {isSubmitting ? <Loader /> : "Save New Password"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Desktop = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen h-screen px-10 lg:px-[2%]">
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>

        <div className="flex items-center justify-center flex-1">
          <PasswordForm setLoading={setLoading} />
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Desktop;
