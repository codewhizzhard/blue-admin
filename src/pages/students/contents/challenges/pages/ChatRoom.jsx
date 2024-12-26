import React, { useState, useRef, useEffect } from "react";
import { FiPaperclip, FiMic, FiSend, FiPlay } from "react-icons/fi";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Hello! How are you?" },
    { id: 2, sender: "admin", text: "I'm doing well, thank you!" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0); // To store the elapsed recording time

  const mediaRecorderRef = useRef(null);
  const audioUrlRef = useRef("");
  const intervalRef = useRef(null);

  // Handle sending a message (text or voice)
  const sendMessage = () => {
    if (isRecording) {
      // Stop recording when send is clicked
      stopRecording();
    }

    if (audioBlob) {
      // Send audio message
      const newMessageObject = {
        id: messages.length + 1,
        sender: "user",
        audio: audioBlob,
      };
      setMessages([...messages, newMessageObject]);
      setAudioBlob(null); // Reset audio blob after sending
    } else if (newMessage.trim() !== "") {
      // Send text message
      const newMessageObject = {
        id: messages.length + 1,
        sender: "user",
        text: newMessage.trim(),
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage(""); // Clear text input after sending
    }
  };

  // Start recording audio
  const startRecording = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.start();

          mediaRecorderRef.current.ondataavailable = (event) => {
            setAudioBlob(event.data);
          };

          mediaRecorderRef.current.onstop = () => {
            setIsRecording(false);
            clearInterval(intervalRef.current); // Stop the timer when recording stops
          };

          setIsRecording(true);
          setRecordingTime(0); // Reset the recording time
          intervalRef.current = setInterval(() => {
            setRecordingTime((prevTime) => prevTime + 1); // Increment recording time
          }, 1000); // Update every second
        })
        .catch((error) => {
          console.error("Error accessing the microphone", error);
        });
    }
  };

  // Stop recording audio
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  // Play audio message
  const playAudio = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    audioUrlRef.current = audioUrl;
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow p-4 text-center text-lg font-semibold">
        Chat Room
      </header>

      {/* Chat Messages */}
      <main className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            playAudio={playAudio}
          />
        ))}
      </main>

      {/* Input Area */}
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessage={sendMessage}
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        audioBlob={audioBlob}
        recordingTime={recordingTime} // Pass the recording time to ChatInput
      />
    </div>
  );
};

const MessageBubble = ({ message, playAudio }) => {
  const { sender, text, audio } = message;
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      style={{ marginBottom: "10px" }}
    >
      <div
        className={`max-w-xs p-3 text-sm rounded-lg shadow ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
        style={{
          maxWidth: "75%",
          wordBreak: "break-word",
          lineHeight: "1.4",
        }}
      >
        {text && <p>{text}</p>}
        {audio && (
          <button
            className="flex items-center space-x-2 text-sm text-blue-500"
            onClick={() => playAudio(audio)}
          >
            <FiPlay />
            <span>Play</span>
          </button>
        )}
      </div>
    </div>
  );
};

const ChatInput = ({
  newMessage,
  setNewMessage,
  sendMessage,
  isRecording,
  startRecording,
  stopRecording,
  audioBlob,
  recordingTime,
}) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <footer className="bg-white p-4">
      <div className="flex items-center bg-blue-50 rounded-full shadow-md px-4 py-2">
        {/* Attachment Icon */}
        <FiPaperclip className="text-gray-400 text-xl cursor-pointer hover:text-gray-600" />

        {/* Input Field */}
        <input
          type="text"
          aria-label="Type a message"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 bg-transparent px-4 text-sm outline-none placeholder-gray-500 text-gray-700"
        />

        {/* Microphone Icon */}
        <FiMic
          className={`text-gray-400 text-xl cursor-pointer hover:text-gray-600 ${
            isRecording ? "text-red-500" : ""
          }`}
          onClick={isRecording ? stopRecording : startRecording}
        />

        {/* Timer for recording */}
        {isRecording && (
          <span className="ml-2 text-gray-600 text-sm">
            {formatTime(recordingTime)}
          </span>
        )}

        {/* Unified Send Button */}
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
          aria-label="Send message"
        >
          <FiSend className="text-lg" />
        </button>
      </div>
    </footer>
  );
};

export default ChatRoom;

// import React, { useState, useRef, useEffect } from "react";
// import { FiPaperclip, FiMic, FiSend, FiPlay } from "react-icons/fi";
// import io from "socket.io-client";

// // Establish socket connection to the server
// const socket = io("http://localhost:5000");

// const ChatRoom = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [recordingTime, setRecordingTime] = useState(0); // To store the elapsed recording time

//   const mediaRecorderRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Handle receiving messages via socket
//   useEffect(() => {
//     socket.on("receiveMessage", (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, []);

//   // Handle sending a message (text or voice)
//   const sendMessage = () => {
//     if (isRecording) {
//       // Stop recording when send is clicked
//       stopRecording();
//     }

//     const message = audioBlob
//       ? { sender: "user", audio: audioBlob }
//       : { sender: "user", text: newMessage.trim() };

//     if (message.text || message.audio) {
//       // Emit message to server
//       socket.emit("sendMessage", message);

//       // Update local messages
//       setMessages((prevMessages) => [...prevMessages, message]);

//       // Reset input fields
//       setNewMessage("");
//       setAudioBlob(null);
//     }
//   };

//   // Start recording audio
//   const startRecording = () => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           mediaRecorderRef.current = new MediaRecorder(stream);
//           mediaRecorderRef.current.start();

//           mediaRecorderRef.current.ondataavailable = (event) => {
//             setAudioBlob(event.data);
//           };

//           mediaRecorderRef.current.onstop = () => {
//             setIsRecording(false);
//             clearInterval(intervalRef.current); // Stop the timer when recording stops
//           };

//           setIsRecording(true);
//           setRecordingTime(0); // Reset the recording time
//           intervalRef.current = setInterval(() => {
//             setRecordingTime((prevTime) => prevTime + 1); // Increment recording time
//           }, 1000); // Update every second
//         })
//         .catch((error) => {
//           console.error("Error accessing the microphone", error);
//         });
//     }
//   };

//   // Stop recording audio
//   const stopRecording = () => {
//     if (mediaRecorderRef.current) {
//       mediaRecorderRef.current.stop();
//     }
//   };

//   // Play audio message
//   const playAudio = (audioBlob) => {
//     const audioUrl = URL.createObjectURL(audioBlob);
//     const audio = new Audio(audioUrl);
//     audio.play();
//   };

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       {/* Header */}
//       <header className="bg-white shadow p-4 text-center text-lg font-semibold">
//         Chat Room
//       </header>

//       {/* Chat Messages */}
//       <main className="flex-1 p-4 overflow-y-auto space-y-4">
//         {messages.map((message, index) => (
//           <MessageBubble key={index} message={message} playAudio={playAudio} />
//         ))}
//       </main>

//       {/* Input Area */}
//       <ChatInput
//         newMessage={newMessage}
//         setNewMessage={setNewMessage}
//         sendMessage={sendMessage}
//         isRecording={isRecording}
//         startRecording={startRecording}
//         stopRecording={stopRecording}
//         audioBlob={audioBlob}
//         recordingTime={recordingTime} // Pass the recording time to ChatInput
//       />
//     </div>
//   );
// };

// const MessageBubble = ({ message, playAudio }) => {
//   const { sender, text, audio } = message;
//   const isUser = sender === "user";

//   return (
//     <div
//       className={`flex ${isUser ? "justify-end" : "justify-start"}`}
//       style={{ marginBottom: "10px" }}
//     >
//       <div
//         className={`max-w-xs p-3 text-sm rounded-lg shadow ${
//           isUser
//             ? "bg-blue-500 text-white rounded-br-none"
//             : "bg-gray-200 text-gray-800 rounded-bl-none"
//         }`}
//         style={{
//           maxWidth: "75%",
//           wordBreak: "break-word",
//           lineHeight: "1.4",
//         }}
//       >
//         {text && <p>{text}</p>}
//         {audio && (
//           <button
//             className="flex items-center space-x-2 text-sm text-blue-500"
//             onClick={() => playAudio(audio)}
//           >
//             <FiPlay />
//             <span>Play</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const ChatInput = ({
//   newMessage,
//   setNewMessage,
//   sendMessage,
//   isRecording,
//   startRecording,
//   stopRecording,
//   audioBlob,
//   recordingTime,
// }) => {
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(
//       remainingSeconds
//     ).padStart(2, "0")}`;
//   };

//   return (
//     <footer className="bg-white p-4">
//       <div className="flex items-center bg-blue-50 rounded-full shadow-md px-4 py-2">
//         {/* Attachment Icon */}
//         <FiPaperclip className="text-gray-400 text-xl cursor-pointer hover:text-gray-600" />

//         {/* Input Field */}
//         <input
//           type="text"
//           aria-label="Type a message"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="flex-1 bg-transparent px-4 text-sm outline-none placeholder-gray-500 text-gray-700"
//         />

//         {/* Microphone Icon */}
//         <FiMic
//           className={`text-gray-400 text-xl cursor-pointer hover:text-gray-600 ${
//             isRecording ? "text-red-500" : ""
//           }`}
//           onClick={isRecording ? stopRecording : startRecording}
//         />

//         {/* Timer for recording */}
//         {isRecording && (
//           <span className="ml-2 text-gray-600 text-sm">
//             {formatTime(recordingTime)}
//           </span>
//         )}

//         {/* Unified Send Button */}
//         <button
//           onClick={sendMessage}
//           className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
//           aria-label="Send message"
//         >
//           <FiSend className="text-lg" />
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default ChatRoom;
