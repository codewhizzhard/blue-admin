import React, { useState } from "react";

const AddClassOrExam = ({ isOpen, onClose, onAddClass }) => {
  const initialFormState = {
    title: "",
    category: "Regular Classes",
    date: new Date().toISOString().slice(0, 10), // Current date
    time: new Date().toISOString().slice(11, 16), // Current time
    end: new Date().toISOString().slice(0, 16),
    desc: "",
    instructor: "",
    location: "",
  };

  const [newClass, setNewClass] = useState(initialFormState);
  const [eventType, setEventType] = useState("Class");
  const [duration, setDuration] = useState("2 hour");
  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClass((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};
    if (!newClass.title) errors.title = "Title is required";
    if (!newClass.date) errors.date = "Date is required";
    if (!newClass.time) errors.time = "Time is required";
    if (!newClass.location) errors.location = "Location/Platform is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    // Combine date and time into a single start value
    const start = new Date(`${newClass.date}T${newClass.time}`);
  
    // Determine background color based on event type
    let backgroundColor = "";
    switch (eventType) {
      case "Class":
        backgroundColor = "bg-blue-500"; // Blue for classes
        break;
      case "Exam":
        backgroundColor = "bg-red-500"; // Red for exams
        break;
      case "Study Session":
        backgroundColor = "bg-green-500"; // Green for study sessions
        break;
      case "Assignment Deadline":
        backgroundColor = "bg-yellow-500"; // Yellow for assignment deadlines
        break;
      default:
        backgroundColor = "bg-gray-500"; // Default background
    }
  
    // Submit form data (call the parent function)
    onAddClass({
      ...newClass,
      start,
      duration,
      backgroundColor, // Add backgroundColor property
    });
  
    // Reset form
    setNewClass(initialFormState); // Reset the form state properly
  
    // Close the modal
    onClose();
  };
  
  

  return isOpen ? (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full md:w-3/4 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Add a New Event</h2>

          {/* Event Type Selection */}
          <div className="flex space-x-4 mb-6">
            {["Class", "Exam", "Study Session", "Assignment Deadline"].map((type) => (
              <button
                key={type}
                className={`px-6 py-2 border rounded ${
                  eventType === type ? "bg-blue-600 text-white" : "bg-white text-blue-600"
                }`}
                onClick={() => setEventType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block mb-2 font-medium">Course/Subject Name:</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a subject name"
                  value={newClass.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
              </div>

              {/* Instructor/Examiner */}
              {eventType !== "Study Session" && eventType !== "Assignment Deadline" && (
                <div>
                  <label className="block mb-2 font-medium">
                    {eventType === "Class" ? "Instructor" : "Examiner"}
                  </label>
                  <input
                    type="text"
                    name="instructor"
                    placeholder={`Enter ${eventType === "Class" ? "instructor" : "examiner"} name`}
                    value={newClass.instructor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={newClass.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                {formErrors.date && <p className="text-red-500 text-sm">{formErrors.date}</p>}
              </div>
              <div>
                <label className="block mb-2 font-medium">Time:</label>
                <input
                  type="time"
                  name="time"
                  value={newClass.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                {formErrors.time && <p className="text-red-500 text-sm">{formErrors.time}</p>}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-2 font-medium">Duration:</label>
              <div className="flex space-x-4">
                {["30 min", "1 hour", "2 hour", "3 hour"].map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`px-4 py-2 border rounded ${
                      duration === time ? "bg-blue-600 text-white" : "bg-white text-blue-600"
                    }`}
                    onClick={() => setDuration(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Location/Platform */}
            <div>
              <label className="block mb-2 font-medium">Location/Platform:</label>
              <input
                type="text"
                name="location"
                placeholder="Enter location or platform details"
                value={newClass.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              {formErrors.location && <p className="text-red-500 text-sm">{formErrors.location}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save/Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : null;
};

export default AddClassOrExam;
