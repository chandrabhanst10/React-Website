import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Pricing from "../Pricing/Pricing";
import { homeObjOne } from "./Data";
const Services = () => {
  return (
    <>
       <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
};

export default Services;
