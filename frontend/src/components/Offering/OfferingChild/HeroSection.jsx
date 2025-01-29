import { useQuery } from '@apollo/client';
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the query
import Images from "../../Shared/Image";
import React from "react";

const HeroSection = () => {
  // Use Apollo Client's useQuery hook to fetch the data
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error.message}</div>; // Error state

  // Extracting the HeroSection data
  const heroData = data?.offerningChildPages?.[0]?.offeringChild?.find(
    (child) => child.__typename === "ComponentOfferingChildSliceHeroSection"
  )?.HeroSection;

  if (!heroData) return <div>No Hero Section Data Available</div>; // Fallback if no data

  const { title, richText, button, heroImage, mobileImage } = heroData;
  console.log("heroData", heroData);

  return (
    <section>
      <div className="hero-section relative w-full">
        {/* Hero Image */}
        {heroImage?.url && (
          <div className="relative w-full h-screen">
            <Images
              src={heroImage?.url}
              alt={heroImage?.alternativeText || "Hero Background"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        {/* Mobile Image (If exists) */}
        {/* {mobileImage?.url && (
          <div className="relative w-full h-screen md:hidden">
            <Images
              src={mobileImage?.url}
              alt={mobileImage?.alternativeText || "Mobile Hero Background"}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )} */}

        <div className="mx-auto container absolute top-0 w-full md:w-10/12 left-0 md:right-80 right-0 bottom-0 p-20 flex flex-col justify-center md:items-start text-left text-white p-8">
          {/* Hero Heading */}
          <h2 className="text-[40px] md:text-[50px] text-[#0D1B2F] mb-4 md:mb-8 leading-[1.1] md:text-left">
            {title}
          </h2>
          {/* Hero Description */}
          <p className="text-[10px] md:text-[20px] text-[#0D1B2F] mb-4 md:mb-8 leading-[1.1] md:text-left w-full sm:w-2/12 md:w-2/3">
            {richText}
          </p>

          {/* Button */}
          {button?.map((btn, index) => (
            <div key={index} className="md:justify-start">
              <a
                href={btn?.link?.href || "#"} // Fallback href if no link exists
                className="btn text-[18px] md:text-[20px] rounded-lg text-white bg-gradient-to-r from-[#FF2A68] to-[#FF5E3A] shadow-lg w-[200px] md:w-[240px] h-[50px] md:h-[60px] flex items-center justify-center mt-4 md:mt-6"
              >
                {btn?.textColor || 'Button'} {/* Fallback textColor if not available */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
