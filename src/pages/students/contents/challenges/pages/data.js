// src/data/challenges.js
import img1 from "../../../../../assets/img1.jpg";
import img2 from "../../../../../assets/img2.jpg";

export const challenges = [
  {
    id: "to-do-app",
    title: "Build a To-Do App",
    category: "Coding",
    date: "2023-10-01",
    description:
      "Learn to build a functional To-Do app with React and Tailwind CSS.",
    img: img1, // Place images in public/assets
    author: "admin",
  },
  {
    id: "mobile-ui",
    title: "Create a Mobile UI",
    category: "Design",
    date: "2023-10-05",
    description: "Design a modern and user-friendly mobile UI using Figma.",
    img: img2,
    author: "admin",
  },
  {
    id: "sales-data",
    title: "Analyze Sales Data",
    category: "Data Science",
    date: "2023-10-10",
    description:
      "Use Python and pandas to analyze sales trends and generate insights.",
    img: img1,
    author: "admin",
  },
];
