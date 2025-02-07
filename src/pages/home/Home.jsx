import React from "react";
import Building from "./Building";
import JoinCommunity from "./Community";
import Hero from "./Hero";
import BrandingLogo from "./BrandingLogo";
import SwipperCommunity from "./SwipperCommunity";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandingLogo />
      <JoinCommunity />
      {/* <MadeAdoption /> */}
      <SwipperCommunity />
      <Building />
    </div>
  );
};

export default Home;
