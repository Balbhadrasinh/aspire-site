import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Images from "../../Shared/Image";
import Links from "../../Shared/Links";
import Icon from "../../icons/icon";
import { useEffect, useState } from "react";

const SuccessStories = ({ successData }) => {
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1); // Initialize to 1
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set `isMobile` if width is less than 768px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = successData?.tabs?.length || 1;

  return (
    <div className="mx-auto sm:py-40 py-32 rounded-xl relative w-full">
      <div className="container relative mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="heading-two text-[#0D1B2F] font-[600]">
            {successData?.title}
          </h2>
          <div className="flex gap-2">
            <button className="success-swiper-button-prev p-4 bg-[#FD644F] rounded-full ">
              <Icon name="left" size={16} color="#ffffff" />
            </button>
            <button className="success-swiper-button-next p-4 bg-[#FD644F] rounded-full">
              <Icon name="right" size={16} color="#ffffff" />
            </button>

            <div className="flex ml-4 hidden lg:show items-center gap-6">
              <div className="relative w-[12rem] h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#FD644F] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[#0D1B2F] font-[400] text-[1.4rem]">
                {currentSlide}/{totalSlides}
              </span>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          speed={1000}
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
          autoHeight={isMobile}
          className="relative"
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
            const newProgress = ((swiper.activeIndex + 1) / totalSlides) * 100;
            setProgress(newProgress);
          }}
        >
          {successData?.tabs?.map((content, index) => (
            <SwiperSlide key={index}>
              <div className="duration-1000 mt-12 rounded-3xl">
                <div className="lg:grid grid-cols-6">
                  <div className="col-span-3 lg:w-[95%]">
                    <h3 className="text-[3rem] text-[#0D1B2F] font-[500] leading-[3rem]">
                      {content?.tabTitle}
                    </h3>
                    <h2 className="heading-two text-[#0D1B2F] mt-8 mb-12 font-[600]">
                      {content?.heading}
                    </h2>
                    {content?.keywords?.map((keyword) => (
                      <span
                        key={keyword?.id}
                        className="text-[#0D1B2FCC] mr-4 border-[#FD644F] border text-[1.4rem] font-[400] px-3 py-2 rounded-full"
                      >
                        {keyword?.href ? (
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
                    ))}
                    <p className="text-[#0D1B2FCC] w-[90%] mt-24 mb-8 font-[400] text-[2rem] font-medium leading-[2.5rem]">
                      {content?.midDesc}
                    </p>
                    <div className="mt-12 ml-2 w-fit btn-primary items-center gap-4">
                      <Links
                        href={content?.linkTag?.href}
                        label={content?.linkTag?.label}
                        className="text-[1.6rem] font-bold"
                      />
                      <div>
                        <Icon name="right" size={16} color="#ffffff" />
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
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStories;
