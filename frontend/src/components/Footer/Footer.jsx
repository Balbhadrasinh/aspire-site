import { FOOTER } from "@/src/utils/graphQL/Footer";
import { useLazyQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect } from "react";
import Images from "../Shared/Image";
import Star from "../../../public/images/starimage.png";
import Image from "next/image";

const Footer = () => {
  const [footerQuery, { data, loading, error }] = useLazyQuery(FOOTER);

  useEffect(() => {
    (async () => {
      footerQuery();
    })();
  }, [footerQuery]);

  const footerSectionData = data?.footer?.footer;

  const discoverData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterDiscover"
  );
  const resourceData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterResources"
  );
  const careerData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterCareers"
  );

  const footerAboutData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterAbout"
  );

  const areaWeServeSectionData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterAreasWeServe"
  );

  const reviewSectionData = footerSectionData?.find(
    (section) => section.__typename === "ComponentFooterReviewSection"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="sm:py-40 py-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-[600] text-[2.4rem] mb-4">
            {discoverData?.title}
          </h3>
          <ul className="space-y-2">
            {discoverData?.links?.map((sub, subIndex) => (
              <li key={subIndex}>
                <Link
                  href={sub?.href || "#"}
                  target={sub?.target || "_self"}
                  className="text-[#0D1B2FCC] font-[400] text-[1.8rem] hover:underline"
                >
                  {sub?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Section */}
        <div>
          <h3 className="font-[600] text-[2.4rem] mb-4">
            {resourceData?.title}
          </h3>
          <ul className="space-y-2">
            {resourceData?.links?.map((sub, subIndex) => (
              <li key={subIndex}>
                <Link
                  href={sub?.href || "#"}
                  target={sub?.target || "_self"}
                  className="text-[#0D1B2FCC] font-[400] text-[1.8rem] hover:underline"
                >
                  {sub?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-[600] text-[2.4rem] mb-4">{careerData?.title}</h3>
          <ul className="space-y-2">
            {careerData?.links?.map((sub, subIndex) => (
              <li key={subIndex}>
                <Link
                  href={sub?.href || "#"}
                  target={sub?.target || "_self"}
                  className="text-[#0D1B2FCC] font-[400] text-[1.8rem] hover:underline"
                >
                  {sub?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h3 className="font-[600] text-[2.4rem] mb-4">Get in touch</h3>
          <div className="flex gap-6">
            <div className="btn-primary-transparent">Contact us</div>
            <div className="btn-primary">Schedule a call</div>
          </div>
          <div className="mt-6">
            <p className="text-gray-600">+1 302 201 2677</p>
          </div>
          <div className="mt-6">
            <p className="text-[#0D1B2F] font-[600] text-[1.6rem] mb-4">
              Get insights from the experts on building and scaling technology
              teams.
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter email..."
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="btn-primary-transparent">Subscribe</div>
          </div>
          <p className="text-[1.2rem] text-[#0D1B2FCC] mt-2">
            By subscribing I accept the Privacy Policy.
          </p>
        </div>
      </div>

      <div className="container py-24 mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-3">
          <div className="flex gap-8 items-center h-[50px] w-auto">
            {reviewSectionData?.tab &&
              reviewSectionData?.tab.length > 0 &&
              reviewSectionData?.tab.map((tabData, index) => {
                return (
                  <div
                    className="singleIcon border rounded-xl px-8 py-4"
                    key={index}
                  >
                    {tabData?.link?.href != undefined && (
                      <Link
                        href={tabData?.link?.href}
                        target={"_blank"}
                        aria-label={tabData?.iconClass}
                        rel="nofollow"
                      >
                        <div className="flex gap-2 items-center">
                          <div className="text-[#ffffff] pr-12 hover:text-[#ff980b]">
                            <Images
                              src={tabData?.platformImage?.url}
                              alt={tabData?.platformImage?.alternativeText}
                              height={tabData?.platformImage?.height}
                              width={tabData?.platformImage?.width}
                            />
                          </div>
                          <div className="text-[#ffffff] hover:text-[#ff980b]">
                            <Image
                              src={Star}
                              alt={"start-image"}
                              height={18}
                              width={18}
                            />
                          </div>
                          <div className="text-[#0D1B2F] text-[1.8rem] font-[700]">
                            {tabData?.rank}
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="">
          <div className="text-[#0D1B2F] text-[2.4rem] font-[600]">
            Follow us
          </div>
          <div className="flex gap-8 items-center mt-4">
            {footerAboutData?.socialLinks &&
              footerAboutData?.socialLinks.length > 0 &&
              footerAboutData?.socialLinks.map((singleIcon, index) => {
                return (
                  <div className="singleIcon" key={index}>
                    <Link
                      href={singleIcon?.link?.href}
                      target={"_blank"}
                      aria-label={singleIcon?.iconClass}
                      rel="nofollow"
                    >
                      <div className="text-[#ffffff] hover:text-[#ff980b]">
                        <Images
                          src={singleIcon?.image?.url}
                          alt={singleIcon?.image?.alternativeText}
                          height={18}
                          width={18}
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="py-12 border-t border-b container mx-auto">
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-[4rem]">
          {areaWeServeSectionData?.locations != undefined &&
            areaWeServeSectionData?.locations.length > 0 &&
            areaWeServeSectionData?.locations.map((singleLocation, index) => {
              return (
                <div key={index} className="">
                  <div className="xl:flex items-center gap-6 mb-4">
                    {singleLocation?.image?.url && (
                      <Images
                        src={singleLocation?.image?.url}
                        height={25}
                        width={30}
                        alt={singleLocation?.image?.alternativeText}
                      />
                    )}
                    <h5 className="text-[#0D1B2F] text-[2.2rem] leading-[2.6rem] font-bold hover:underline">
                      {singleLocation?.title}
                    </h5>
                    <span className="text-[#0D1B2F] text-[1.4rem] font-medium leading-[2.6rem]">{`(${singleLocation?.sector})`}</span>
                  </div>
                  {singleLocation?.links?.href && (
                    <Link
                      href={singleLocation?.links?.href}
                      target="_blank"
                      rel="nofollow"
                      className="text-[1.6rem] text-[#0D1B2F] font-medium leading-[2.6rem] hover:underline"
                    >
                      {singleLocation?.description}
                    </Link>
                  )}
                  <br />
                  <Link
                    href={
                      singleLocation?.contact[0]?.href !== undefined
                        ? singleLocation?.contact[0]?.href
                        : "/home"
                    }
                    legacyBehavior
                  >
                    <p className="text-[1.6rem] hover:underline font-medium leading-[2.6rem] text-[#0D1B2F] cursor-pointer">
                      {singleLocation?.contact[0]?.label !== undefined
                        ? singleLocation?.contact[0]?.label
                        : ""}
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="pb-32 container mx-auto">
        <p className="mt-4 text-[#0D1B2FCC] text-[1.8rem]">
          © 2024 Aspire SoftServ. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
