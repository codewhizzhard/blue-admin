import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useAuth } from "../../router/AuthContext";

const Fa = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { completeForgetPassword } = useAuth();

  const isForgetPasswordPath = location.pathname === "/verification";

  const handleVerification = async () => {
    try {
      await completeForgetPassword();
      navigate("/reset-password");
    } catch (error) {
      console.error("Error during verification:", error);
    }
  };

  return (
    <div>
      <div className="md:hidden">
        {isForgetPasswordPath && (
          <Mobile handleVerification={handleVerification} />
        )}
        <Outlet />
      </div>

      <div className="hidden md:block">
        {isForgetPasswordPath && (
          <Desktop handleVerification={handleVerification} />
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Fa;
