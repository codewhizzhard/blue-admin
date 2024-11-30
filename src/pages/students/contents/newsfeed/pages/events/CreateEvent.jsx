import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CreateEventModal = ({ onClose }) => {
  const [EventName, setEventName] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [inviteFriends, setInviteFriends] = useState([]);

  const [previewImage, setPreviewImage] = useState(null); // State to manage the preview image

  // Handle file input and update the preview image
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file); // Read the image file as a data URL
    } else {
      setPreviewImage(null); // Reset the preview if no file is selected
    }
  };

  const handleCreate = () => {
    const EventDetails = {
      EventName,
      privacy,
      inviteFriends,
    };
    console.log("Event Created:", EventDetails);
    // Implement API call or state management for creating a Event
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-md w-[90%] sm:w-[400px] p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Event</h2>
        <form className="space-y-4">
          {/* Image Preview */}
          {previewImage && (
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Image Preview:
              </label>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-40 object-fill rounded-md border"
              />
            </div>
          )}
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full"
            />
          </div>
          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium">Event Name</label>
            <input
              type="text"
              placeholder="Enter event name"
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          {/* Date and Time Inputs */}
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Start Time</label>
              <input
                type="time"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Time Zone */}
          <div>
            <label className="block text-sm font-medium">Time Zone</label>
            <select className="mt-1 block w-full p-2 border rounded-md">
              <option>GMT +1</option>
              <option>GMT +2</option>
              <option>GMT +3</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!EventName}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CreateEvent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setModalOpen(true)}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2"
      >
        <FaPlus /> Create New Event
      </button>
      {isModalOpen && <CreateEventModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CreateEvent;
