import React from "react";
import Images from "../../Shared/Image";

const ResourcesMenu = ({ resourcesData }) => {
  return (
    <div className="bg-gray-100 -mr-[12rem] w-auto h-auto">
      <div className="grid grid-cols-2 p-16 gap-12">
        {resourcesData?.tab &&
          resourcesData?.tab?.map((second, index) => (
            <div
              className="flex gap-6 w-[350px] h-fit"
              key={index}
              onClick={() => {
                closeOnClick(false);
              }}
            >
              <div className="image w-[48px] flex-shrink-0 flex justify-center text-center items-center h-[48px] bg-[#FF5E3A33] rounded-lg">
                {second?.images?.url && second?.images?.alternativeText && (
                  <Images
                    src={second?.images?.url}
                    width={24}
                    height={24}
                    alt={second?.images?.alternativeText}
                    className=""
                  />
                )}
              </div>
              <div className="mt-2 w-full flex flex-col">
                <p className="sub-heading text-[2rem] text-[#0D1B2F] font-semibold leading-8 2xl:text-[1.6rem]">
                  {second?.title}
                </p>
                <span className="text-[#0D1B2F] font-[400] leading-[2.5rem] mt-6 text-[1.8rem]  break-words whitespace-normal">
                  {second?.richText}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;
