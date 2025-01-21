import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Links from "../../Shared/Links";
import Images from "../../Shared/Image";
import BottomData from "./BottomData";
//import BottomData from "../../Shared/BottomData";

const HeroSection = ({ HeroData }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setWidth(screenWidth);
    setHeight(screenHeight);
  }, [width, height]);

  return (
    <>
      <div
        className={`flex flex-col justify-center pt-40 md:pt-10 pb-48 h-screen bg-cover bg-center relative `}
      >
        <div className="absolute inset-0 z-0">
          <Images
            src={HeroData?.heroImage?.url}
            fill
            alt={"hero-section-background-images"}
            className="relative"
            quality={75}
            priority={true}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-12 md:px-0 z-10">
          <div className={` op-hero-one lg:w-[60%]`}>
            <div className={`left mx-6 xxs:mx-0`}>
              <h1 className={`heading-two-hero text-[#0D1B2F]`}>
                {HeroData?.title}
              </h1>
              <p
                className={`mt-10 mb-8 hero-markdown leading-10 text-[#0D1B2FCC]`}
              >
                {HeroData?.richText}
              </p>
              <div className="sm:flex gap-8">
                {HeroData?.newHomeHeroButtons != undefined &&
                  HeroData?.newHomeHeroButtons.length > 0 &&
                  HeroData?.newHomeHeroButtons.map((button, index) => {
                    const { buttonBg, textColor } = button;
                    return (
                      <div
                        key={index}
                        className={`group border mh-button  ${
                          index == 0
                            ? "btn-primary w-fit mb-8 sm:mb-0"
                            : "text-[#FF980B] hover:border-white w-fit hover:text-white btn-primary-transparent bg-transparent"
                        }`}
                      >
                        <Links
                          href={button?.link?.href}
                          label={button?.link?.label}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          {/* Container for partners section */}
          <div className="container mx-auto flex gap-8 mb-[3%]">
            {HeroData?.partnersTitle && (
              <p className=" text-[#FF5E3A] text-[2rem] font-[600]">
                {HeroData?.partnersTitle}
              </p>
            )}
            <div className="flex gap-12 items-center">
              {HeroData?.partners != undefined &&
                HeroData?.partners.length > 0 &&
                HeroData?.partners.map((images, index) => {
                  return (
                    <div key={index} className="text-center">
                      <Images
                        src={images?.image?.url}
                        height={60}
                        width={60}
                        alt={images?.image?.alternativeText}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          {/* BottomData outside the container */}
          {HeroData?.yearsField && (
            <div className="">
              <BottomData cards={HeroData?.yearsField?.cards} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
