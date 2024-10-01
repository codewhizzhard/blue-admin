import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const ForgetPassword = () => {
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

export default ForgetPassword;
