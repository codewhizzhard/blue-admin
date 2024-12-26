import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { path: ".", label: "Overview" }, // Default route uses "."
  { path: "my-groups", label: "My Group" },
  { path: "my-timetable", label: "My Timetable" },
  { path: "my-assignment", label: "My Assignment" },
  { path: "exam", label: "Exams" },
  { path: "library", label: "Library" },
];

const Navbar = () => {
  return (
    <div className="flex gap-1 w-full">
      <div className="bg-white rounded-md shadow-md w-full">
        {/* Tabs */}
        <div className="flex bg-white rounded-t-md border-b border-gray-200 gap-3 px-4 py-2">
          {tabs.map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              end={path === "."} // Ensure "overview" matches only exact parent route
              className={({ isActive }) =>
                `px-2 py-2 cursor-pointer ${
                  isActive
                    ? "font-bold border-b-2 border-blue-500"
                    : "text-black hover:text-blue-300"
                }`
              }
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className=" my-1 bg-white p-4 flex gap-4 items-center">
//       <NavLink to="/students/dashboard/school-work">Overview</NavLink>
//       <NavLink to="/students/dashboard/school-work/my-groups">My Group</NavLink>
//       <NavLink to="/students/dashboard/school-work/my-timetable">
//         My Timetable
//       </NavLink>
//       <NavLink to="/students/dashboard/school-work/my-assignment">
//         My Assignment
//       </NavLink>
//       <NavLink to="/students/dashboard/school-work/exam">Exam</NavLink>
//       <NavLink to="/students/dashboard/school-work/library">My Library</NavLink>
//     </div>
//   );
// };

// export default Navbar;

// a
