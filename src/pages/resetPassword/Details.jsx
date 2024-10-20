import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/ProtectedRouteContext";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { completeVerification } = useAuth();
  const { state } = useLocation();
  const email = state?.email || ""; // Get the email from the previous state

  // Reusable function to show toast
  const showToast = (message, type = "success") => {
    toast[type](
      <div
        className={`p-2 border-r-2 ${
          type === "success" ? "border-green-700" : "border-red-700"
        }`}
      >
        <h3 className="font-bold text-sm">
          {type === "success" ? "Success" : "Error"}
        </h3>
        <p className="text-sm">{message}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-[#1b1818] font-bold text-3xl mb-1">Reset Password</h1>
      <h3 className="font-[sora] font-semibold text-sm leading-[25.2px] text-blue-600">
        Input new password below to continue
      </h3>

      <Formik
        initialValues={{ newPassword: "", cPassword: "" }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setLoading(true);
            setSubmitting(true);
            await completeVerification();
            resetForm();
            navigate("/verification", {
              state: { email, newPassword: values.newPassword },
            });
            showToast("Password reset successful. Proceed to verify.");
          } catch (error) {
            showToast("Something went wrong. Please try again.", "error");
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ values, touched, errors, isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-10">
            {/* New Password Field */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="newPassword"
                className="font-[inter] font-medium text-sm text-[#101928]"
              >
                New Password
              </label>
              <div
                className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                  touched.newPassword && errors.newPassword
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <Field
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  placeholder="Input new password"
                  className="outline-none p-2 w-full"
                />
                <button
                  type="button"
                  className="bg-transparent p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                className="font-[inter] font-medium text-sm text-[#101928]"
              >
                Confirm Password
              </label>
              <div
                className={`flex gap-2 w-full border rounded-md bg-white px-1 py-1 ${
                  touched.cPassword && errors.cPassword
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="cPassword"
                  placeholder="Confirm password"
                  className="outline-none p-2 w-full"
                />
                <button
                  type="button"
                  className="bg-transparent p-2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
              <PasswordStrengthIndicator
                label="8 characters"
                isValid={values.newPassword.length >= 8}
              />
              <PasswordStrengthIndicator
                label="One number"
                isValid={/[0-9]/.test(values.newPassword)}
              />
              <PasswordStrengthIndicator
                label="One uppercase"
                isValid={/[A-Z]/.test(values.newPassword)}
              />
              <PasswordStrengthIndicator
                label="One special character"
                isValid={/[@$!%*?&#]/.test(values.newPassword)}
              />
              <PasswordStrengthIndicator
                label="One lowercase"
                isValid={/[a-z]/.test(values.newPassword)}
              />
              <PasswordStrengthIndicator
                label="Password match"
                isValid={
                  values.newPassword === values.cPassword &&
                  values.cPassword.length > 0
                }
              />
            </div>

            {/* Submit Button */}
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
  );
};

// Reusable Password Strength Indicator Component
const PasswordStrengthIndicator = ({ label, isValid }) => (
  <div className="flex items-center gap-3">
    <FaCheckCircle className={isValid ? "text-green-400" : "text-gray-400"} />
    <p className={isValid ? "text-sm text-green-400" : "text-sm text-gray-400"}>
      {label}
    </p>
  </div>
);

const Details = () => (
  <div className="flex items-center h-full lg:px-[2%]">
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <PasswordForm />
      </div>
      <ToastContainer />
    </div>
  </div>
);

export default Details;
