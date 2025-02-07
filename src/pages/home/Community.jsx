import React from "react";
import CommunityMob from "../../components/CommunityMob";
import {
  JoinCommunityStatus,
  massAdoptionLeft,
  massAdoptionRight,
} from "../../constants";

const JoinCommunity = () => {
  return (
    <>
      <div className="join-community  w-[100%] py-[10px] xl:py-[64px] bg-[url('/community.jpeg')] hidden xl:block">
        <div className="container">
          <div className="scroll-reveal-section">
            {/* 1st section */}
            <div className="item">
              <div className="image-holder">
                <div className="joint-community-left">
                  <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
                    Join a community of millions
                  </h2>
                </div>
              </div>

              <div className="text-holder">
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
            </div>
            {/* new 2 nd */}
            <div className="item">
              <div className="image-holder">
                <div className="joint-community-left">
                  <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
                    Made for mass adoption.
                  </h2>
                </div>
              </div>

              <div className="text-holder">
                <div className="flex flex-col lg:flex-row gap-[24px]">
                  <div>
                    {massAdoptionLeft.map((item, index) => (
                      <div
                        className="bg-[#0F091A] gap-[28px] pb-[28px]"
                        key={index}
                      >
                        <div className="gap-[28px] ">
                          <div className="gap-[12px] flex">
                            <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                            <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pb-[9px]">
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
                    <div></div>
                  </div>
                  <div className="mt-[-30px]">
                    {massAdoptionRight.map((item, index) => (
                      <div key={index}>
                        <div className="gap-[28px]  pb-[28px] bg-[#0F091A]">
                          <div className="gap-[12px] flex">
                            <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                            <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pb-[9px]">
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
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden flex flex-col items-center w-[100%] py-[10px] xl:py-[64px] bg-[url('/community.jpeg')]">
        <CommunityMob />
      </div>
    </>
  );
};

export default JoinCommunity;
