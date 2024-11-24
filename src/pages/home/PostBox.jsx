import { LuMessageCircle } from "react-icons/lu";
import { IoMdHeart, IoMdHeartDislike } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import PostLoader from "../../utils/PostLoader";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import img from "../../assets/cover.png";
import { ToastContainer, toast } from "react-toastify";

dayjs.extend(relativeTime);

const PostBox = () => {
  const { user } = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   const localUser = JSON.parse(localStorage.getItem('user'));
  const token = user?.user?.token;
  const userId = user?.user?._id;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://back-end-slwn.onrender.com/api/v1/user/post/general/all-post"
      );
      setPosts(response.data.posts);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = useCallback(async (postId) => {
    try {
      const { data } = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/post/general/like-post",
        { postId },
        config
      );
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? data : post))
      );
    } catch (err) {
      toast.error(err.response?.data?.message || "Error liking post");
    }
  }, []);

  const handleDislike = useCallback(async (postId) => {
    try {
      const { data } = await axios.post(
        "https://back-end-slwn.onrender.com/api/v1/user/post/general/dislike-post",
        { postId },
        config
      );
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? data : post))
      );
    } catch (err) {
      toast.error(err.response?.data?.message || "Error disliking post");
    }
  }, []);

  if (loading) return <PostLoader />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      {posts.map((post) => (
        <PostItem
          key={post._id}
          post={post}
          userId={userId}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </>
  );
};

const PostItem = ({ post, userId, onLike, onDislike }) => {
  const profilePicture = post.poster.moreAboutUser?.profilePicture || img;

  return (
    <div className="p-5 flex flex-col gap-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={`data:image/jpg;base64,${profilePicture}`}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="font-medium text-sm">
              {post.poster.moreAboutUser?.userName}
            </h1>
            <span className="text-xs text-gray-500">
              {dayjs(post.datePosted).fromNow()}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700">{post.postBodyText}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => onLike(post._id)}>
            <IoMdHeart className="text-red-500" /> {post.postLikes.length}
          </button>
          <button onClick={() => onDislike(post._id)}>
            <IoMdHeartDislike /> {post.postDisLikes.length}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <LuMessageCircle /> {post.postComments.length}
        </div>
      </div>
    </div>
  );
};

export default PostBox;
