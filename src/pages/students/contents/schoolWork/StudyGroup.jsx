import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import { IoCreateSharp } from "react-icons/io5";

const StudyGroup = () => {
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const openJoinModal = () => setJoinModalOpen(true);
  const closeJoinModal = () => setJoinModalOpen(false);

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const [groupName, setGroupName] = useState("");
  const [numOfNiche, setNumOfNiche] = useState("");
  const maxNiche = 9;

  const handleNext = () => {
    if (numOfNiche > maxNiche) {
      alert(`You can only create a maximum of ${maxNiche} niches.`);
      return;
    }
    alert("Group successfully created!");
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Start Your Study Group!
        </h2>
        <p className="text-gray-600 mb-6">
          Connect With Peers To Boost Your Learning Together.
        </p>
        <div className="space-y-4">
          <button
            className="w-full flex items-center justify-center space-x-2 py-2 px-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            onClick={openJoinModal}
          >
            <GrConnect />
            <span>Join A Group Using A Link</span>
          </button>
          <button
            className="w-full flex items-center justify-center space-x-2 py-2 px-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
            onClick={openCreateModal}
          >
            <IoCreateSharp />
            <span>Create A New Group</span>
          </button>
        </div>
      </div>

      {/* Join Group Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Join A Group
            </h3>
            <p className="text-gray-600 mb-4">
              Enter the group link to join your study group.
            </p>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Enter Group Link"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                onClick={closeJoinModal}
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Group Modal */}
      {isCreateModalOpen && (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        //   <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        //     <h3 className="text-lg font-bold text-gray-800 mb-4">
        //       Create A New Group
        //     </h3>
        //     <p className="text-gray-600 mb-4">
        //       Provide a name for your study group.
        //     </p>
        //     <input
        //       type="text"
        //       className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        //       placeholder="Enter Group Name"
        //     />
        //     <div className="flex justify-end space-x-2">
        //       <button
        //         className="px-4 py-2 text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
        //         onClick={closeCreateModal}
        //       >
        //         Cancel
        //       </button>
        //       <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        //         Create
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              New Study Group
            </h2>

            {/* Group Icon Section */}
            <div className="flex items-center space-x-3 mb-4">
              <button className="flex items-center justify-center w-12 h-12 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200">
                <FaCamera className="text-gray-600" />
              </button>
              <span className="text-gray-600 text-sm">
                Add group icon (Optional)
              </span>
            </div>

            {/* Group Name Input */}
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Provide a group name
            </label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter a group name"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Number of Niche Input */}
            <label className="block text-gray-700 text-sm font-medium mb-1">
              No of niche
            </label>
            <input
              type="number"
              value={numOfNiche}
              onChange={(e) => setNumOfNiche(e.target.value)}
              placeholder="1 - 09"
              min="1"
              max={maxNiche}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Info Message */}
            <p className="text-sm text-blue-600 bg-blue-100 border border-blue-200 rounded-lg p-2 mb-4">
              You can only create a max of {maxNiche} niche(s).
            </p>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="py-2 px-4 text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                onClick={closeCreateModal}
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyGroup;
