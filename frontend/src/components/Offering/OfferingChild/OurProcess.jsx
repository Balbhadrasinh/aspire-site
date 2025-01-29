import React from "react";
import { useQuery } from "@apollo/client";
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the GraphQL query
import Images from "../../Shared/Image";
import { LiaCheckCircleSolid } from "react-icons/lia";

const OurProcess = () => {
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Extracting 'ComponentOfferingChildSliceOurProccess' data
  const ourProcessData = data?.offerningChildPages?.[0]?.offeringChild?.find(
    (item) => item.__typename === "ComponentOfferingChildSliceOurProccess"
  );
  console.log("ourProcessData", ourProcessData);
  if (!ourProcessData) {
    return <div>No Process Data Available</div>; // Fallback if no data
  }

  return (
    <div className="py-8 bg-white container  mx-auto my-12 p-8 py-8">
      {/* Section Heading */}
      <h2 className="text-[#0D1B2F] text-[20px] sm:text-[30px] lg:text-[40px] font-bold mb-8">
        {ourProcessData?.Heading || "Our Process"}
      </h2>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {ourProcessData?.ProcessDetails?.map((step, stepIndex) => (
          <div key={stepIndex} className="container mx-auto mb-12">
            <div className="relative duration-300 group shadow-none group-hover:p-0 group-hover:shadow-none">
              <div className="flex flex-col sm:flex-row md:w-[110%] sm:mt-0">
                {/* Step Details */}
                <div className="flex-1 w-full sm:w-40 mr-8 p-8 rounded-2xl group-hover:bg-[#F5F4FA] transition-all duration-300">
                  <div className="flex items-center mb-2 relative">
                    <p className="text-[#FD644F] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-tight pr-4">
                      0{stepIndex + 1}.
                    </p>
                    <p className="text-[#0D1B2F] text-[18px] sm:text-[22px] group-hover:text-[#FD644F] lg:text-[24px] font-semibold leading-tight">
                      {step.title}
                    </p>
                  </div>
                  <p className="p-4 text-[#0D1B2FCC] text-[14px] sm:text-[16px] md:ml-8 lg:text-[14px] leading-tight group-hover:block hidden transition-all duration-300 border-l-2 border-[#95959580] opacity-0 group-hover:opacity-100">
                    {step.description || "No directions available"}
                    <span className="font-bold flex items-center mt-4">
                      <LiaCheckCircleSolid className="mr-2" />
                      Step {stepIndex + 1}
                    </span>
                  </p>
                </div>

                {/* Step Image */}
                {step?.image?.url && (
                  <div className="group-hover:block hidden flex ml-2 mt-2">
                    <Images
                      src={step?.image?.url || ""}
                      alt={step?.title || "Step Image"}
                      className="object-contain w-[80%]"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
