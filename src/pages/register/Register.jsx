import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useAuth } from "../../router/AuthContext";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { completeRegistration } = useAuth();

  const isRegisterPath = location.pathname === "/register";

  const handleRegistration = () => {
    completeRegistration();
    navigate("/register/password");
  };

  return (
    <div>
      <div className="md:hidden">
        {isRegisterPath && <Mobile handleRegistration={handleRegistration} />}{" "}
        <Outlet />
      </div>

      <div className="hidden md:block">
        {isRegisterPath && <Desktop handleRegistration={handleRegistration} />}{" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Register;
