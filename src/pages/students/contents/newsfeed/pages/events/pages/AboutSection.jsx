import React from "react";
import { FaUsers } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-base font-bold my-5">Details</h2>
        <p className="text-justify mb-3">
          Are you tired of the traditional ways of making money and ready to
          take control of your financial future? Then Digital Skills and
          International Income are the way to go with just a few skills.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <FaUsers />
            <p className="text-sm">4 People Responded</p>
          </div>
          <div className="flex gap-4">
            <FaUsers />
            <p className="text-sm">Public</p>
          </div>
          <div className="flex gap-4">
            <FaUsers />
            <p className="text-sm">Event by Mr. Pee</p>
          </div>
          <div className="flex gap-4">
            <FaUsers />
            <p className="text-sm">Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
