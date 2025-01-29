import React from "react";
import { useQuery } from "@apollo/client";
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the GraphQL query
import Images from "../../Shared/Image"; // Make sure to import Images component

const KeyOfferning = () => {
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure data structure is correct and we can access the required fields
  const keyOfferingData = data?.offerningChildPages?.[0]?.offeringChild?.find(
    (child) => child.__typename === "ComponentOfferingChildSliceKeyOfferning"
  );

  // Debug log to check if keyOfferingData is being correctly fetched
  console.log("keyOfferingData", keyOfferingData);

  if (!keyOfferingData) {
    return <div>No Key Offering Data Available</div>; // Fallback if no data
  }

  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] to-[#F5F4FA]">
      <div className="container mx-auto  py-8">
        {/* Section Heading */}
        <h2 className="text-[#0D1B2F] text-[20px] sm:text-[30px] lg:text-[40px] font-bold mb-8">
          {keyOfferingData?.Heading || "No Heading Available"}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyOfferingData?.AspireEdgeCards?.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="relative border-l border-[#959595] mb-6 w-full max-w-full h-auto justify-center items-center p-6 mx-auto"
            >
              {/* Card Icon */}
              {card?.icons?.url && (
                <Images
                  src={card.icons.url}
                  alt={card?.Heading || "Card Icon"}
                  className="w-16 h-16 object-contain mx-auto mb-6"
                />
              )}
              {/* Card Heading */}
              <p className="text-[#0D1B2F] text-[20px] sm:text-[28px] lg:text-[30px] leading-tight pb-4 group-hover:text-[#FF5E3A]">
                {card?.Heading || "No Heading Available"}
              </p>
              {/* Card Description */}
              <p className="text-[#0D1B2FCC] text-[14px] sm:text-[16px] lg:text-[12px] leading-tight group-hover:text-[#FF5E3A]">
                {card?.description || "No Description Available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyOfferning;
