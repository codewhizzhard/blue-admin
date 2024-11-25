import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toggler from "../../../utils/Toggler";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Security = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useAuthContext();

  // Formik for password change handling
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const token = user?.user.token;

        // Make the API request to update profile
        const response = await axios.post(
          "https://back-end-slwn.onrender.com/api/v1/user/update-profile",
          {
            currentPassword: values.currentPassword,
            newPassword: values.newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          toast.success("Password changed successfully");
          setIsEditing(false);
          formik.resetForm();
        } else {
          toast.error("Failed to change password");
        }
      } catch (error) {
        console.error("Error changing password:", error);
        toast.error("Failed to change password");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleToggle2FA = () => {
    setIs2FAEnabled((prev) => !prev);
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2">
      <ToastContainer />

      {/* Two-factor Authentication */}
      <div className="flex flex-col gap-2">
        <h5 className="font-bold">Two-factor Authentication</h5>
        <div className="flex gap-4 items-center">
          <Toggler isChecked={is2FAEnabled} onToggle={handleToggle2FA} />
          <p>
            {is2FAEnabled
              ? "2FA is enabled"
              : "Enable or disable two-factor authentication"}
          </p>
        </div>
      </div>

      {/* Change Password Form */}
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
        <h5 className="font-bold">Change Password</h5>

        {/* Current Password */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            placeholder="***********"
            className="border-2 border-blue-200 rounded-2xl px-4 py-2 outline-0"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!isEditing}
          />
          {formik.touched.currentPassword && formik.errors.currentPassword ? (
            <span className="text-red-500">
              {formik.errors.currentPassword}
            </span>
          ) : null}
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="***********"
            className="border-2 border-blue-200 rounded-2xl px-4 py-2 outline-0"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!isEditing}
          />
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <span className="text-red-500">{formik.errors.newPassword}</span>
          ) : null}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2 w-[50%]">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="***********"
            className="border-2 border-blue-200 rounded-2xl px-4 py-2 outline-0"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={!isEditing}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <span className="text-red-500">
              {formik.errors.confirmPassword}
            </span>
          ) : null}
        </div>

        <div className="flex justify-end gap-2">
          {/* Edit Button */}
          <div className="">
            <button
              type="button"
              className={`px-4 py-2 rounded-2xl ${
                isEditing ? "bg-gray-500" : "bg-yellow-500"
              } text-white`}
              onClick={toggleEditMode}
            >
              {isEditing ? "Cancel Edit" : "Edit"}
            </button>
          </div>
          {/* Submit Button */}
          {isEditing && (
            <div className="">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-2xl text-white"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Security;
