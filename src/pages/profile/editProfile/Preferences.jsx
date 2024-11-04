import React, { useState } from "react";
import Toggler from "../../../utils/Toggler";
import axios from "axios";

const Preferences = () => {
  const [formData, setFormData] = useState({
    currency: "Naira",
    timezone: "West Africa Time (WAT)",
    notifications: {
      disableMessages: false,
      accountRecommendations: false,
    },
  });

  const [isEditable, setIsEditable] = useState(false); // Controls form edit mode
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = (field) => {
    setFormData((prevState) => ({
      ...prevState,
      notifications: {
        ...prevState.notifications,
        [field]: !prevState.notifications[field],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      // Simulating API request
      const response = await axios.post("/api/preferences", formData);
      console.log(response.data);
      alert("Preferences updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update preferences.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleEditClick = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-5">
      {/* Currency Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="currency" className="font-semibold">
          Currency
        </label>
        <input
          id="currency"
          name="currency"
          type="text"
          placeholder="Naira"
          className="border-2 rounded-2xl px-4 py-2 outline-0 focus:ring-2 focus:ring-blue-500"
          value={formData.currency}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
      </div>

      {/* Time Zone Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="timezone" className="font-semibold">
          Time Zone
        </label>
        <input
          id="timezone"
          name="timezone"
          type="text"
          placeholder="West Africa Time (WAT)"
          className="border-2 rounded-2xl px-4 py-2 outline-0 focus:ring-2 focus:ring-blue-500"
          value={formData.timezone}
          onChange={handleInputChange}
          disabled={!isEditable}
        />
      </div>

      {/* Notification Preferences */}
      <div className="col-span-2 flex flex-col gap-4 mt-5">
        <h6 className="font-bold text-lg">Notification</h6>

        {/* Toggle for Disable Notifications */}
        <div className="flex items-center gap-3">
          <Toggler
            isChecked={formData.notifications.disableMessages}
            onToggle={() => handleToggle("disableMessages")}
            disabled={!isEditable}
          />
          <span>Disable notifications for sending and receiving messages</span>
        </div>

        {/* Toggle for Account Recommendations */}
        <div className="flex items-center gap-3">
          <Toggler
            isChecked={formData.notifications.accountRecommendations}
            onToggle={() => handleToggle("accountRecommendations")}
            disabled={!isEditable}
          />
          <span>Recommendations for improving my account</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="col-span-2 flex justify-end gap-4 mt-5">
        {/* Edit Button */}
        <button
          type="button"
          className={`px-4 py-2 rounded-2xl ${
            isEditable ? "bg-gray-400" : "bg-yellow-500"
          } text-white`}
          onClick={handleEditClick}
          disabled={isLoading}
        >
          {isEditable ? "Cancel Edit" : "Edit"}
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className={`px-4 py-2 rounded-2xl text-white ${
            !isEditable || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500"
          }`}
          disabled={!isEditable || isLoading}
        >
          {isLoading ? "Saving..." : "Save Preferences"}
        </button>
      </div>
    </form>
  );
};

export default Preferences;
