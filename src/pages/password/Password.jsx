import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Password = () => {
  return (
    <div>
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  );
};

export default Password;
