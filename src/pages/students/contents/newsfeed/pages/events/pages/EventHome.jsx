import React from "react";
import img1 from "../../../../../../../assets/img1.jpg";
import img2 from "../../../../../../../assets/img2.jpg";
import img3 from "../../../../../../../assets/img3.jpg";
import img4 from "../../../../../../../assets/img4.jpg";

const info = [
  {
    img: img1,
    interest: 456,
    title: "Unlock your earning potential: Embrace inter...",
    time: "Tues, 14th Oct, 2024; 5PM",
    attendance: "45",
  },
  {
    img: img2,
    interest: 456,
    title: "The Global Emergency Conference",
    time: "Tues, 14th Oct, 2024; 5PM",
    attendance: "45",
  },
  {
    img: img3,
    interest: 456,
    title: "Unlock your earning potential: Embrace inter...",
    time: "Tues, 14th Oct, 2024; 5PM",
    attendance: "45",
  },
  {
    img: img4,
    interest: 456,
    title: "The Global Emergency Conference",
    time: "Tues, 14th Oct, 2024; 5PM",
    attendance: "45",
  },
];

const EventHome = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">Discover Events</h1>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-2 gap-4">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 border rounded-md shadow-md"
          >
            <img
              src={item.img}
              alt="event"
              className="w-full h-[250px] object-cover rounded-md"
            />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.interest} Interested</p>
            <p className="text-sm text-gray-600">{item.time}</p>
            <p className="text-sm text-gray-600">{item.attendance} are going</p>
            <button className="px-4 py-2 text-sm font-medium bg-blue-200 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100">
              Interested
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHome;
