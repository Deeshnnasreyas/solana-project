import React from "react";
import {
  footerConnectItems,
  footerItems,
  footerSolanaItems,
} from "../constants";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  const renderFooterLinks = footerItems?.map((items, index) => (
    <li
      className="transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      key={index}
    >
      <a
        href={items?.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={items?.label}
      >
        <items.icon
          className={"cursor-pointer text-white hover:text-purple-500 "}
        />
      </a>
    </li>
  ));
  return (
    <div className="branding-section bg-[#000000] w-full">
      <div className="container pt-[134px]">
        <div className="  text-white md:mt-0">
          <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
            <div className="w-full md:w-1/4 space-y-4">
              <h1 className="text-[16px] font-normal text-xl">
                Managed by Solana Foundation
              </h1>
              <div className="mt-4 sm:mt-0 ">
                <ul className="flex lg:flex-shrink-0 items-center space-x-2">
                  {renderFooterLinks}
                </ul>
              </div>
              <div className="hidden lg:flex md:flex text-left text-[16px] font-normal  text-[#848895] ">
                <p>&copy;2023 Solana Foundations. All rights reserved.</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <h1 className="text-[#FFFFFF] text-[16px] font-normal  text-xl pb-4 pt-5 md:pt-0">
                  SOLANA
                </h1>
                <div className=" flex flex-col gap-2">
                  {footerSolanaItems.map((item, index) => (
                    <Link
                      key={index}
                      className="text-[#848895] transition-all cursor-pointer"
                      to="/"
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-[#FFFFFF] text-[16px] font-normal  pb-4 pt-5 md:pt-0">
                  GET CONNECTED
                </h1>
                <div className=" flex flex-col gap-2">
                  {footerConnectItems.map((item, index) => (
                    <Link
                      key={index}
                      className="text-[#848895] text-[16px] font-normal  transition-all cursor-pointer"
                      to="/"
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-[#848895] text-[16px] font-normal  pb-4 pt-5 md:pt-0">
                  <span className="flex items-center gap-1">
                    <FaGlobe />
                    EN
                  </span>
                </h1>
              </div>
            </div>
            <div className="text-[16px] font-normal  text-[#848895] pt-5 mb-10 lg:hidden">
              <p className="w-full">
                &copy;2023 Solana Foundations. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
