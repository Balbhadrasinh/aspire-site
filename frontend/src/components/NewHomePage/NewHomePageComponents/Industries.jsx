import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";
import Icon from "../../icons/icon";
import Image from "next/image";

const Industries = ({ industriesData }) => {
  return (
    <div className="mx-auto rounded-xl sm:py-40 py-32 relative w-full">
      <div className="container relative mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-two text-[#0D1B2F] font-[600]">
            {industriesData?.title}
          </h2>
          <div className="flex gap-4">
            <button className="industries-swiper-button-prev p-4 border border-[#0D1B2F] rounded-full hover:bg-gray-100 transition-all">
              <Icon name="left" size={16} color="#0D1B2F" />
            </button>
            <button className="industries-swiper-button-next p-4 border border-[#0D1B2F] rounded-full hover:bg-gray-100 transition-all">
              <Icon name="right" size={16} color="#0D1B2F" />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".industries-swiper-button-next",
            prevEl: ".industries-swiper-button-prev",
          }}
          slidesPerView={3.5}
          slidesPerGroup={1}
          breakpoints={{
            300: { slidesPerView: 1 },
            540: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 3.5 },
          }}
          className="relative"
        >
          {industriesData?.tabs &&
            industriesData?.tabs?.map((tabData, index) => (
              <SwiperSlide key={index}>
                <div className="group px-12 py-12 border-l broder-1px border-[#525252] p-6 mx-4 h-full flex flex-col cursor-pointer transition-all relative overflow-hidden">
                  <div className="relative w-24 h-24 mb-12 group">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FD644F29] rounded-xl transition-opacity duration-300 group-hover:opacity-0">
                      <Images
                        src={tabData?.imgIcon?.url}
                        alt={tabData?.imgIcon?.alternativeText}
                        height={30}
                        width={30}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF3D] rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Images
                        src={tabData?.imgIconHover?.url} // Add the hover icon URL
                        alt={tabData?.imgIcon?.alternativeText}
                        height={30} // Keep the same size as the default image
                        width={30}
                      />
                    </div>
                  </div>

                  <p className="text-[3rem] leading-[3.5rem] font-[500] text-[#0D1B2F] group-hover:text-white mb-16 z-10">
                    {tabData?.tabTitle}
                  </p>
                  <p className="text-[1.4rem] leading-[2rem] font-[400] text-[#0D1B2F] group-hover:text-white mb-4 z-10">
                    {tabData?.heading}
                  </p>
                  <p className="text-[1.4rem] leading-[2rem] font-[400] text-[#0D1B2F] group-hover:text-white mb-4 z-10">
                    {tabData?.midDesc}
                  </p>
                  <div className="relative mt-32 w-full mx-auto rounded-lg h-[180px] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Images
                        src={tabData?.insideImg?.url}
                        alt={tabData?.insideImg?.alternativeText}
                        fill
                        className="w-full h-full object-cover rounded-lg transition-all group-hover:opacity-0"
                      />
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 -z-10">
                    <Images
                      src={tabData?.insideImg?.url}
                      alt={tabData?.insideImg?.alternativeText}
                      fill
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 -z-10">
                    <Images
                      src={tabData?.insideImg?.url}
                      alt={tabData?.insideImg?.alternativeText}
                      fill
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-end justify-start ml-8 mb-8 transition-opacity duration-300">
                    <p className="text-white text-[1.8rem]">View More</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Industries;
