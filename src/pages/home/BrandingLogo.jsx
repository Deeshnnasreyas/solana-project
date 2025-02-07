import React from "react";
import { brandingLogo } from "../../constants/index.js";

const BrandingLogo = () => {
  const renderbarnds = brandingLogo?.map((item, index) => (
    <div key={index}>
      <img
        src={item?.image}
        alt="image"
        className={`${item?.className}`}
        width={70}
        height={30}
      />
    </div>
  ));
  return (
    <div className="branding-section bg-[#000000] w-full">
      <div className="container pb-20">
        <p className="text-[#618ADC] font-medium text-center py-5 pb-[33px]">
          Powering tools and integrations from companies all around the world
        </p>
        <div className="flex flex-wrap w-full gap-[40px]">{renderbarnds}</div>
      </div>
    </div>
  );
};

export default BrandingLogo;
