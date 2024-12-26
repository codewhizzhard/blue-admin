import React from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaExclamationCircle } from "react-icons/fa";
import { PiExam } from "react-icons/pi";

const ActivityCard = ({ icon: Icon, label, count }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <Icon className="text-blue-500 text-2xl" />
        <div className="rounded-md bg-gray-200 p-1">
          <select name="timeframe" className="bg-transparent outline-none">
            <option value="This Week">This Week</option>
            <option value="Next Week">Next Week</option>
            <option value="Next Month">Next Month</option>
          </select>
        </div>
      </div>
      <p className="text-gray-400">{label}</p>
      <p className="text-xl">{count}</p>
    </div>
  );
};

const Activity = () => {
  const activities = [
    {
      icon: SiGoogleclassroom,
      label: "Upcoming Classes Today",
      count: 4,
    },
    {
      icon: FaExclamationCircle,
      label: "Assignments Due Soon",
      count: 6,
    },
    {
      icon: PiExam,
      label: "Upcoming Exams",
      count: 12,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 items-center rounded-md bg-white p-4 my-1">
      {activities.map((activity, index) => (
        <ActivityCard
          key={index}
          icon={activity.icon}
          label={activity.label}
          count={activity.count}
        />
      ))}
    </div>
  );
};

export default Activity;
