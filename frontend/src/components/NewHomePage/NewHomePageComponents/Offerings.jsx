import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";
import Icon from "../../icons/icon";

const Offerings = ({ offeringsData }) => {
  return (
    <div className="mx-auto sm:py-40 py-32 rounded-xl relative w-full">
      <div className="container pt-24 relative mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-two text-[#0D1B2F] font-[600]">{offeringsData?.Title}</h2>
          <div className="flex gap-4">
            <button className="offerings-swiper-button-prev p-4 border border-[#0D1B2F] rounded-full hover:bg-gray-100 transition-all">
              <Icon name="left" size={16} color="#0D1B2F" />
            </button>
            <button className="offerings-swiper-button-next p-4 border border-[#0D1B2F] rounded-full hover:bg-gray-100 transition-all">
              <Icon name="right" size={16} color="#0D1B2F" />
            </button>
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
                <div className="group px-12 py-12 hover:rounded-xl hover:bg-[#0D1B2F] bg-white h-[350px] shadow-lg rounded-xl p-6 mx-4 flex flex-col cursor-pointer transition-all relative overflow-hidden">
                  <p className="text-[3rem] leading-[3.5rem] font-[400] text-[#0D1B2F] group-hover:text-white mb-4">
                    {tabData?.title}
                  </p>
                  <div className="space-y-2 flex-grow">
                    {tabData?.subTitle &&
                      tabData?.subTitle?.map((subtitle, subIndex) => (
                        <div
                          className="flex px-8 py-1 items-center gap-4"
                          key={subIndex}
                        >
                          <p className="w-4 h-4 bg-red-500 rounded-full"></p>
                          <p className="text-[#0D1B2FCC] mt-1 text-[1.4rem] group-hover:text-white ">
                            {subtitle?.label}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="relative mt-32 hover:border-blue-500 w-full mx-auto rounded-full h-32 border-2 border-gray-300 bg-white mt-4 overflow-hidden">
                    <div className="flex p-10 items-center">
                      <div className="p-3 bg-white shadow-lg border border-[#adb5bd] rounded-full">
                        <Icon name="right" size={14} color="#495057" />
                      </div>
                      <div className="h-px w-full bg-[#adb5bd]"></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 group-hover:bg-[#0D1B2F] transition-opacity duration-300 absolute inset-0 flex items-center justify-center">
                      <p className="items-center text-white mr-4 text-[1.8rem]">
                        View Casestudy
                      </p>
                      <div className="p-2 border border-[#ffffff] rounded-full">
                        <Icon name="right" size={14} color="white" />
                      </div>{" "}
                      <Images
                        src={tabData?.bgImage?.url}
                        alt={tabData?.bgImage?.alternativeText}
                        fill
                        className="w-full h-full object-cover group-hover:opacity-50 rounded-full border-2 border-transparent transition-all"
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
