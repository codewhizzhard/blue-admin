import React, { useState } from "react";
import { FaUserCircle, FaPlus, FaPaperclip, FaSmile } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Dummy data
const data = {
  groups: [
    { id: "g1", name: "After School", preview: "Paul: See you at my house." },
    { id: "g2", name: "Vegan Friends", preview: "Oscar: New vegan recipes!" },
    {
      id: "g3",
      name: "Spring Party",
      preview: "Suzie: Excited for the party!",
    },
  ],
  chats: [
    { id: "c1", name: "Ethan Smith", preview: "Hey! How's it going?" },
    { id: "c2", name: "Ava Williams", preview: "Sent the report. Thoughts?" },
  ],
  messages: {
    g1: [
      {
        sender: "Paul",
        content: "See you at my house.",
        type: "text",
        timestamp: "Today, 3:00 PM",
      },
      {
        sender: "You",
        content: "Sure, I'll be there!",
        type: "text",
        timestamp: "Today, 3:10 PM",
      },
    ],
    g2: [
      {
        sender: "Oscar",
        content: "Check out these new vegan recipes!",
        type: "text",
        timestamp: "Yesterday, 5:00 PM",
      },
    ],
    g3: [
      {
        sender: "Suzie",
        content: "Excited for the spring party!",
        type: "text",
        timestamp: "Today, 1:30 PM",
      },
    ],
    c1: [
      {
        sender: "Ethan Smith",
        content: "Hey! How's it going?",
        type: "text",
        timestamp: "Today, 11:00 AM",
      },
      {
        sender: "You",
        content: "I'm good! How about you?",
        type: "text",
        timestamp: "Today, 11:10 AM",
      },
    ],
    c2: [
      {
        sender: "Ava Williams",
        content: "Sent the report. Thoughts?",
        type: "text",
        timestamp: "Today, 10:00 AM",
      },
      {
        sender: "You",
        content: "Looks great. Thanks!",
        type: "text",
        timestamp: "Today, 10:30 AM",
      },
    ],
  },
};

const Chat = () => {
  const [selectedId, setSelectedId] = useState(null); // ID of selected chat/group
  const [selectedType, setSelectedType] = useState(null); // Type: "group" or "chat"

  const selectItem = (id, type) => {
    setSelectedId(id);
    setSelectedType(type);
  };

  const messages = selectedId ? data.messages[selectedId] || [] : [];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 border-r border-gray-300 overflow-y-auto">
        <header className="p-4 border-b border-gray-300">
          <h1 className="text-xl font-bold">Messenger</h1>
          <input
            type="text"
            placeholder="Search..."
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </header>

        {/* Groups Section */}
        <section className="mt-4">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-semibold">Groups</h2>
            <button className="text-gray-600 hover:text-gray-800">
              <AiOutlineMinus />
            </button>
          </div>
          <ul className="mt-2 space-y-2">
            {data.groups.map((group) => (
              <li
                key={group.id}
                className={`flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  selectedId === group.id ? "bg-blue-100" : ""
                }`}
                onClick={() => selectItem(group.id, "group")}
              >
                <MdGroups className="text-blue-500 mr-3" />
                <div>
                  <p className="font-medium">{group.name}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {group.preview}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Chat Section */}
        <section className="mt-6">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-semibold">Chats</h2>
            <button className="text-gray-600 hover:text-gray-800">
              <AiOutlineMinus />
            </button>
          </div>
          <ul className="mt-2 space-y-2">
            {data.chats.map((chat) => (
              <li
                key={chat.id}
                className={`flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer ${
                  selectedId === chat.id ? "bg-blue-100" : ""
                }`}
                onClick={() => selectItem(chat.id, "chat")}
              >
                <FaUserCircle className="text-gray-400 text-2xl mr-3" />
                <div>
                  <p className="font-medium">{chat.name}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.preview}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
          {selectedId ? (
            <>
              <div className="flex items-center">
                <FaUserCircle className="text-gray-400 text-3xl mr-3" />
                <div>
                  <h2 className="text-lg font-semibold">
                    {
                      data.groups
                        .concat(data.chats)
                        .find((item) => item.id === selectedId)?.name
                    }
                  </h2>
                  <p className="text-sm text-gray-500">Active now</p>
                </div>
              </div>
              <div className="flex space-x-4 text-gray-600">
                <FaPaperclip className="cursor-pointer hover:text-gray-800" />
                <FaSmile className="cursor-pointer hover:text-gray-800" />
              </div>
            </>
          ) : (
            <p className="text-gray-500">Select a chat or group</p>
          )}
        </header>

        {/* Chat Messages */}
        <div className="p-4 overflow-y-auto">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-md p-3 rounded-lg ${
                    message.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 h-[500px] flex justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-300">ME</div>
                  </div>
                  <h2 className="text-lg font-medium text-gray-700">
                    Messenger
                  </h2>
                  <p className="text-sm text-gray-500">
                    Your personal messages are end-to-end encrypted.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        {selectedId && (
          <footer className="p-4 border-t border-gray-300 bg-white flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Send
            </button>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Chat;
