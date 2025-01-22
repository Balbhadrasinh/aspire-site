import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";
import Links from "../../Shared/Links";

const SuccessStories = ({ successData }) => {
  console.log(successData, "successData");
  return (
    <div className="mx-auto rounded-xl relative w-full">
      <div className="container pt-24 relative mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="heading-two font-[600]">{successData?.title}</h2>
          <div className="flex gap-4">
            <div className="success-swiper-button-prev"></div>
            <div className="success-swiper-button-next"></div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".success-swiper-button-next",
            prevEl: ".success-swiper-button-prev",
          }}
          breakpoints={{
            300: { slidesPerView: 1 },
            540: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
          className="relative"
        >
          {successData?.tabs != undefined &&
            successData?.tabs.length > 0 &&
            successData?.tabs.map((content, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={`duration-1000 rounded-3xl`}>
                    <div className="lg:grid grid-cols-6">
                      <div className="col-span-3 lg:w-[95%]">
                        <h3 className="text-[3rem] text-[#0D1B2F] font-[500] leading-[3rem]">
                          {content?.tabTitle}
                        </h3>
                        <h2 className="heading-two mt-8 mb-12 font-[600]">
                          {content?.heading}
                        </h2>
                        {content?.keywords != undefined &&
                          content?.keywords?.map((keyword) => {
                            return (
                              <span
                                key={keyword?.id}
                                className="text-[#0D1B2FCC] mr-4 border-[#FD644F] border text-[1.4rem] font-[400] px-3 py-2 rounded-full"
                              >
                                {keyword?.href != undefined ? (
                                  <Links
                                    href={keyword?.href}
                                    label={keyword?.label}
                                    target={keyword?.target}
                                    className="text-[1.4rem] font-semibold lowercase"
                                  />
                                ) : (
                                  keyword?.label
                                )}
                              </span>
                            );
                          })}
                        <p className=" text-[#0D1B2FCC] w-[90%] mt-24 mb-8 font-[400] text-[2rem] font-medium leading-[2.5rem]">
                          {content?.midDesc}
                        </p>
                        <div className="mt-12 flex items-center gap-4">
                          <Links
                            href={content?.linkTag?.href}
                            label={content?.linkTag?.label}
                            className="text-[1.6rem] btn-primary font-bold"
                          />
                          <div className="mt-1">
                            {/* <Icon name="arrowRight" size={20} color="#525252" /> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-3">
                        <div className="flex justify-center items-center">
                          {content?.insideImg?.url && (
                            <Images
                              src={content?.insideImg?.url}
                              width={734}
                              height={430}
                              alt={content?.insideImg?.alternativeText}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStories;
