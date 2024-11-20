import React, { useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { BiRepost } from "react-icons/bi";
import { FaBookmark, FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdHeartDislike } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";

const Post = ({ user, name, username, time, content, images, stats }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track the clicked image for the modal

  const handleSeeMoreClick = () => {
    setShowAllImages(!showAllImages);
  };

  const openImageModal = (image) => {
    setSelectedImage(image); // Set the clicked image
  };

  const closeImageModal = () => {
    setSelectedImage(null); // Clear the selected image to close modal
  };

  // Function to style hashtags in blue
  const styleHashtags = (text) => {
    return text.split(" ").map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span key={index} className="text-blue-500">
            {word}
          </span>
        );
      }
      return ` ${word} `;
    });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Post Header */}
      <div className="flex justify-between">
        <div className="flex gap-2 items-center mb-2">
          <div className="flex items-end">
            <img
              src={user}
              alt="User"
              className="rounded-full w-[50px] h-[50px] object-cover"
            />
            <span className="-ml-2 w-2 h-2 rounded-full bg-green-500"></span>
          </div>

          <div>
            <div className="flex items-center">
              <h2 className="font-bold">{name}</h2>
              <LuDot className="text-2xl" />
              <button className="cursor-pointer">Connected</button>
            </div>

            <h4>{username}</h4>
            <p className="text-sm text-gray-500 flex items-center">
              <CiClock2 /> {time}
            </p>
          </div>
        </div>
        <HiDotsVertical className="text-2xl cursor-pointer" />
      </div>
      {/* Post Content */}
      <p className="mb-2">{styleHashtags(content)}</p>{" "}
      {/* Applying hashtag styling here */}
      {/* Post Images */}
      {images && images.length > 0 && (
        <div className={`grid gap-2 ${images.length > 1 ? "grid-cols-2" : ""}`}>
          {showAllImages
            ? images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Post Image ${index + 1}`}
                  className="rounded-md mb-2 h-[200px] w-full object-cover cursor-pointer"
                  onClick={() => openImageModal(image)} // Open modal on click
                />
              ))
            : images.slice(0, 2).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Post Image ${index + 1}`}
                  className="rounded-md mb-2 h-[200px] w-full object-cover cursor-pointer"
                  onClick={() => openImageModal(image)} // Open modal on click
                />
              ))}

          {/* See More Button */}
          {!showAllImages && images.length > 2 && (
            <div className="relative">
              <img
                src={images[2]}
                alt="See More"
                className="rounded-md mb-2 h-[200px] w-full object-cover cursor-pointer"
                onClick={() => openImageModal(images[2])} // Open modal for the third image
              />
              <button
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-lg"
                onClick={handleSeeMoreClick}
              >
                +{images.length - 2} See More
              </button>
            </div>
          )}
        </div>
      )}
      {/* Collapse Button */}
      {showAllImages && images.length > 2 && (
        <button className="text-blue-500 mt-2" onClick={handleSeeMoreClick}>
          Show Less
        </button>
      )}
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full Image"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-4 py-2 rounded-full"
              onClick={closeImageModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Post Footer */}
      <PostFooter stats={stats} />
    </div>
  );
};

const PostFooter = ({ stats }) => {
  return (
    <div className="flex justify-between mt-2">
      <span className="text-sm text-gray-500 cursor-pointer">
        {stats.viewers} viewers
      </span>
      <div className="flex gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1 cursor-pointer">
          <FaRegComment /> {stats.comments}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <BiRepost className="text-lg" /> {stats.likes}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <FcLike /> {stats.likes}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <IoMdHeartDislike /> {stats.dislikes}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <RiShare2Line className="text-lg" /> {stats.shares}
        </span>
        <span className="flex items-center gap-1 cursor-pointer">
          <FaBookmark /> {stats.bookmarks}
        </span>
      </div>
    </div>
  );
};

<div className="flex justify-between">
  <span className="text-sm text-gray-500">17k viewers</span>
  <div className="flex gap-4 text-sm text-gray-500">
    <span className="flex items-center gap-1 cursor-pointer">
      <BiRepost /> 12
    </span>
    <span className="flex items-center gap-1 cursor-pointer">
      <FcLike /> 6.2k
    </span>
    <span className="flex items-center gap-1 cursor-pointer">
      <IoMdHeartDislike /> 6.2k
    </span>
    <span className="flex items-center gap-1 cursor-pointer">
      <RiShare2Line /> 6.2k
    </span>
    <span className="flex items-center gap-1 cursor-pointer">
      <FaBookmark /> 6.2k
    </span>
  </div>
</div>;

export default Post;
