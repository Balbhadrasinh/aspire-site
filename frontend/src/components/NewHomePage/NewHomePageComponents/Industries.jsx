import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";

const Industries = ({ industriesData }) => {
  return (
    <div className="mx-auto rounded-xl relative w-full">
      <div className="container pt-24 relative mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-two font-[600]">{industriesData?.title}</h2>
          <div className="flex gap-4">
            <div className="offerings-swiper-button-prev"></div>
            <div className="offerings-swiper-button-next"></div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".offerings-swiper-button-next",
            prevEl: ".offerings-swiper-button-prev",
          }}
          breakpoints={{
            300: { slidesPerView: 1 },
            540: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {industriesData?.tabs &&
            industriesData?.tabs?.map((tabData, index) => (
              <SwiperSlide key={index}>
                <div className="group px-12 py-12 shadow-lg rounded-lg p-6 mx-4 h-full flex flex-col cursor-pointer transition-all relative overflow-hidden">
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
