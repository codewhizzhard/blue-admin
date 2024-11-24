import React from "react";
import HeroSection from "../../components/HeroSection";
import Details from "./Details";
import MobileHero from "../../components/MobileHero";

const Register = () => {
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
        <Details />
      </div>
    </div>
  );
};

export default Register;
