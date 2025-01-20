import React from "react";
import Link from "next/link";
import { formatDateProcess } from "../../utils/Commons";
import Links from "./Links";
import Images from "./Image";
import Icon from "../icons/icon";

const LatestBlogs = ({ latestBlogs, latestBlogsData }) => {
  return (
    <div className="sm:py-40 py-32 px-4 sm:px-12 md:px-0">
      <div className="container mx-auto transition-all duration-500">
        <p className="mb-[0.8rem] uppercase font-extrabold text-[1.6rem] text-[#015eea]">
          {latestBlogs?.title}
        </p>
        <div className="sm:flex justify-between items-center lblogs-two">
          <h2 className="sm:mb-0 mb-8">{latestBlogs?.heading}</h2>
          <div className="mt-2 btn-primary group border w-1/3 md:w-fit mh-button border-[#FF980B] bg-[#FF980B]">
            <Links
              className=""
              href={latestBlogs?.button?.link?.href}
              label={latestBlogs?.button?.link?.label}
              target={latestBlogs?.button?.link?.target}
            />
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-14 gap-10">
          {latestBlogsData?.blogs?.data?.map((latestBlogDetails, index) => {
            return (
              <div
                className="card w-full 2xl:max-w-[420px] blog-card-shadow rounded-2xl mx-auto text-center lg:text-left lg:block transition-all hover:-translate-y-2 duration-300 overflow-hidden"
                key={latestBlogDetails?.id + "" + index}
              >
                <Link
                  href={`/blog/${latestBlogDetails?.attributes?.slug}`}
                  className=""
                >
                  <div className="relative group">
                    {latestBlogDetails?.attributes?.titleImg?.data?.attributes
                      ?.url != undefined &&
                      latestBlogDetails?.attributes?.titleImg?.data?.attributes
                        ?.alternativeText != undefined && (
                        <Images
                          width={500}
                          height={310}
                          src={
                            latestBlogDetails?.attributes?.titleImg?.data
                              ?.attributes?.url
                          }
                          alt={
                            latestBlogDetails?.attributes?.main_image?.data
                              ?.attributes?.alternativeText
                          }
                          className="object-cover"
                        />
                      )}
                    {latestBlogDetails?.attributes?.number != undefined &&
                      latestBlogDetails?.attributes?.number != null && (
                        <div className="w-28 h-10 rounded-md opacity-100  absolute left-1/2 right-0 top-10  z-10 flex justify-center items-center bg-white text-gray-700 uppercase font-semibold">
                          {latestBlogDetails?.attributes?.number} min read
                        </div>
                      )}
                  </div>
                  <div className="px-12 py-8">
                    <div className="flex items-center lblogs-three">
                      <h4 className="text-[1.8rem] text-yearsYellow font-bold">
                        {
                          latestBlogDetails?.attributes?.categories?.data[0]
                            ?.attributes?.title
                        }
                      </h4>
                      <div className="mt-1 mx-6">
                        <Icon name="circle" size={8} color="#525252" />
                      </div>
                      <span className="font-medium text-[1.4rem] mt-2 text-gray-600">
                        {formatDateProcess(latestBlogDetails?.attributes?.date)}
                      </span>
                    </div>
                    <h2 className="lbogs-four font-bold text-[2.4rem] text-left leading-[3rem] my-4 text-[#0c264c]">
                      {latestBlogDetails?.attributes?.title}
                    </h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default LatestBlogs;
