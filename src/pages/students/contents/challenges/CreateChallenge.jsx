import React, { useState } from "react";

const CreateChallenge = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    challengeTitle: "",
    category: "",
    description: "",
    startDate: "",
    endDate: "",
    difficultyLevel: "",
    requirements: "",
    rules: "",
    rewardDescription: "",
    rewardAmount: "",
    maxParticipants: "",
    judges: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Challenge created successfully!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-full mx-auto mt-8 p-6 rounded-lg shadow-md">
      <div className="bg-white rounded-lg shadow-lg p-6 ">
        {currentStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Challenge Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="">Challenge Title</label>
                <input
                  type="text"
                  name="challengeTitle"
                  value={formData.challengeTitle}
                  onChange={handleChange}
                  placeholder="Enter challenge title"
                  className="px-4 py-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">Enter category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Enter category"
                  className="px-4 py-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-2 gap-2">
                <label className="">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter challenge description"
                  className="px-4 py-2 border rounded w-full col-span-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="">Difficulty Level</label>
                <input
                  type="text"
                  name="difficultyLevel"
                  value={formData.difficultyLevel}
                  onChange={handleChange}
                  placeholder="Enter difficulty level"
                  className="px-4 py-2 border rounded w-full col-span-2"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Requirements & Rules</h2>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="List challenge requirements"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <textarea
              name="rules"
              value={formData.rules}
              onChange={handleChange}
              placeholder="List challenge rules"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Reward Details and Deposit
            </h2>
            <textarea
              name="rewardDescription"
              value={formData.rewardDescription}
              onChange={handleChange}
              placeholder="Describe the reward"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <input
              type="number"
              min={1}
              name="rewardAmount"
              value={formData.rewardAmount}
              onChange={handleChange}
              placeholder="Enter reward amount"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Participant Settings</h2>
            <input
              type="number"
              name="maxParticipants"
              min={1}
              value={formData.maxParticipants}
              onChange={handleChange}
              placeholder="Enter max participants"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <textarea
              name="judges"
              value={formData.judges}
              onChange={handleChange}
              placeholder="Enter judges names"
              className="px-4 py-2 border rounded w-full mb-4"
            />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleSubmit}
              >
                Create Challenge
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateChallenge;
