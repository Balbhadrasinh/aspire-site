import React from 'react';
import { getData } from '../../src/services/FetchData';
import { OFFERING_QUERY } from '../../src/utils/graphQL/OfferingChildPage';
import HeroSection from '@/src/components/Offering/OfferingChild/HeroSection';
import OfferingLayout from '@/src/components/Offering/OfferingChild/offeringChildLayout';

const Offering = (props) => {
  return (
    <div>
      {/* Pass the heroSectionData to the HeroSection component */}
      <HeroSection offerningPageData={props.heroSectionData} />
      {/* Pass the other sections to the OfferingLayout component */}
      <OfferingLayout offeringPageData={props.otherSections} />
    </div>
  );
};

export async function getStaticProps() {
  const offeringData = await getData(OFFERING_QUERY, true);

  // Extract the Hero Section data and other sections
  const heroSectionData = offeringData?.data?.offeringChildPage?.offeringChild?.find(
    (item) => item.__typename === "ComponentOfferingChildSliceHeroSection"
  )?.HeroSection;

  const otherSections = offeringData?.data?.offeringChildPage?.offeringChild?.filter(
    (item) => item.__typename !== "ComponentOfferingChildSliceHeroSection"
  );

  return {
    props: {
      heroSectionData, // Hero Section Data
      otherSections,   // Other Sections Data
    },
    revalidate: 60,
  };
}

export default Offering;
