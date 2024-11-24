import React from "react";
import groupImage from "../../../../../../../assets/img9.jpg"; // Replace with your actual image path

// Group data
const groups = [
  {
    name: "University of Ibadan (UI)",
    members: "10k members",
    postsPerDay: "10+ posts a day",
    mutualFriends: "Person 1 and 23 friends are members",
  },
  {
    name: "University of Lagos (UNILAG)",
    members: "15k members",
    postsPerDay: "8+ posts a day",
    mutualFriends: "Person 4 and 12 friends are members",
  },
  {
    name: "Ahmadu Bello University (ABU)",
    members: "12k members",
    postsPerDay: "5+ posts a day",
    mutualFriends: "Person 2 and 6 friends are members",
  },
  {
    name: "Obafemi Awolowo University (OAU)",
    members: "8k members",
    postsPerDay: "15+ posts a day",
    mutualFriends: "Person 3 and 9 friends are members",
  },
  {
    name: "University of Benin (UNIBEN)",
    members: "11k members",
    postsPerDay: "7+ posts a day",
    mutualFriends: "Person 1 and 18 friends are members",
  },
  {
    name: "Covenant University",
    members: "9k members",
    postsPerDay: "12+ posts a day",
    mutualFriends: "Person 5 and 10 friends are members",
  },
  {
    name: "University of Ilorin (UNILORIN)",
    members: "14k members",
    postsPerDay: "6+ posts a day",
    mutualFriends: "Person 2 and 22 friends are members",
  },
  {
    name: "Federal University of Technology Akure (FUTA)",
    members: "7k members",
    postsPerDay: "9+ posts a day",
    mutualFriends: "Person 8 and 3 friends are members",
  },
  {
    name: "Lagos State University (LASU)",
    members: "6k members",
    postsPerDay: "11+ posts a day",
    mutualFriends: "Person 4 and 7 friends are members",
  },
  {
    name: "Babcock University",
    members: "5k members",
    postsPerDay: "4+ posts a day",
    mutualFriends: "Person 6 and 5 friends are members",
  },
];

const GroupCard = ({ name, members, postsPerDay, mutualFriends }) => (
  <div className="bg-white shadow-md rounded-md p-4 flex flex-col gap-2">
    <img
      src={groupImage}
      alt={`${name} group`}
      className="w-full h-40 object-cover rounded-md"
    />
    <div>
      <h3 className="text-base font-bold">{name}</h3>
      <div className="flex gap-3 items-center">
        <p className="text-sm text-gray-500">{members}</p>
        <p className="text-sm text-gray-500">|</p>

        <p className="text-sm text-gray-500">{postsPerDay}</p>
      </div>

      <p className="text-sm text-gray-500">{mutualFriends}</p>
    </div>
    <button className="bg-blue-500 text-white py-2 rounded-md">
      Join group
    </button>
  </div>
);

const Discover = () => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            name={group.name}
            members={group.members}
            postsPerDay={group.postsPerDay}
            mutualFriends={group.mutualFriends}
          />
        ))}
      </div>
    </main>
  );
};

export default Discover;
