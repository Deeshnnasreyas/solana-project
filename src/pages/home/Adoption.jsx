import React from "react";

const MadeAdoption = () => {
  return (
    <div className="join-community w-[100%] py-[10px] xl:py-[64px] bg-[url('/community.jpeg')]">
      <div className="container">
        {/* <div className="scroll-filler"></div> */}
        <div className="scroll-reveal-section">
          {/* 1st section */}
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
                  <div>
                    <div className="gap-[28px]">
                      <div className="gap-[12px] flex">
                        <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                        <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                          FAST
                        </h3>
                      </div>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px]">
                        Don’t keep your users waiting. Solana has block times of
                        400 milliseconds — and as hardware gets faster, so will
                        the network.
                      </p>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pt-[28px]">
                        3,969
                      </h3>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                        Transactions per second
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="gap-[28px] pt-[44px] pb-[28px]">
                      <div className="gap-[12px] flex">
                        <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                        <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                          Scalable
                        </h3>
                      </div>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px]">
                        Get big, quick. Solana is made to handle thousands of
                        transactions per second, and fees for both developers
                        and users remain less than $0.01.
                      </p>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pt-[28px]">
                        163,077,581,394
                      </h3>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                        Total transactions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[-30px]">
                  <div>
                    <div className="gap-[28px]  pb-[28px]">
                      <div className="gap-[12px] flex">
                        <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                        <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                          Decentralized
                        </h3>
                      </div>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px]">
                        The Solana network is validated by thousands of nodes
                        that operate independently of each other, ensuring your
                        data remains secure and censorship resistant.
                      </p>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pt-[28px]">
                        1,675
                      </h3>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                        Validator nodes
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="gap-[28px] pt-[44px]">
                      <div className="gap-[12px] flex">
                        <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                        <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                          Energy Efficient
                        </h3>
                      </div>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px]">
                        Solana’s proof of stake network and other innovations
                        minimize its impact on the{" "}
                        <span className="text-[#19FB9B]">environment.</span>{" "}
                        Each Solana transaction uses about the same energy as a
                        few Google searches.
                      </p>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF] pt-[28px]">
                        0%
                      </h3>
                      <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                        Net carbon impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeAdoption;
