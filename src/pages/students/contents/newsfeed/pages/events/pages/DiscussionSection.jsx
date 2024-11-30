import React from "react";

// Mock Data
import User from "../../../../../../../assets/user.jfif";
import img1 from "../../../../../../../assets/img1.jpg";
import img2 from "../../../../../../../assets/img2.jpg";
import img3 from "../../../../../../../assets/img3.jpg";
import img4 from "../../../../../../../assets/img4.jpg";
import img5 from "../../../../../../../assets/img5.jpg";

import Post from "../Post";

const postsData = [
  {
    id: 1,
    user: User,
    name: "Esther Israel",
    username: "queenesther",
    time: "30 min ago",
    content:
      "Stay curious and keep learning. Gain insights, stay informed, and connect with others to make your journey smoother. Success comes from knowledge and collaboration! #StayInformed #KeepLearning #ConnectAndGrow #SuccessJourney.",
    images: [img1, img2, img3],
    stats: {
      viewers: "17k",
      comments: 61,
      reposts: 12,
      likes: "6.2k",
      dislikes: "6.2k",
      shares: "6.2k",
      bookmarks: "6.2k",
    },
  },
  {
    id: 2,
    user: User,
    name: "Muhammed Salam",
    username: "muhammedsalam",
    time: "1 hour ago",
    content:
      "Thrilled to collaborate with senior designers at Mahub! Exciting projects and learning experiences ahead. Stay tuned!",
    images: [img4, img5],
    stats: {
      viewers: "12k",
      comments: 45,
      reposts: 8,
      likes: "4.5k",
      dislikes: "3.2k",
      shares: "2.3k",
      bookmarks: "5.1k",
    },
  },
  {
    id: 3,
    user: User,
    name: "Esther Israel",
    username: "estherisrael",
    time: "30 min ago",
    content:
      "Stay curious and keep learning. Gain insights, stay informed, and connect with others to make your journey smoother. Success comes from knowledge and collaboration! #StayInformed #KeepLearning #ConnectAndGrow #SuccessJourney.",
    images: [img1, img2, img3, img4],
    stats: {
      viewers: "17k",
      comments: 61,
      reposts: 12,
      likes: "6.2k",
      dislikes: "6.2k",
      shares: "6.2k",
      bookmarks: "6.2k",
    },
  },
];

const DiscussionSection = () => {
  return (
    <div>
      {/* News Feed */}
      <div className="space-y-4">
        {postsData.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default DiscussionSection;
