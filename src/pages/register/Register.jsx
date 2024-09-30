import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Register = () => {
  const location = useLocation();

  const isRegisterPath = location.pathname === "/register";

  return (
    <div>
      <div className="md:hidden">
        {isRegisterPath && <Mobile />} <Outlet />
      </div>

      <div className="hidden md:block">
        {isRegisterPath && <Desktop />} <Outlet />
      </div>
    </div>
  );
};

export default Register;
