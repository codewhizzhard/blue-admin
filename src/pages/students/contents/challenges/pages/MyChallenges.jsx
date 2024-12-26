import React from "react";
import { Link } from "react-router-dom";
import { challenges } from "./data";

// Reusable ChallengeCard Component
const ChallengeCard = ({ id, title, category, date, img }) => (
  <Link
    to={`${id}`} // Dynamic route
    className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
  >
    <img
      src={img}
      alt={title}
      className="w-full h-32 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-blue-400">{category}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </Link>
);

// Reusable ChallengeGrid Component
const ChallengeGrid = ({ challenges }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {challenges.map((challenge) => (
      <ChallengeCard
        key={challenge.id}
        id={challenge.id}
        title={challenge.title}
        category={challenge.category}
        date={challenge.date}
        img={challenge.img}
      />
    ))}
  </div>
);

// Main App Component
const MyChallenges = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">My Challenges</h1>
    <ChallengeGrid challenges={challenges} />
  </div>
);

export default MyChallenges;
