import Images from "@/Shared/Image";
import { useState } from "react";
import Links from "@/Shared/Links";
import TopHeading from "../../Shared/TopHeading";
//import Icon from "../../icons/icon";

const ResultDriven = ({ resultDriven }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [accordian, setAccordian] = useState(false);
  const [accordianIndex, setAccordianIndex] = useState(0);

  const toggleAccordian = (index) => {
    var toggleValue = true;
    if (index == accordianIndex) {
      toggleValue = !accordian;
    }
    setAccordian(toggleValue);
    setAccordianIndex(index);
  };

  return (
    <div className="sm:py-40 py-32 px-4 sm:px-12 md:px-0 bg-[#868e96]">
      <div className="container mx-auto">
        <TopHeading
          title={resultDriven?.title}
          heading={resultDriven?.description}
        />
        <div className="lg:grid hidden grid-cols-12 gap-20">
          <div className="flex col-span-4 z-10 rounded-2xl bg-[#0D1B2F]">
            <ul className="md:block mt-8 w-full">
              {resultDriven?.tabs != undefined &&
                resultDriven?.tabs.length > 0 &&
                resultDriven?.tabs.map((tab, index) => {
                  return (
                    <li
                      className={`text-[2rem] ml-8 -mr-16 mb-6 font-bold rounded-3xl text-white cursor-pointer ease-in-out duration-300 ${
                        index == selectedIndex
                          ? "bg-[#FF5E3A] drop-shadow-3xl"
                          : ""
                      }`}
                      key={index}
                    >
                      <div
                        className="rd-two text-start ml-10 w-[70%] items-center rounded-3xl  p-[2rem]"
                        id={`tabs-${index}-tabVertical`}
                        onClick={() => {
                          setSelectedIndex(index);
                        }}
                      >
                        <span className={`w-2/5 xl:w-2/5 text-[1.8rem]`}>
                          {tab?.tabTitle}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="rd-three bg-white mt-8 drop-shadow-lg -mb-[5%] z-0 -ml-[10%] p-32 tab-content relative h-fit rounded-3xl col-span-8">
            {resultDriven?.tabs != undefined &&
              resultDriven?.tabs.length > 0 &&
              resultDriven?.tabs.map((content, index) => {
                return (
                  <div
                    className={`rd-four  duration-1000 rounded-3xl ${
                      index == selectedIndex
                        ? "show scale-100"
                        : "hidden scale-70"
                    } `}
                    //  id={`tabs-${index}-tabContent`}
                    key={content.id}
                    // style={{ backgroundColor: content?.bgColor }}
                  >
                    <div className="lg:grid grid-cols-5">
                      <div className="col-span-3 lg:w-[95%]">
                        <h3 className="text-[2.4rem] font-[500] leading-[3rem]">
                          {content?.heading}
                        </h3>
                        <p className=" text-[#0D1B2FCC] mb-8 font-[400] text-[2rem] font-medium mt-8 leading-[2.5rem]">
                          {content?.midDesc}
                        </p>

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

                        <div className="mt-20 flex items-center gap-4">
                          <Links
                            href={content?.linkTag?.href}
                            label={content?.linkTag?.label}
                            className="text-[1.6rem] text-para font-bold"
                          />
                          <div className="mt-1">
                            {/* <Icon name="arrowRight" size={20} color="#525252" /> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <div className="flex justify-center items-center">
                          {content?.insideImg?.url && (
                            <Images
                              src={content?.insideImg?.url}
                              width={321}
                              height={415}
                              alt={content?.insideImg?.alternativeText}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="block lg:hidden">
          <>
            {resultDriven?.tabs != undefined &&
              resultDriven?.tabs.length > 0 &&
              resultDriven?.tabs.map((tab, index) => {
                return (
                  <div
                    className="bg-white rounded-2xl mt-4 md:mt-0 w-full col-start-7 col-end-13 mx-auto mb-4 px-8 py-6 shadow-lg cursor-pointer"
                    onClick={() => {
                      toggleAccordian(index);
                    }}
                    key={index}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex gap-12 items-center p-12">
                        {tab?.imgIcon?.data?.attributes?.url != undefined && (
                          <Images
                            src={tab?.imgIcon?.data?.attributes?.url}
                            alt={
                              tab?.imgIcon?.data?.attributes?.alternativeText ||
                              "Tab Image"
                            }
                            width={80}
                            height={80}
                          />
                        )}
                        <h3 className="text-[2.5rem] leading-[2.5rem] font-bold cursor-pointer">
                          {tab?.tabTitle}
                        </h3>
                      </div>

                      <div className="mt-1">
                        <div
                          className={
                            accordian && accordianIndex == index
                              ? "transition-all rotate-0"
                              : "transition-all rotate-180"
                          }
                        >
                          {/* <Icon name="chevronUp" size={16} /> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        accordian && index == accordianIndex ? "show" : "hidden"
                      }`}
                    >
                      <div
                        className={`p-12  rounded-3xl `}
                        //  id={`tabs-${index}-tabContent`}
                        key={tab.id}
                        style={{ backgroundColor: tab?.bgColor }}
                      >
                        <h3 className="text-[3rem] font-normal leading-[4rem]">
                          {tab?.heading}
                        </h3>
                        <p className="text-[1.8rem] font-medium mt-12  leading-[3rem]">
                          {tab?.midDesc}
                        </p>
                        <div
                          className="mt-12 my-8 leading-10 px-10 border-l-4 text-[2rem] font-bold"
                          style={{ borderColor: tab?.iconClass }}
                        >
                          {tab?.shortDesc}
                        </div>
                        <div className="mt-20 flex items-center gap-4">
                          <Links
                            href={tab?.linkTag?.href}
                            label={tab?.linkTag?.label}
                            className="text-[1.6rem] text-para font-bold"
                          />
                          <div className="mt-1">
                            {/* <Icon name="arrowRight" size={16} color="#525252" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default ResultDriven;
