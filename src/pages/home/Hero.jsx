import React from "react";
const Hero = () => {
  return (
    <div className="hero-section relative w-full h-screen bg-center bg-cover flex items-center justify-center bg-[url('/heroImg.jpeg')] pt-[64px]">
      <div className="container">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-[42px] xl:text-[52px] md:text-6xl font-normal text-[#FFFFFF]">
            Powerful for developers.
          </h1>
          <h1 className="text-[42px] xl:text-[52px] font-normal text-[#FFFFFF]">
            Fast for everyone.
          </h1>
          <p className="mt-[38px] text-[16px] text-normal max-w-2xl mx-auto">
            Bring blockchain to the people. Solana supports experiences for
            power users, new consumers, and everyone in between.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] lg:gap-4 mt-[36px] items-center justify-center">
            <button
              className="rounded-full px-[33px] py-[16px] text-[16px] font-normal leading-[20px] cursor-pointer
              shadow-lg text-white bg-gradient-to-r from-[#8C01FA] to-[#000000] hover:text-white transition
              hover:from-[#ab59ef]
              hover:to-[#3a3a3a]"
            >
              Start building
            </button>
            <button
              href="#"
              className="px-[33px] py-[16px] text-[16px] font-normal leading-[20px] cursor-pointer
               bg-[#000000] text-[#FFFFFF] hover:bg-[#373738]
              border-[#FFFFF] border-[1px] rounded-full transition"
            >
              Read docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
