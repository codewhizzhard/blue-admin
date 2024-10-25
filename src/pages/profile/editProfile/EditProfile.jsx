import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "../../../assets/user.jfif";
import { useAuthContext } from "../../../hooks/useAuthContext";

// Custom hook to handle image selection and conversion to base64
const useImageHandler = (initialImage) => {
  const [image, setImage] = useState(initialImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB limit
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Please upload a valid image (JPEG or PNG).");
        return;
      }
      if (file.size > fileSizeLimit) {
        toast.error("File size exceeds the limit of 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.toString()); // This will be a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return [image, handleImageChange, setImage];
};

const EditProfile = () => {
  const { user, dispatch } = useAuthContext(); // Access dispatch to update user context
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  // Use the custom hook to handle profile image selection and conversion
  const [profileImage, handleImageChange, setImage] = useImageHandler(
    user?.user?.moreAboutUser?.profilePicture || User
  );

  const formik = useFormik({
    initialValues: {
      firstName: user?.user?.firstName || "",
      surName: user?.user?.surName || "",
      userName: user?.user?.moreAboutUser?.userName || "",
      email: user?.user?.email || "",
      dateOfBirth: user?.user?.moreAboutUser?.dateOfBirth || "",
      currentAddress: user?.user?.moreAboutUser?.currentAddress || "",
      permanentAddress: user?.user?.moreAboutUser?.permanentAddress || "",
      city: user?.user?.moreAboutUser?.city || "",
      postalCode: user?.user?.moreAboutUser?.postalCode || "",
      country: user?.user?.moreAboutUser?.country || "Nigeria",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      surName: Yup.string().required("Last Name is required"),
      userName: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      dateOfBirth: Yup.string().required("Date of Birth is required"),
      currentAddress: Yup.string().required("Present Address is required"),
      permanentAddress: Yup.string().required("Permanent Address is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string().required("Zip/Postal Code is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const token = user?.user?.token;

        // Make the API request to update profile
        await axios.post(
          "https://back-end-slwn.onrender.com/api/v1/user/update-profile",
          { ...values, profilePicture: profileImage }, // Send the base64 profile image
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updatedUser = {
          ...user,
          user: {
            ...user.user,
            firstName: values.firstName,
            surName: values.surName,
            email: values.email,
            moreAboutUser: {
              ...user.user.moreAboutUser,
              userName: values.userName,
              dateOfBirth: values.dateOfBirth,
              currentAddress: values.currentAddress,
              permanentAddress: values.permanentAddress,
              city: values.city,
              postalCode: values.postalCode,
              profilePicture: profileImage, // Update profile image if necessary
            },
          },
        };

        // Update localStorage with the new user data
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Update the context with the new user data
        dispatch({ type: "LOGIN", payload: updatedUser });

        toast.success("Profile Updated Successfully!");
      } catch (error) {
        toast.error("Error updating profile.");
        console.error(error);
      } finally {
        setLoading(false);
        setIsEditable(false);
      }
    },
  });

  const handleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <div className="flex gap-5 justify-center">
      {/* Toast Container */}
      <ToastContainer />

      {/* Profile Image Section */}
      <div className="relative w-[20%]">
        <div className="rounded-full w-44 h-44 relative">
          <img
            src={
              isEditable && profileImage
                ? profileImage
                : user?.user?.moreAboutUser?.profilePicture || User
            }
            alt="user_image"
            className="object-cover w-full h-full rounded-full"
          />
          {isEditable && (
            <>
              <label
                htmlFor="imageUpload"
                className="absolute bottom-2 right-2 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-800"
              >
                <FaEdit />
              </label>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <div className="w-[80%]">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "surName", type: "text" },
              { label: "Username", name: "userName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Date of Birth", name: "dateOfBirth", type: "date" },
              {
                label: "Present Address",
                name: "currentAddress",
                type: "text",
              },
              {
                label: "Permanent Address",
                name: "permanentAddress",
                type: "text",
              },
              { label: "City", name: "city", type: "text" },
              { label: "Zip/Postal Code", name: "postalCode", type: "number" },
              { label: "Country", name: "country", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="flex flex-col">
                <span>{label}</span>
                <input
                  type={type}
                  name={name}
                  className={`border-2 rounded-2xl px-4 py-2 outline-0 ${
                    formik.touched[name] && formik.errors[name]
                      ? "border-red-500"
                      : "border-blue-200"
                  }`}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={!isEditable}
                />
                {formik.touched[name] && formik.errors[name] ? (
                  <span className="text-red-500">{formik.errors[name]}</span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <button
              type="button"
              onClick={handleEdit}
              className={`px-6 py-2 rounded-2xl text-white ${
                isEditable ? "bg-gray-500" : "bg-yellow-500"
              }`}
            >
              {isEditable ? "Cancel" : "Edit"}
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-2xl text-white ${
                !isEditable || loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500"
              }`}
              disabled={!isEditable || loading}
              aria-disabled={!isEditable || loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
