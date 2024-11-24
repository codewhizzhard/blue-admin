import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../Styles.css";

const MobileHeroSection = () => (
  <div className="hero flex flex-col items-center pt-[50px] pb-12 px-[34px] rounded-2xl h-[324px] m-2">
    <Link to="/" className="">
      <img src={logo} alt="logo" className="w-[119px] h-[43px]" />
    </Link>

    <div className="mt-[10px]">
      <p className="my-3 text-white font-extrabold text-[11px] leading-[15.95px]">
        wv: xel "Empowering Students and Others"
      </p>
      <h2 className="text-[15px] leading-[16.5px] font-semibold font-[sora] text-white mt-5">
        Equipping students with essential skills for career success and
        readiness.
      </h2>
      <div className="w-[100%] flex gap-2 my-3">
        <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]"></div>
        <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]"></div>
        <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]"></div>
      </div>

      <p className="text-white font-semibold font-[inter] text-[9px] leading-[14.05px]">
        Equip students with skills in e-commerce, marketing, finance,
        blockchain, communication, and essential school knowledge for
        comprehensive career readiness.
      </p>
    </div>
  </div>
);

const MobileHero = () => {
  return <MobileHeroSection />;
};

export default MobileHero;
