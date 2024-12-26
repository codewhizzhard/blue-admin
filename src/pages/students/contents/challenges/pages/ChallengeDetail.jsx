import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { challenges } from "./data";
import JoinChallenge from "./JoinChallenge";

const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const challenge = challenges.find((ch) => ch.id === id);

  const handleJoinChallenge = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!challenge) {
    return (
      <div className="text-center mt-20 text-xl">
        Challenge not found!
        <button
          onClick={() => navigate(-1)} // Navigate back
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto bg-white shadow-md rounded-lg relative overflow-hidden">
        <img
          src={challenge.img}
          alt={challenge.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">{challenge.title}</h1>
              <p className="text-sm">{challenge.category}</p>
              <p className="text-xs">{challenge.date}</p>
              <div className="flex gap-2 mt-1">
                <h6 className="text-sm font-semibold">Creator:</h6>
                <p className="text-sm">{challenge.author}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleJoinChallenge}
                className="cursor-pointer bg-red-600 text-white rounded-md p-2"
              >
                Join Challenge
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        <div>
          <h4 className="text-blue-500">Challenge Rules</h4>
          <p>All participants must submit their projects by the deadline.</p>
        </div>
        <div>
          <h4 className="text-blue-500">Requirements</h4>
          <p>All participants must use React.js for the frontend.</p>
        </div>
        <div>
          <h4 className="text-blue-500">Award Details</h4>
          <p>Top 3 projects will be selected for the finals</p>
        </div>
        <div>
          <h4 className="text-blue-500">Deadline</h4>
          <p>Two weeks after project is posted.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <JoinChallenge closeModal={closeModal} />}
    </div>
  );
};

export default ChallengeDetail;
