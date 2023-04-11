import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Pricing from "../Pricing/Pricing";
import { homeObjTwo } from "./Data";
const Products = () => {
  return (
    <>
       <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
};

export default Products;
