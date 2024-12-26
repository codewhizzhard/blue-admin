import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import CreateChallenge from "./CreateChallenge";

// Reusable Header Component
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateChallengeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-700">Xel Challenges</h1>
      <div className="flex space-x-2">
        <button
          onClick={handleCreateChallengeClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Create Challenge
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-300">
          Share
        </button>
      </div>

      {/* Create Challenge Modal */}
      {isModalOpen && (
        // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        //   <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        //     <h2 className="text-xl font-bold mb-4">Create New Challenge</h2>
        //     <form>
        //       <div className="mb-4">
        //         <label htmlFor="title" className="block text-sm font-semibold">
        //           Challenge Title
        //         </label>
        //         <input
        //           id="title"
        //           type="text"
        //           className="w-full px-4 py-2 border border-gray-300 rounded-md"
        //         />
        //       </div>
        //       <div className="mb-4">
        //         <label
        //           htmlFor="category"
        //           className="block text-sm font-semibold"
        //         >
        //           Category
        //         </label>
        //         <input
        //           id="category"
        //           type="text"
        //           className="w-full px-4 py-2 border border-gray-300 rounded-md"
        //         />
        //       </div>
        //       <div className="mb-4">
        //         <label htmlFor="date" className="block text-sm font-semibold">
        //           Date
        //         </label>
        //         <input
        //           id="date"
        //           type="date"
        //           className="w-full px-4 py-2 border border-gray-300 rounded-md"
        //         />
        //       </div>
        //       <div className="mb-4">
        //         <label
        //           htmlFor="description"
        //           className="block text-sm font-semibold"
        //         >
        //           Challenge Description
        //         </label>
        //         <textarea
        //           id="description"
        //           rows="4"
        //           className="w-full px-4 py-2 border border-gray-300 rounded-md"
        //         />
        //       </div>
        //     </form>
        // <div className="flex justify-end gap-4 mt-6">
        // <button
        //   onClick={closeModal}
        //   className="px-4 py-2 bg-gray-500 text-white rounded"
        // >
        //   Cancel
        // </button>
        //   <button
        //     onClick={() => {
        //       closeModal();
        //       alert("Challenge Created!");
        //     }}
        //     className="px-4 py-2 bg-blue-500 text-white rounded"
        //   >
        //     Create Challenge
        //   </button>
        // </div>
        //   </div>
        // </div>
        <CreateChallenge closeModal={closeModal} />
      )}
    </header>
  );
};

// Main App Component
const Challenges = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <Header />
    <Navbar />
    <Outlet />
  </div>
);

export default Challenges;
