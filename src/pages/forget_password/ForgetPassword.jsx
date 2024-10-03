import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useAuth } from "../../router/AuthContext";

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { completeVerification } = useAuth();

  const isForgetPasswordPath = location.pathname === "/forget-password";

  const handleForgetPassword = async () => {
    try {
      await completeVerification();
      navigate("/verification");
    } catch (error) {
      console.error("Error during verification:", error);
    }
  };

  return (
    <div>
      <div className="md:hidden">
        {isForgetPasswordPath && (
          <Mobile handleForgetPassword={handleForgetPassword} />
        )}
        <Outlet />
      </div>

      <div className="hidden md:block">
        {isForgetPasswordPath && (
          <Desktop handleForgetPassword={handleForgetPassword} />
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default ForgetPassword;
