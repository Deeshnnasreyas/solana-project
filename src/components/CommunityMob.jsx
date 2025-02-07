import React from "react";
import { JoinCommunityStatus, massAdoptionMob } from "../constants";

const CommunityMob = () => {
  return (
    <div>
      <div className="container pl-[5%]">
        <div className="mb-[98px]">
          <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
            Join a community of millions
          </h2>
          {JoinCommunityStatus.map((join, index) => (
            <div key={index}>
              <h1 className="text-[22px] xl:text-[88px] leading-[80px] xl:leading-[132px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                {join?.value}
              </h1>
              <p className="text-[14px] xl:text-[16px] font-normal leading-[27.3px] text-[#C4C4C4]">
                {join?.label}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
            Made for mass adoption.
          </h2>
          {massAdoptionMob.map((item, index) => (
            <div
              className="gap-[28px] pt-[44px] pb-[28px] bg-[#0F091A]"
              key={index}
            >
              <div className="gap-[28px] ">
                <div className="gap-[12px] flex">
                  <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                  <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                    {item?.title}
                  </h3>
                </div>
                <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px]">
                  {item?.description}
                </p>
                <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pt-[28px]">
                  {item?.statValue}
                </h3>
                <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                  {item?.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityMob;
