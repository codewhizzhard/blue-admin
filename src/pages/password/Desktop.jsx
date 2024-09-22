import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Password.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  FaAlignLeft,
  FaAngleLeft,
  FaArrowLeft,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const HeroSection = () => (
  <section className="passwordHero px-14 pt-10 pb-5 rounded-xl">
    <Link to="/">
      <img src={logo} alt="logo" className="w-[119px] h-[43px]" />
    </Link>
    <div className="mt-[330px] pb-10 mr-4">
      <p className="my-3 text-white font-extrabold text-[11px] md:text-base leading-[15.95px]">
        wv: xel "Empowering Students and Others"
      </p>
      <h2 className="leading-[35.5px] font-semibold font-[sora] text-white mt-5 text-3xl">
        Equipping students with essential skills for career success and
        readiness.
      </h2>
      <div className="w-full flex gap-2 my-5">
        <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]" />
        <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]" />
        <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]" />
      </div>
      <p className="text-white font-semibold font-[inter] text-sm leading-[19.05px]">
        Equip students with skills in e-commerce, marketing, finance,
        blockchain, communication, and essential school knowledge for
        comprehensive career readiness.
      </p>
    </div>
  </section>
);

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

const PasswordForm = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex gap-5 items-center m-3">
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
              <button
                type="submit"
                className="py-[10px] px-[24px] text-center bg-[#0258ff] w-full text-white rounded-lg mt-3 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign me up"}
              </button>

              <p className="text-[#645d5d] first-line:font-normal text-{11px} leading-[15.95px] text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-[#494cfa]">
                  Login
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="h-screen p-4 flex items-center">
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-1">
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
