"use client";

import Image from "next/image";

import  { CustomButton}  from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero mt-20">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          <span className="xl:text-[16px] font-medium text-pink-600">Best Furniture For Your Castle... </span>
          <br />
          New Furniture Collection Trends in 2020
        </h1>

        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        </p>

        <CustomButton
          title="Shop Now"
          containerStyles="bg-pink-500 text-white mt-10"

          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/sofa.png" alt="hero" fill className="object-contain w-[629px] h-[629px]" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;


