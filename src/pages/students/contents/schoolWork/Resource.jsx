import React from "react";
import { MdGroups } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { Link } from "react-router-dom";

const Resource = () => {
  return (
    <div className="grid grid-cols-2 bg-white my-1">
      <div className="p-4 rounded-md">
        <MdGroups className="text-blue-500 text-xl" />
        <h3 className="font-bold text-xl my-1">Create Study Group</h3>
        <p className="text-sm text-gray-400 my-2">
          Start Your Study Group! Collaborate And Learn With Peers.
        </p>
        <button className="text-blue-500 cursor-pointer bg-white p-1">
          <Link to="study-group">Join Now</Link>
        </button>
      </div>
      <div className="p-4 rounded-md">
        <GrResources className="text-blue-500 text-xl" />
        <h3 className="font-bold text-xl my-1">Add Materia Box</h3>
        <p className="text-sm text-gray-400 my-2">
          Build Your Resource Library for Group Studies And Projects.
        </p>
        <button className="text-blue-500 cursor-pointer bg-white p-1">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Resource;
