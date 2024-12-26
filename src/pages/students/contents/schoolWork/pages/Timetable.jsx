// Timetable.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddClassOrExam from "./AddClassOrExam";  // Import the modal component

const localizer = momentLocalizer(moment);

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
      <label className="mr-3 font-medium">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500"
      >
        <option value="All">All</option>
        <option value="Regular Classes">Regular Classes</option>
        <option value="Exams">Exams</option>
        <option value="Study Sessions">Study Sessions</option>
        <option value="Assignment Deadlines">Assignment Deadlines</option>
      </select>
    </div>
  );
};

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 w-full max-w-xs"
      />
    </div>
  );
};

const EventLegend = () => {
  const categories = [
    { name: "Regular Classes", color: "bg-blue-500" },
    { name: "Exams", color: "bg-green-500" },
    { name: "Study Sessions", color: "bg-orange-500" },
    { name: "Assignment Deadlines", color: "bg-purple-500" },
  ];

  return (
    <div className="flex gap-4 mb-5">
      {categories.map((category) => (
        <div key={category.name} className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${category.color}`}></span>
          <p className="text-sm">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

const Timetable = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCategory: "All",
  });

  const [events, setEvents] = useState([
    {
      title: "Biology Exam",
      start: new Date(2024, 11, 17, 9, 0),
      end: new Date(2024, 11, 17, 12, 0),
      desc: "Online Via Zoom",
      category: "Exams",
      color: "#48bb78",
    },
    {
      title: "Calculus I Class - Prof. John Smith",
      start: new Date(2024, 11, 19, 8, 0),
      end: new Date(2024, 11, 19, 9, 0),
      category: "Regular Classes",
      color: "#3b82f6",
    },
    {
      title: "Chemistry Revision - Library Room 3",
      start: new Date(2024, 11, 17, 12, 0),
      end: new Date(2024, 11, 17, 13, 0),
      category: "Study Sessions",
      color: "#f97316",
    },
    {
      title: "Statistics Project Submission",
      start: new Date(2024, 11, 18, 14, 0),
      end: new Date(2024, 11, 18, 15, 0),
      category: "Assignment Deadlines",
      color: "#8b5cf6",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    const matchesSearchQuery =
      filters.searchQuery === "" ||
      event.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      event.desc?.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesCategory =
      filters.selectedCategory === "All" ||
      event.category === filters.selectedCategory;

    return matchesSearchQuery && matchesCategory;
  });

  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color || "#3174ad", // Event background color
        color: "white", // Text color
        borderRadius: "0.375rem", // Tailwind rounded-lg
        border: "none",
        display: "flex",
        flexDirection: "column", // Allow content to stack vertically
        justifyContent: "center", // Align content horizontally
        alignItems: "flex-start", // Align content to the start horizontally
        padding: "10px", // Some padding for better spacing
        minHeight: "auto", // Allow height to grow with content
        height: "auto", // Remove fixed height, let it adjust dynamically
        wordWrap: "break-word", // Ensure long text wraps inside the event box
      },
    };
  };
  

  const handleAddClass = (newClass) => {
    setEvents((prevEvents) => [...prevEvents, newClass]);
  };

  return (
    <div className="h-[80vh] mx-4 my-8">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-semibold mb-4">Academic Timetable</h2>

        <div className="flex gap-4">
          <CategoryFilter
            selectedCategory={filters.selectedCategory}
            onCategoryChange={(value) =>
              setFilters((prev) => ({ ...prev, selectedCategory: value }))
            }
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Class
          </button>
        </div>
      </div>

      <SearchBar
        searchQuery={filters.searchQuery}
        onSearchChange={(value) =>
          setFilters((prev) => ({ ...prev, searchQuery: value }))
        }
      />

      <EventLegend />

      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["week", "day"]}
        step={60}
        timeslots={1}
        eventPropGetter={eventStyleGetter}
        className="shadow-lg rounded-lg border border-gray-200"
        style={{ height: "100%" }}
      />

      <AddClassOrExam
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddClass={handleAddClass}
      />
    </div>
  );
};

export default Timetable;
