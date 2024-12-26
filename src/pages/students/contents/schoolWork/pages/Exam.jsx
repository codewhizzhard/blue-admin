import React, { useState, useMemo } from 'react';

const exams = [
  { title: "Math 101 Final Exam", date: "12/12/2023", time: "10:00 AM" },
  { title: "History 201 Midterm", date: "12/14/2023", time: "1:00 PM" },
  { title: "Physics 301 Lab Exam", date: "12/16/2023", time: "9:00 AM" },
  { title: "Chemistry 101 Final Exam", date: "12/18/2023", time: "11:00 AM" },
  { title: "English 101 Essay Exam", date: "12/20/2023", time: "2:00 PM" },
  { title: "Biology 201 Practical Exam", date: "12/22/2023", time: "8:00 AM" },
];

const ITEMS_PER_PAGE = 5;

const Exam = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(exams.length / ITEMS_PER_PAGE), []);

  const currentExams = useMemo(
    () => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      return exams.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    },
    [currentPage]
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upcoming Exams</h1>
      <div className="space-y-4">
        {currentExams.map((exam, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md flex justify-between items-center bg-white"
          >
            <div>
              <h2 className="text-lg font-semibold">{exam.title}</h2>
              <p className="text-sm text-gray-600">
                Date: {exam.date}, Time: {exam.time}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                Download Materials
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 border rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Exam;
