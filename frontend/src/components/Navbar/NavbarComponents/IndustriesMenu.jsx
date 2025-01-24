import React from "react";
import Images from "../../Shared/Image";

const IndustriesMenu = ({ industriesData }) => {
  console.log(industriesData, "data");
  return (
    <div className="bg-gray-100 p-8 w-[900px] h-[300px]">
      <h1 className="text-3xl font-bold text-center mb-8">Offerings</h1>
      <div className="grid grid-cols-2 p-24 gap-4">
        {industriesData?.tab?.map((second, index) => (
          <div
            className="flex items-start gap-2 p-4" // Fixed size and overflow control
            key={index}
            onClick={() => {
              closeOnClick(false);
            }}
          >
            <div className="image">
              {second?.images?.url && second?.images?.alternativeText && (
                <Images
                  src={second?.images?.url}
                  width={18}
                  height={18}
                  alt={second?.images?.alternativeText}
                />
              )}
            </div>
            <div className="heading flex-1">
              <p className="sub-heading text-[1.4rem] text-[#525252] font-semibold hover:text-[#ff980b] hover:text-[1.6rem] leading-8 2xl:text-[1.6rem]">
                {second?.title}
              </p>
              <p className="text-[#525252] whitespace-normal text-left overflow-hidden">
                {second?.richText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesMenu;