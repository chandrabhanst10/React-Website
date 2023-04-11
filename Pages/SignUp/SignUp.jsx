import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Pricing from "../Pricing/Pricing";
import { homeObjFour } from "./Data";
const Services = () => {
  return (
    <>
       <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Services;
