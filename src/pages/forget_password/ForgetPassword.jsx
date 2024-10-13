import React from "react";
import HeroSection from "../../components/HeroSection";
import MobileHero from "../../components/MobileHero";
import Details from "./Details";

const ForgetPassword = () => {
  // const handleForgetPassword = async () => {
  //   try {
  //     await completeVerification();
  //     navigate("/verification");
  //   } catch (error) {
  //     console.error("Error during verification:", error);
  //   }
  // };

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

export default ForgetPassword;
