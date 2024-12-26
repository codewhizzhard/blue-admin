import React, { useState } from "react";
import { FaPlusCircle, FaUsers, FaCamera } from "react-icons/fa";
import img1 from "../../../../../assets/img13.jpg";
import img2 from "../../../../../assets/img14.jpg";

// Sample data for study groups
const groupsData = [
  {
    groupName: "100 Level Semester Exam Tutorial Group",
    mainImage: img1,
    subGroups: [
      {
        name: "MTH 101 Study Group",
        phone: "+234 805 242 4093",
        description: "",
        subImage: img2,
      },
      {
        name: "GNS 111 Study Group",
        phone: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        subImage: img1,
      },
      {
        name: "CTE 111 Study Group",
        phone: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        subImage: img2,
      },
    ],
  },
  {
    groupName: "Engineer's in Embryo Team",
    mainImage: img2,
    subGroups: [
      {
        name: "MTH 101 Study Group",
        phone: "+234 805 242 4093",
        description: "",
        subImage: img1,
      },
    ],
  },
];

const Groups = ({ groupName, mainImage, subGroups }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-6">
    <div className="flex gap-4 items-center mb-4">
      <img
        src={mainImage}
        alt={`${groupName} Main`}
        className="rounded-md h-16 w-16 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800">{groupName}</h2>
    </div>

    {subGroups.map((subGroup, index) => (
      <div key={index} className="border-l-4 border-blue-500 pl-3 mb-4">
        <div className="flex gap-4 items-center">
          {subGroup.subImage && (
            <img
              src={subGroup.subImage}
              alt={`${subGroup.name} Image`}
              className="rounded-md h-12 w-12 object-cover"
            />
          )}
          <div>
            <h3 className="text-lg font-medium text-gray-700">
              {subGroup.name}
            </h3>
            {subGroup.phone && (
              <p className="text-gray-600">{subGroup.phone}</p>
            )}
            {subGroup.description && (
              <p className="text-gray-500 text-sm">{subGroup.description}</p>
            )}
          </div>
        </div>
      </div>
    ))}
    <button
      onClick={() => alert("View All functionality not implemented yet!")}
      className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
    >
      View all
    </button>
  </div>
);

const Group = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    resetForm();
  };

  const resetForm = () => {
    setGroupName("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!groupName || !description || !image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    alert("Study group created successfully!");
    toggleModal();
  };

  return (
    <div className="min-h-screen p-4">
      {/* Create new study group */}
      <div
        className="flex gap-4 bg-white rounded-md p-4 mb-6 items-center shadow-sm cursor-pointer"
        onClick={toggleModal}
      >
        <div className="relative">
          <div className="rounded-full h-10 w-10 flex justify-center items-center bg-gray-200">
            <FaUsers className="text-gray-500 text-xl" />
          </div>
          <FaPlusCircle className="text-blue-700 absolute -bottom-1 right-0" />
        </div>
        <p className="font-bold text-xl">Create new study group</p>
      </div>

      {/* Display Groups */}
      {groupsData.map((group, index) => (
        <Groups
          key={index}
          groupName={group.groupName}
          mainImage={group.mainImage}
          subGroups={group.subGroups}
        />
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/2 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create New Study Group</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Add Group Icon
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200"
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                    >
                      <FaCamera className="text-gray-500 text-xl" />
                    </button>
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="rounded-md w-16 h-16 object-cover"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <label className="block text-gray-700 font-medium mb-2">
                  Provide A Group Name
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter group name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter description"
                ></textarea>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 bg-gray-300 rounded-md text-gray-700 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
