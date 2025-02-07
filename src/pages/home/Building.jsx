import React from "react";
const Building = () => {
  return (
    <div className="join-section bg-[#000000] w-full">
      <div className="container pb-20">
        <div className="relative w-full h-[400px] bg-center bg-cover flex items-center justify-center bg-[url('/bg.jpeg')]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
          <div className="relative z-10 text-center text-white pt-[64px] pb-[64] w-[544px] h-[114px]">
            <h4 className="text-[28px] font-normal leading-[38px]  font-sm text-[#FFFFFF] pb-[24px]">
              It&apos;s time to join the thousands of creators, artists, and
              developers using Solana.
            </h4>
            <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mt-5 items-center justify-center">
              <button
                className="rounded-full px-[33px] py-[16px] text-[16px] font-normal leading-[20px] cursor-pointer
              shadow-lg text-[#FFFF] bg-gradient-to-r from-[#8C01FA] to-[#000000] transition hover:from-[#ab59ef]
              hover:to-[#3a3a3a]"
              >
                Start building
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
