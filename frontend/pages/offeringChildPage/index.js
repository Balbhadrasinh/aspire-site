import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; 
import { getData } from "@/src/services/FetchData";
import HeroSection from "@/src/components/Offering/OfferingChild/HeroSection"; 
import OfferingLayout from "@/src/components/Offering/offeringChildLayout";
import React from "react";

const Offering = () => {

  
  return (
    <>
        <HeroSection/>
      <OfferingLayout />
    </>
  );
};


export default Offering;
