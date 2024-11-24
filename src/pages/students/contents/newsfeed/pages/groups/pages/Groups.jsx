import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PostBox from "../../../../../../../utils/PostBox";
import Post from "../Post";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdPublic } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

// Mock Data
import User from "../../../../../../../assets/user.jfif";
import img1 from "../../../../../../../assets/img1.jpg";
import img2 from "../../../../../../../assets/img2.jpg";
import img3 from "../../../../../../../assets/img3.jpg";
import img4 from "../../../../../../../assets/img4.jpg";
import img5 from "../../../../../../../assets/img5.jpg";

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

const admins = [
  { name: "Edmond Kingsley", role: "Admin", location: "Ibadan, Nigeria" },
];

const members = Array(20).fill({
  name: "Alex Wilson",
  role: "Member",
  location: "Ibadan, Nigeria",
});

// Component: GroupHeader
const GroupHeader = ({ groupImage, name, membersCount }) => (
  <div className="bg-white shadow-md p-4 mb-4 flex flex-col gap-5">
    <img
      src={groupImage}
      alt="Group Banner"
      className="w-full h-[300px] rounded-md object-fill"
    />
    <div>
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-gray-500 flex items-center">
        <MdPublic className="mr-1" /> Public group | {membersCount} members
      </p>
    </div>
    <div className="flex gap-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        + Invite
      </button>
      <button className="bg-gray-300 px-4 py-2 rounded-md">
        Unfollow Group
      </button>
      <button className="bg-gray-300 px-4 py-2 rounded-md">Leave Group</button>
    </div>
  </div>
);

// Component: AboutSection
const AboutSection = () => (
  <div className="bg-white shadow-md p-4">
    <h2 className="text-lg font-bold mb-2">About this group</h2>
    <p className="text-gray-700 text-sm text-justify">
      Here, you have access to every detail and news about your great school or
      school to be. You can always ask questions. Answers would be provided as
      soon as they are gotten. Be sure to have correct and genuine information
      and help. The school is still the first and the best. Facts speak for it!
    </p>
    <div className="mt-4">
      <InfoItem
        icon={<MdPublic />}
        title="Public"
        description="Anyone can see who's in the group and what they post."
      />
      <InfoItem
        icon={<IoEyeSharp />}
        title="Visible"
        description="Anyone can find this group."
      />
      <InfoItem
        icon={<FaHistory />}
        title="History"
        description="Group created on August 14, 2011."
      />
    </div>
  </div>
);

// Component: InfoItem
const InfoItem = ({ icon, title, description }) => (
  <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
    <div className="text-lg">{icon}</div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

// Component: MembersSection
const MembersSection = () => (
  <div className="bg-white shadow-md p-4">
    <h2 className="text-lg font-bold mb-2">Members</h2>
    <p className="text-gray-700 mb-4">8.5K Members</p>
    <h3 className="font-bold mb-2">Admins & Moderators - {admins.length}</h3>
    {admins.map((admin, index) => (
      <MemberCard key={index} {...admin} />
    ))}
    <h3 className="font-bold mt-4 mb-2">Members - {members.length}</h3>
    <div className="h-[300px] overflow-y-auto">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
      See All
    </button>
  </div>
);

// Component: MemberCard
const MemberCard = ({ name, role, location }) => (
  <div className="flex items-center justify-between border-b py-2">
    <div className="flex items-center gap-4">
      <img
        src={User}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{role || location}</p>
      </div>
    </div>
    <button className="text-blue-500">Send a message</button>
  </div>
);

// Component: EventSection
const EventSection = () => {
  const [groupInfo, setGroupInfo] = useState({
    upcomingEvents: [
      {
        id: 1,
        title:
          "Unlock your Earning Potential: Embrace International Income Through Digital Skills",
        image: img5,
        date: "Sat, Oct 19",
      },
      {
        id: 2,
        title:
          "Unlock your Earning Potential: Embrace International Income Through Digital Skills",
        image: img3,
        date: "Sat, Oct 19",
      },
    ],
  });

  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setGroupInfo((prev) => ({
        ...prev,
        upcomingEvents: [
          ...prev.upcomingEvents,
          { id: prev.upcomingEvents.length + 1, ...newEvent },
        ],
      }));
      setNewEvent({ title: "", date: "" });
      setIsCreatingEvent(false);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="w-full bg-gray-100 h-screen overflow-hidden">
      {/* Upcoming Events Section */}
      <section className="flex-1 overflow-y-auto p-4">
        <div className="bg-white shadow-md p-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold mb-2">Upcoming events</h2>
            <button
              className="bg-blue-500 p-2 cursor-pointer rounded-md text-white"
              onClick={() => setIsCreatingEvent(true)}
            >
              Create Event
            </button>
          </div>
          {groupInfo.upcomingEvents.length > 0 ? (
            groupInfo.upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-100 p-2 rounded-md mb-2">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5">
                    <img
                      src={event.image}
                      alt="event_image"
                      className="w-[50px] h-[50px] rounded-md object-fill"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-medium">{event.title}</h3>
                      <p className="text-gray-500 text-xs">{event.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-800 w-full rounded-md p-2 bg-blue-200 cursor-pointer">
                    View
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-gray-500">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <p>No Upcoming Events.</p>
            </div>
          )}
        </div>

        {/* Create Event Modal */}
        {isCreatingEvent && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-96 rounded-md shadow-lg p-6">
              <h2 className="text-lg font-bold mb-4">Create a New Event</h2>
              <form onSubmit={handleCreateEvent}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                    placeholder="Enter event title"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Save Event
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCreatingEvent(false)}
                    className="bg-gray-300 px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

// Component: PostSection
const PostSection = () => (
  <div className="p-2">
    <PostBox />
    <div className="space-y-4">
      {postsData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  </div>
);

// Main Component: GroupPage
const GroupPage = () => {
  const location = useLocation();
  const { id, groupImage, name } = location.state || {};

  if (!name) {
    return (
      <div className="text-center text-gray-500">
        Group details not available.
      </div>
    );
  }

  return (
    <div className="p-4">
      <GroupHeader groupImage={groupImage} name={name} membersCount="8.5K" />
      <Tabs>
        <TabList>
          <Tab>Discussion</Tab>
          <Tab>About</Tab>
          <Tab>People</Tab>
          <Tab>Event</Tab>
        </TabList>
        <TabPanel>
          <PostSection />
        </TabPanel>
        <TabPanel>
          <AboutSection />
        </TabPanel>
        <TabPanel>
          <MembersSection />
        </TabPanel>
        <TabPanel>
          <EventSection />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default GroupPage;
