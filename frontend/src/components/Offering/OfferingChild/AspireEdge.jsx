import React from "react";
import { useQuery } from "@apollo/client";  // Import useQuery
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the GraphQL query
import Images from "../../Shared/Image";
import Image from "next/image";

const AspireEdge = () => {
  // Use Apollo Client's useQuery hook to fetch the data for AspireEdge
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error.message}</div>; // Error state

  // Extract AspireEdge data from the query response
  const aspireEdgeData = data?.offerningChildPages?.[0]?.offeringChild?.filter(
    (child) => child.__typename === "ComponentOfferingChildSliceAspireEdge"
  );

  if (!aspireEdgeData || aspireEdgeData.length === 0) {
    return <div>No AspireEdge Data Available</div>; // Fallback if no data
  }

  return (
    <div className="py-8">
      {aspireEdgeData?.map((item, index) => (
        <div key={index} className="container mx-auto">
          <h2 className="text-[#0D1B2F] text-[20px] sm:text-[30px] lg:text-[40px] font-bold mb-4">
            {item.Heading}
          </h2>
          <p className="text-[#0D1B2FCC] text-[12px] sm:text-[12px] lg:text-[16px] mb-8">
            {item.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group-hover:border-[#FF5E3A]">
            {item?.AspireEdgeCards?.map((card, cardIndex) => (
              <a
                key={cardIndex}
                href={card?.link?.href || "#"}
                className="relative bg-white border border-[#0D1B2F33] rounded-xl w-full hover:border-[#FF5E3A] max-w-full  justify-center items-center p-8 mx-auto"
              >
                <div className="mb-4">
                  <Images
                    src={card?.icons?.url || ""}
                    alt="aspire-images"
                    className="w-16 h-16 object-contain mx-auto mb-6"
                  />
                </div>
                <div>
                  <p className="text-[#0D1B2F] text-[20px] sm:text-[28px] lg:text-[30px] leading-tight pb-4 group-hover:text-[#FF5E3A]">
                    {card?.Heading}
                  </p>
                  <p className="text-[#0D1B2FCC] text-[14px] sm:text-[16px] lg:text-[12px] leading-tight group-hover:text-[#FF5E3A]">
                    {card?.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AspireEdge;
