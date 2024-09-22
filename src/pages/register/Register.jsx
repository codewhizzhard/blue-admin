import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Register = () => {
  return (
    <div>
      {/* Display Mobile only on small screens */}
      <div className="md:hidden">
        <Mobile />
      </div>

      {/* Display Desktop only on medium and larger screens */}
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  );
};

export default Register;
