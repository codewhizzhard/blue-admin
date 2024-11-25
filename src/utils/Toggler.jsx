import React, { useState } from "react";
import "./Toggler.css";

const Toggler = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log(`Toggle is now ${!isOn ? "ON" : "OFF"}`);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default Toggler;
