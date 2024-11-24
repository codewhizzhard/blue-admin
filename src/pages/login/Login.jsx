import React, { useState } from "react";
import MobileHero from "../../components/MobileHero";
import HeroSection from "../../components/HeroSection";
import LoginDetails from "./LoginDetails";

const Login = () => {
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
        <LoginDetails />
      </div>
    </div>
  );
};

export default Login;
