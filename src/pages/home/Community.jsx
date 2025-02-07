import React from "react";

const JoinCommunity = () => {
  return (
    <div className="join-community  w-[100%] py-[10px] xl:py-[64px] bg-[url('/community.jpeg')]">
      <div className="container">
        {/* <div className="scroll-filler"></div> */}
        <div className="scroll-reveal-section">
          {/* 1st section */}
          <div className="item">
            <div className="image-holder">
              <div className="joint-community-left">
                <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
                  Join a community of millions
                </h2>
              </div>
              {/* <img src="https://media.istockphoto.com/id/2039918088/photo/happy-african-american-woman-using-tablet-on-a-cozy-sofa-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=a124M439yRMrnReLVn91U6BgfIDGVMiJDZCTpBAgib8=" /> */}
            </div>

            <div className="text-holder">
              <div>
                <h1 className="text-[22px] xl:text-[88px] leading-[80px] xl:leading-[132px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                  11.5M+
                </h1>
                <p className="text-[14px] xl:text-[16px] font-normal leading-[27.3px] text-[#C4C4C4]">
                  Active accounts
                </p>
              </div>
              <div>
                <h1 className="text-[22px] xl:text-[88px]  leading-[80px] xl:leading-[132px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                  29.9M+
                </h1>
                <p className="text-[14px] xl:text-[16px] font-normal leading-[27.3px] text-[#C4C4C4]">
                  NFTs minted
                </p>
              </div>
              <div>
                <h1 className="text-[22px] xl:text-[88px] leading-[80px] xl:leading-[132px]  font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                  $0.0025
                </h1>
                <p className="text-[14px] xl:text-[16px] font-normal leading-[27.3px] text-[#C4C4C4]">
                  Average cost per transaction
                </p>
              </div>
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
          {/* 2 nd section */}
          {/* <div className="item">
            <div className="image-holder">
              <div className="joint-community-left">
                <h2 className="text-white max-w-[327px] text-[22px] xl:text-[32px]  leading-[46px] font-normal">
                  Made for mass adoption.
                </h2>
              </div>
            </div>

            <div className="text-holder">
              <div className="flex flex-col lg:flex-row">
               
                <div>
                  <div className=" xl:w-[362.5px] xl:h-[304px] py-[28px] px-[32px]">
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
                    </div>
                    <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                      3,969
                    </h3>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4] max-w-[298.5px] ">
                      Transactions per second
                    </p>
                  </div>
                  <div className="w-[362.5px] h-[304px] py-[28px] px-[32px]">
                    <div className="gap-[12px] flex">
                      <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                        Scalable
                      </h3>
                    </div>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      Get big, quick. Solana is made to handle thousands of
                      transactions per second, and fees for both developers and
                      users remain less than $0.01.
                    </p>
                    <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                      163,077,581,394
                    </h3>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      Total transactions
                    </p>
                  </div>
                </div>
              
                <div className="mt-[-30px]">
                  <div className="w-[362.5px] h-[304px] py-[28px] px-[32px]">
                    <div className="gap-[12px] flex">
                      <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                      <h3 className="text-[14px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                        Decentralized
                      </h3>
                    </div>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      The Solana network is validated by thousands of nodes that
                      operate independently of each other, ensuring your data
                      remains secure and censorship resistant.
                    </p>
                    <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                      1,675
                    </h3>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      Validator nodes
                    </p>
                  </div>
                  <div className="w-[362.5px] h-[304px] py-[28px] px-[32px]">
                    <div className="gap-[12px] flex">
                      <span className=" border-l-2 border-l-[#1FCFF1]"></span>
                      <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                        Energy Efficient
                      </h3>
                    </div>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      Solana’s proof of stake network and other innovations
                      minimize its impact on the{" "}
                      <span className="text-[#19FB9B]">environment.</span> Each
                      Solana transaction uses about the same energy as a few
                      Google searches.
                    </p>
                    <h3 className="text-[22px] xl:text-[28px] font-normal leading-[33.04px]  text-[#FFFFFF]">
                      0%
                    </h3>
                    <p className="text-[14px] xl:text-[17px] font-normal  text-[#C4C4C4]">
                      Net carbon impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* 
        <div className="scroll-filler"></div> */}
      </div>
    </div>
  );
};

export default JoinCommunity;
