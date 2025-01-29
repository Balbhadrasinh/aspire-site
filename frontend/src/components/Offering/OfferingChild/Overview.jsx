import { useQuery } from '@apollo/client';
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the query
import React from "react";

const Overview = () => {
  // Use Apollo Client's useQuery hook to fetch the data for Overview
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error.message}</div>; // Error state

  // Extracting the Overview data
  const overviewData = data?.offerningChildPages?.[0]?.offeringChild?.filter(
    (child) => child.__typename === "ComponentOfferingChildSliceOverview"
  );

  if (!overviewData || overviewData.length === 0) {
    return <div>No Overview Data Available</div>; // Fallback if no data
  }

  return (
    <div className=" container mx-auto py-8">
      {overviewData?.map((item, index) => (
        <div key={index} className="">
          <h2 className="text-[#0D1B2F] text-[20px] sm:text-[30px] lg:text-[40px] font-bold mb-4">
            {item.Heading}
          </h2>
          <p className="text-[#0D1B2FCC] text-[12px] sm:text-[12px] lg:text-[16px] mb-8">
            {item.Description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Overview;
