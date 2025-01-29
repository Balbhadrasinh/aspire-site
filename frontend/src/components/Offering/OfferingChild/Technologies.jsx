import React from "react";
import { useQuery } from "@apollo/client";
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage";
import Images from "../../Shared/Image";

const Technologies = () => {
  const { data, loading, error } = useQuery(OFFERING_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const TechnologyPageData = data?.offerningChildPages?.[0]?.offeringChild?.filter(
    (item) => item.__typename === "ComponentOfferingChildSliceTechnologies"
  );

  if (!TechnologyPageData?.length) {
    return <div>No Technologies Data Available</div>;
  }

  return (
    <div className="bg-[#F5F4FA] py-8">
      {TechnologyPageData.map((item, index) => (
        <div key={index} className="container mx-auto my-12 p-8">
          <h2 className="text-[#0D1B2F] text-[20px] sm:text-[30px] lg:text-[40px] font-bold mb-8">
            {item.Heading}
          </h2>


          {/* Cards Section */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {item?.AspireEdgeCards?.map((card, cardIndex) => (
              <div key={cardIndex} className="w-full max-w-[380px] h-[411px] mx-auto">
                <a href={card?.href || "#"} className="block w-full h-full  relative" target="_blank" rel="noopener noreferrer" >
                  <div className="w-full z-10 h-[357px] bg-white group rounded-2xl mt-16 p-6 relative">
                    <div
                      className="absolute left-[8%] -mt-16 top-0 bg-white group-hover:border-[#FD644F] transform rotate-[-5deg] z-10 border-2 rounded-2xl"

                      style={{
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Images
                        src={card?.icons?.url || ""}
                        alt="aspire-images"
                        className="w-16 h-16 object-contain mx-auto"
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center p-16">
                      <p className="text-[#0D1B2F] text-[20px] sm:text-[28px] lg:text-[30px] leading-tight pb-4 group-hover:text-[#FF5E3A]">
                        {card?.Heading}
                      </p>

                      {card?.description?.split("\n").length > 4 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                          {[...Array(2)].map((_, columnIndex) => {
                            const items = card?.description?.split("\n") || [];
                            const mid = Math.ceil(items.length / 2);
                            const columnItems =
                              columnIndex === 0
                                ? items.slice(0, mid)
                                : items.slice(mid);

                            return (
                              <ul key={columnIndex} className="space-y-2">
                                {columnItems.map((line, index) => (
                                  <li
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-4"
                                  >
                                    <span
                                      className="w-3 h-3 bg-red-500 flex items-center rounded-full flex-shrink-0 mt-1"
                                    ></span>
                                    <p className="text-[#0D1B2FCC] text-[#0D1B2FCC] text-[14px] sm:text-[16px] lg:text-[12px] flex items-center leading-normal">
                                      {line.trim()}
                                    </p>
                                  </li>

                                ))}
                              </ul>
                            );
                          })}
                        </div>
                      ) : (
                        <ul className="space-y-2 w-full">
                          {card?.description?.split("\n").map((line, index) => (
                            <li key={index} className="list-disc flex items-center gap-4">
                              <p className="w-4 h-4 bg-red-500 rounded-full"></p>
                              <p className="text-[#0D1B2FCC] mt-1 text-[1.4rem]">{line.trim()}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
