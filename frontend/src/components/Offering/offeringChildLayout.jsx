import HeroSection from "./OfferingChild/HeroSection";
import MainChildSection from "./OfferingChild/MainChildSection";
// import SEO from "../../Shared/SEO";
import React from "react";

const OfferningLayout = ({ offerningPageData }) => {
  return (
    <div>
      {/* <HeroSection /> */}
      <div className="container mx-auto">

      <MainChildSection offerningPageData={offerningPageData}/>
      </div>
      {/* Uncomment the SEO logic if needed */}
      {/* {seo ? <SEO data={seo} /> : null} */}
    </div>
  );
};

export default OfferningLayout;
