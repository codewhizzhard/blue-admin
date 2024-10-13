import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../Styles.css";
import Loader from "../../utils/Loader";
import { useAuth } from "../../router/AuthContext";
import axios from "axios";

// Custom reusable form for registration
const RegistrationForm = ({ formik, formType, loading }) => (
  <form onSubmit={formik.handleSubmit}>
    {formType === "students" && (
      <>
        <FormField formik={formik} name="schoolName" label="School Name" />
        <FormField
          formik={formik}
          name="matricNo"
          label="Registration Number"
        />
      </>
    )}
    {formType === "others" && (
      <>
        <FormField formik={formik} name="firstName" label="First Name" />
        <FormField formik={formik} name="surName" label="Last Name" />
      </>
    )}
    <FormField formik={formik} name="email" label="Email" type="email" />
    <PasswordField formik={formik} name="password" label="New Password" />
    <PasswordField formik={formik} name="cPassword" label="Confirm Password" />

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
      <PasswordStrengthIndicator values={formik.values} />
    </div>

    <button
      type="submit"
      className={`py-2 px-4 text-center w-full text-white rounded-lg mt-3 ${
        formik.isValid && formik.dirty
          ? "bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600"
          : "bg-blue-400 cursor-not-allowed"
      }`}
      disabled={!formik.isValid || !formik.dirty || loading}
    >
      {loading ? <Loader /> : "Register"}
    </button>

    <p className="text-[#645d5d] mt-2 text-sm text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-600">
        Login
      </Link>
    </p>
  </form>
);

const PasswordStrengthIndicator = ({ values }) => (
  <>
    <Indicator condition={values.password.length >= 8} label="8 characters" />
    <Indicator condition={/[0-9]/.test(values.password)} label="One number" />
    <Indicator
      condition={/[A-Z]/.test(values.password)}
      label="One uppercase"
    />
    <Indicator
      condition={/[a-z]/.test(values.password)}
      label="One lowercase"
    />
    <Indicator
      condition={/[@$!%*?&#]/.test(values.password)}
      label="One special character"
    />
    <Indicator
      condition={
        values.password === values.cPassword && values.cPassword.length > 0
      }
      label="Password match"
    />
  </>
);

const Indicator = ({ condition, label }) => (
  <div className="flex items-center gap-3">
    <FaCheckCircle className={condition ? "text-green-400" : "text-gray-400"} />
    <p
      className={condition ? "text-sm text-green-400" : "text-sm text-gray-400"}
    >
      {label}
    </p>
  </div>
);

const FormField = ({ formik, label, name, type = "text", placeholder }) => (
  <div className="flex flex-col gap-2 my-2">
    <label htmlFor={name} className="font-medium text-sm">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="p-2 rounded border border-blue-200 bg-white w-full outline-none"
    />
    {formik.touched[name] && formik.errors[name] && (
      <p className="text-red-500 text-sm">{formik.errors[name]}</p>
    )}
  </div>
);

const PasswordField = ({ formik, name, label, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 my-4">
      <label htmlFor={name} className="font-medium text-sm">
        {label}
      </label>
      <div className="flex gap-2 w-full border border-blue-200 rounded-md bg-white">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs">{formik.errors[name]}</p>
      )}
    </div>
  );
};

const Details = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Added error state for displaying errors
  const navigate = useNavigate();
  const { completeRVerification } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[a-z]/, "Password must contain a lowercase letter")
      .matches(/[@$!%*?&#]/, "Password must contain a special character")
      .required("Password is required"),
    cPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const others = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: validationSchema.concat(
      Yup.object({
        firstName: Yup.string().required("First name is required"),
        surName: Yup.string().required("Last name is required"),
      })
    ),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://back-end-slwn.onrender.com/api/v1/user/register/others",
          values
        );
        const email = values.email;
        await completeRVerification();
        navigate("/register-verification", { state: { email } });
      } catch (error) {
        setError("Error submitting form, please try again later.");
        console.error("Error submitting form", error);
      } finally {
        setLoading(false);
      }
    },
    validateOnMount: true,
  });

  const student = useFormik({
    initialValues: {
      schoolName: "",
      matricNo: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: validationSchema.concat(
      Yup.object({
        schoolName: Yup.string().required("School name is required"),
        matricNo: Yup.string().required("Matric number is required"),
      })
    ),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://back-end-slwn.onrender.com/api/v1/user/register/student",
          values
        );
        const email = values.email;
        await completeRVerification();
        navigate("/register-verification", { state: { email } });
      } catch (error) {
        setError("Error submitting form, please try again later.");
        console.error("Error submitting form", error);
      } finally {
        setLoading(false);
      }
    },
    validateOnMount: true,
  });

  return (
    <div className="form mt-[-20%] md:mt-0 py-16 md:py-2 md:bg-white">
      <div className="flex flex-col justify-center md:items-start items-center md:px-10">
        <h1 className="font-[sora] font-semibold text-xl leading-[25.2px] text-[#1b1818]">
          Welcome to wv:xel
        </h1>
        <p className="text-sm font-bold text-blue-700">Let's sign you up...</p>
      </div>

      <div className="px-5 md:px-10 mt-2">
        <Tabs>
          <TabList className="flex items-center border border-blue-500 rounded w-full md:w-max">
            <Tab
              className={`px-8 py-2 cursor-pointer outline-none flex-1 text-center ${
                loading && "cursor-not-allowed"
              }`}
              selectedClassName="bg-blue-500 text-white"
              disabled={loading}
            >
              Students
            </Tab>
            <Tab
              className={`px-8 py-2 cursor-pointer outline-none flex-1 text-center ${
                loading && "cursor-not-allowed"
              }`}
              selectedClassName="bg-blue-500 text-white"
              disabled={loading}
            >
              Others
            </Tab>
          </TabList>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <TabPanel>
            <RegistrationForm
              formik={student}
              formType="students"
              loading={loading}
            />
          </TabPanel>

          <TabPanel>
            <RegistrationForm
              formik={others}
              formType="others"
              loading={loading}
            />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Details;
