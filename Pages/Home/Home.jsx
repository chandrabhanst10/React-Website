import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Pricing from "../Pricing/Pricing";
import { homeObjOne } from "./Data";
import { homeObjTwo } from "./Data";
import { homeObjThree } from "./Data";
import { homeObjFour } from "./Data";
const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Home;
