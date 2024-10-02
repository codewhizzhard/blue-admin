import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="py-4">
      <section className="desktopHero px-14 pt-7 rounded-xl">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[108px] h-[43px]" />
        </Link>
        <div className="mt-[330px] pb-10 mr-4">
          <p className="mb-3 text-white font-bold text-sm leading-[15.95px]">
            wv: xel "Empowering Students and Others"
          </p>
          <h2 className="leading-[25.5px] font-semibold font-[sora] text-white mt-5 text-2xl">
            Equipping students with essential skills for career success and
            readiness.
          </h2>
          <div className="w-full flex gap-2 my-5">
            <div className="w-[30.86px] h-[6px] rounded-[23.08px] bg-[#fff7f5]" />
            <div className="w-[99.43px] h-[6px] bg-[#CB1A14] rounded-[23.08px]" />
            <div className="w-[30.86px] h-[6px] bg-[#fff7f5] rounded-[23.08px]" />
          </div>
          <p className="text-white font-semibold font-[inter] text-xs leading-[19.05px]">
            Equip students with skills in e-commerce, marketing, finance,
            blockchain, communication, and essential school knowledge for
            comprehensive career readiness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
