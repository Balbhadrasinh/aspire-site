import Link from "next/link";
import { useState } from "react";
import Images from "../../Shared/Image";

const LatestTabs = ({ everythingData, PodcastData }) => {
  const [activeTab, setActiveTab] = useState("Everything");

  const tabData = {
    Everything: everythingData?.tab,
    Podcasts: PodcastData?.tab,
    Interviews: [
      {
        title: "Interview with CEO",
        content: "Learn about the journey of our CEO...",
      },
    ],
    Achievements: [
      {
        title: "Company Milestone",
        content: "We just hit a major milestone...",
      },
    ],
    Insights: [
      {
        title: "Market Insights 2024",
        content: "Explore the latest market trends...",
      },
    ],
  };

  return (
    <div className="sm:py-40 py-32 px-4 sm:px-12 md:px-0">
      <div className="container mx-auto transition-all duration-500">
        <div className="sm:flex justify-center lblogs-two mb-24">
          <h2 className="sm:mb-0 text-[#0D1B2F] mb-8">
            {"Browse our latest Insights"}
          </h2>
        </div>
        <div className="sm:flex lg:justify-center space-x-4 text-center">
          {[
            "Everything",
            "Podcasts",
            "Interviews",
            "Achievements",
            "Insights",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 ${
                activeTab === tab
                  ? "border-b-2 border-[#FD644F] text-[1.8rem] text-[#0D1B2FCC]"
                  : "text-[#0D1B2FCC] text-[1.8rem] hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-10">
            {tabData[activeTab].map((latestDetails, index) => {
              return (
                <div
                  className="w-full 2xl:max-w-[420px] h-auto mx-auto text-center lg:text-left lg:block transition-all hover:-translate-y-2 duration-300 overflow-hidden"
                  key={latestDetails?.id + "" + index}
                >
                  <Link href={`/blog/${latestDetails?.title}`} className="">
                    <div className="relative group">
                      {latestDetails?.image?.url != undefined && (
                        <Images
                          width={500}
                          height={310}
                          src={latestDetails?.image?.url}
                          alt={
                            latestDetails?.image?.attributes?.alternativeText
                          }
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="py-8">
                      <span className="font-medium text-[1.4rem] mt-2 text-gray-600">
                        {latestDetails?.date}
                      </span>
                      <h2 className="lbogs-four font-bold text-[2.4rem] mb-8 text-left leading-[3rem] my-4 text-[#0D1B2F]">
                        {latestDetails?.title}
                      </h2>
                      <span className="font-medium text-[1.8rem] text-gray-600">
                        {latestDetails?.description}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTabs;
