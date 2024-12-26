import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinChallenge = ({ closeModal }) => {
  const [imageBase64, setImageBase64] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageBase64(reader.result);
      reader.onerror = () => toast.error("Error reading file!");
      reader.readAsDataURL(file);
    }
  };

  const handleParticipation = () => {
    toast.success("You have successfully joined the challenge!");
    closeModal(); // Ensures the modal is closed after clicking Participate
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Join the Challenge</h2>

        <form>
          {/* Challenge Cover Upload */}
          <div className="flex items-center gap-4 mb-4">
            <label
              htmlFor="challenge-cover"
              className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer"
            >
              <FaCamera />
            </label>
            <input
              type="file"
              id="challenge-cover"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <span className="ml-4 text-gray-700">
              Upload challenge cover image
            </span>
          </div>
          {imageBase64 && (
            <img
              src={imageBase64}
              alt="Challenge cover preview"
              className="mt-4 w-32 h-32 object-cover rounded-md"
            />
          )}

          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Provide a name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter a name"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Provide an Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={closeModal}
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring"
            >
              Cancel
            </button>
            <Link
              to="chatroom"
              onClick={handleParticipation}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Participate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinChallenge;
