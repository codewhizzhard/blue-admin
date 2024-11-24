import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CreateGroupModal = ({ onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [inviteFriends, setInviteFriends] = useState([]);

  const suggestedFriends = ["Neo Scott", "Evan", "Paulina Williams"];

  const handleCreate = () => {
    const groupDetails = {
      groupName,
      privacy,
      inviteFriends,
    };
    console.log("Group Created:", groupDetails);
    // Implement API call or state management for creating a group
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-md w-[90%] sm:w-[400px] p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Group</h2>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://via.placeholder.com/40" // Replace with user's profile picture
            alt="Admin"
            className="rounded-full w-10 h-10"
          />
          <div>
            <h3 className="text-md font-medium">Diablo Richard</h3>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Provide a group name
          </label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter a group name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Choose privacy
          </label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Invite Friends (Optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {suggestedFriends.map((friend) => (
              <button
                key={friend}
                onClick={() =>
                  setInviteFriends((prev) =>
                    prev.includes(friend)
                      ? prev.filter((f) => f !== friend)
                      : [...prev, friend]
                  )
                }
                className={`px-3 py-1 rounded-full border ${
                  inviteFriends.includes(friend)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {friend}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!groupName}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

const CreateGroup = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setModalOpen(true)}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2"
      >
        <FaPlus /> Create New Group
      </button>
      {isModalOpen && <CreateGroupModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CreateGroup;
