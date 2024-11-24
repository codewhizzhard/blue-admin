import React, { useState } from "react";
import User from "../assets/user.jfif";
import { FaLink, FaRegPlayCircle } from "react-icons/fa";
import { MdInsertPhoto, MdOutlineArticle } from "react-icons/md";
import { useAuthContext } from "../hooks/useAuthContext";

const PostBox = () => {
  const { user } = useAuthContext();
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      console.log("Posted content:", postContent);
      setPostContent("");
    }
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <div className="flex items-center gap-2 w-full mb-3">
        <img
          src={
            `data:image/jpg;base64,${user.user.moreAboutUser?.profilePicture}` ||
            User
          }
          alt="Profile"
          className="w-12 h-10 rounded-full object-fill"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="bg-gray-200 p-2 rounded-md w-full"
          aria-label="Post content"
        />
        <button
          onClick={handlePostSubmit}
          className="bg-blue-700 rounded-md py-2 px-4 text-white"
          aria-label="Post button"
        >
          Post
        </button>
      </div>
      <div className="flex items-center gap-3 justify-end text-gray-600">
        {[
          {
            icon: MdOutlineArticle,
            color: "text-green-400",
            label: "Article",
          },
          { icon: FaRegPlayCircle, color: "text-blue-500", label: "Video" },
          { icon: FaLink, color: "text-yellow-500", label: "Link" },
          { icon: MdInsertPhoto, color: "text-red-500", label: "Photo" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <item.icon className={item.color} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostBox;
