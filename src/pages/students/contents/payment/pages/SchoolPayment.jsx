import React from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SchoolPayment = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-md mx-auto p-6 border-2 border-dashed rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Connect School Payment Details
      </h2>
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="studentId"
              className="block text-sm font-medium mb-1"
            >
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              placeholder="Enter your Student ID"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="schoolEmail"
              className="block text-sm font-medium mb-1"
            >
              School Email
            </label>
            <input
              type="email"
              id="schoolEmail"
              placeholder="Enter your School Email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={handleCancel}
          >
            <MdCancel />
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            <AiOutlineLink />
            Link Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolPayment;
