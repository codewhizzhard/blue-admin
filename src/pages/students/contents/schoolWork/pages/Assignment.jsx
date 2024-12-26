import React, { useState, useMemo } from "react";

const assignments = [
  { id: 1, title: "Science Project", dueDate: "2023-11-10", status: "Overdue", critical: true },
  { id: 2, title: "Math Assignment 1", dueDate: "2023-11-01", status: "Pending", critical: false },
  { id: 3, title: "History Assignment 2", dueDate: "2023-11-05", status: "Submitted", critical: false },
  { id: 4, title: "Math Assignment 2", dueDate: "2023-11-01", status: "Pending", critical: false },
  { id: 5, title: "Science Project", dueDate: "2023-11-10", status: "Overdue", critical: true },
  { id: 6, title: "Math Assignment 3", dueDate: "2023-11-01", status: "Pending", critical: false },
  { id: 7, title: "History Assignment 3", dueDate: "2023-11-05", status: "Submitted", critical: false },
  { id: 8, title: "History Assignment 1", dueDate: "2023-11-01", status: "Pending", critical: false },
];

const itemsPerPage = 5;

const AssignmentList = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Apply filters
  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const matchesStatus = statusFilter ? assignment.status === statusFilter : true;
      const matchesDate = dateFilter ? assignment.dueDate === dateFilter : true;
      return matchesStatus && matchesDate;
    });
  }, [statusFilter, dateFilter]);

  // Paginate filtered data
  const totalPages = Math.ceil(filteredAssignments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAssignments = filteredAssignments.slice(startIndex, startIndex + itemsPerPage);

  // Handle page changes
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upcoming Assignments</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Filter by Status</label>
          <select
            className="border rounded-md p-2 w-full mt-1 outline-none"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Overdue">Overdue</option>
            <option value="Pending">Pending</option>
            <option value="Submitted">Submitted</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Filter by Due Date</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full mt-1 outline-none"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Assignment List */}
      <div className="space-y-4">
        {currentAssignments.length > 0 ? (
          currentAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`border rounded-lg p-4 ${
                assignment.critical ? "border-red-500 bg-red-50" : "border-gray-200"
              }`}
            >
              <h2 className="text-lg font-semibold">{assignment.title}</h2>
              <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
              <p
                className={`text-sm ${
                  assignment.status === "Overdue"
                    ? "text-red-600"
                    : assignment.status === "Pending"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Status: {assignment.status}
              </p>
              {assignment.critical && (
                <span className="text-red-600 font-bold text-sm ml-2">Critical</span>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No assignments match the selected filters.</p>
        )}
      </div>

      {/* Numbered Pagination Controls */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
