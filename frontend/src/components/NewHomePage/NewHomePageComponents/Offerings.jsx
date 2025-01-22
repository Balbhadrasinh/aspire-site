import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";

const Offerings = ({ offeringsData }) => {
  return (
    <div className="mx-auto rounded-xl relative w-full">
      <div className="container pt-24 relative mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-two font-[600]">{offeringsData?.Title}</h2>
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
          {offeringsData?.tab &&
            offeringsData?.tab?.map((tabData, index) => (
              <SwiperSlide key={index}>
                <div className="group p-16 hover:bg-[#0D1B2F] bg-white shadow-lg rounded-lg p-6 mx-4 h-full flex flex-col cursor-pointer transition-all relative overflow-hidden">
                  <p className="text-[3rem] leading-[3.5rem] font-[400] text-[#0D1B2F] group-hover:text-white mb-4">
                    {tabData?.title}
                  </p>
                  <div className="space-y-2 flex-grow">
                    {tabData?.subTitle &&
                      tabData?.subTitle?.map((subtitle, subIndex) => (
                        <div className="flex items-center gap-4" key={subIndex}>
                          <p className="w-4 h-4 bg-red-500 rounded-full"></p>
                          <p className="text-[#0D1B2FCC] mt-1 text-[1.4rem] group-hover:text-white ">
                            {subtitle?.label}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="relative mt-24 hover:border-blue-500 w-full mx-auto rounded-full h-32 border-2 border-gray-300 bg-white mt-4 overflow-hidden">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
                      <Images
                        src={tabData?.bgImage?.url}
                        alt={tabData?.bgImage?.alternativeText}
                        fill
                        className="w-full h-full object-cover rounded-full border-2 border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Offerings;
