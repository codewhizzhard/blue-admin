import React from "react";
import { v4 as uuidv4 } from "uuid";
import groupImage from "../../../../../../../assets/img10.jpg"; // Replace with your actual image path
import { useNavigate } from "react-router-dom";

// Sample group data
const groups = [
  {
    id: uuidv4(),
    name: "University of Ibadan (UI)",
    lastVisited: "a day ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "University of Lagos (UNILAG)",
    lastVisited: "3 days ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Akwa Ibom University (AKSU)",
    lastVisited: "a week ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Obafemi Awolowo University (OAU)",
    lastVisited: "5 hours ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "University of Benin (UNIBEN)",
    lastVisited: "2 weeks ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Covenant University",
    lastVisited: "yesterday",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "University of Ilorin (UNILORIN)",
    lastVisited: "4 days ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Federal University of Technology Akure (FUTA)",
    lastVisited: "1 hour ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Lagos State University (LASU)",
    lastVisited: "6 days ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Babcock University",
    lastVisited: "3 hours ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Federal University of Technology Minna (FUTMinna)",
    lastVisited: "a month ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "University of Port Harcourt (UNIPORT)",
    lastVisited: "2 days ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Nnamdi Azikiwe University (UNIZIK)",
    lastVisited: "5 days ago",
    groupImage: groupImage,
  },
  {
    id: uuidv4(),
    name: "Oxford University (OU)",
    lastVisited: "5 weeks ago",
    groupImage: groupImage,
  },
  // Add more groups as needed
];

const GroupCard = ({ id, groupImage, name, lastVisited }) => {
  const navigate = useNavigate();

  const handleViewGroup = () => {
    navigate(`/students/dashboard/newsfeed/groups/${id}`, {
      state: { id, groupImage, name, lastVisited }, // Pass group details as state
    });
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center gap-2">
      <img
        src={groupImage}
        alt={`${name} group`}
        className="w-20 h-20 rounded-full object-cover"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-500">You last visited {lastVisited}</p>
      <button
        onClick={handleViewGroup}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        View group
      </button>
    </div>
  );
};

const YourGroups = () => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {groups.map((group, index) => (
          <GroupCard
            key={group.id}
            id={group.id}
            groupImage={group.groupImage}
            name={group.name}
            lastVisited={group.lastVisited}
          />
        ))}
      </div>
    </main>
  );
};

export default YourGroups;
