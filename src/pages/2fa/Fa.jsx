import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../router/AuthContext";
import MobileHero from "../../components/MobileHero";
import HeroSection from "../../components/HeroSection";
import Details from "./Details";

const Fa = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { completeForgetPassword } = useAuth();

  const handleVerification = async () => {
    try {
      await completeForgetPassword();
      navigate("/reset-password");
    } catch (error) {
      console.error("Error during verification:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-4 md:m-4">
      <div className="md:flex-1">
        <div className="md:hidden">
          <MobileHero />
        </div>
        <div className="hidden md:block">
          <HeroSection />
        </div>
      </div>
      <div className="md:flex-1">
        <Details handleVerification={handleVerification} />
      </div>
    </div>
  );
};

export default Fa;
