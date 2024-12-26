import React, { useState, useMemo } from "react";
import img from "../../../../../assets/img1.jpg";
import AddResources from "./AddResources"; // Import the AddResources component

const Library = () => {
  const materials = [
    { id: 1, type: "Document", img: img, title: "Physics 101", desc: "Introduction to physics" },
    { id: 2, type: "Video", img: img, title: "Physics 102", desc: "Introduction to physics" },
    { id: 3, type: "Presentation", img: img, title: "Physics 103", desc: "Introduction to physics" },
    { id: 4, type: "PDF", img: img, title: "Physics 104", desc: "Introduction to physics" },
    { id: 5, type: "Audio", img: img, title: "Physics 105", desc: "Introduction to physics" },
    { id: 6, type: "Audio", img: img, title: "Physics 106", desc: "Introduction to physics" },
    { id: 7, type: "Audio", img: img, title: "Physics 107", desc: "Introduction to physics" },
    { id: 8, type: "Document", img: img, title: "Physics 108", desc: "Advanced physics concepts" },
    { id: 9, type: "Video", img: img, title: "Physics 109", desc: "Advanced physics concepts" },
    { id: 10, type: "Presentation", img: img, title: "Physics 110", desc: "Advanced physics concepts" },
    { id: 11, type: "PDF", img: img, title: "Physics 111", desc: "Advanced physics concepts" },
    { id: 12, type: "Audio", img: img, title: "Physics 112", desc: "Advanced physics concepts" }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Total number of pages
  const totalPages = Math.ceil(materials.length / itemsPerPage);

  // Using useMemo to calculate the current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return materials.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  // Handle modal opening and closing
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle form submission inside the modal
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic for importing a resource (e.g., adding it to the materials list)
    console.log("Resource Imported!");
    closeModal(); // Close modal after submission
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next/previous page change
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Educational Materials</h1>
          <div className="flex justify-end mb-4">
            <button
              onClick={openModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Import Resources
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {currentItems.map((material) => (
            <div key={material.id} className="bg-white shadow-md rounded-lg p-4 flex items-center">
              {material.img && (
                <img
                  src={material.img}
                  alt={material.title}
                  className="w-16 h-16 rounded-md mr-4"
                />
              )}
              <div className="flex-1">
                <h2 className="text-lg font-medium text-gray-800">{material.title}</h2>
                <p className="text-gray-600">{material.desc}</p>
                <p className="text-gray-500 text-sm">{material.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center items-center">
          <button
            onClick={goToPreviousPage}
            className={`bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {/* Dynamic Page Buttons */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 ${currentPage === index + 1 ? "bg-blue-600" : ""}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2 hover:bg-gray-300 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Modal for importing resources */}
      <AddResources isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Library;
