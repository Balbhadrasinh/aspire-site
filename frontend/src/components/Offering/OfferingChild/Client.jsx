import { useQuery } from '@apollo/client';
// import { GET_CLIENT_DATA } from '@/src/utils/graphQL/OfferingChildPage'; // Import the query
import { OFFERING_QUERY } from "@/src/utils/graphQL/OfferingChildPage"; // Import the query

import React from 'react';
import Images from "../../Shared/Image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomCarousel = ({ clientData }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = clientData.clientProfile ? clientData.clientProfile.length : 0;
  const autoSlideInterval = React.useRef(null);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  React.useEffect(() => {
    autoSlideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDifference = touchStartX.current - touchEndX.current;
    if (touchDifference > 50) {
      nextSlide();
    } else if (touchDifference < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative bg-white rounded-lg mb-2"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div className="flex items-center mb-[60px] md:mb-18">
          <span className="text-[60px] md:text-[80px] text-[#0D1B2F] mb-4 md:mb-6 ">"</span>
          <blockquote className="text-[#0D1B2FCC] text-[14px] sm:text-[16px] lg:text-[20px] line-clamp-3 overflow-hidden">
            <p>{clientData.clientProfile[currentSlide]?.story}</p>
          </blockquote>
        </div>

        <div className="relative flex items-center">
          {/* Client Details */}
          <div className="flex items-center bg-[#0D1B2F] w-full md:w-[307px] h-auto rounded-xl p-4 md:p-6">
            {clientData.clientProfile[currentSlide]?.clientPic?.url && (
              <Images
                src={clientData.clientProfile[currentSlide]?.clientPic?.url}
                alt={clientData.clientProfile[currentSlide]?.clientName || "Client Image"}
                width={60}
                height={60}
              />
            )}
            <div className="ml-2 md:ml-4">
              <h6 className="text-lg md:text-xl font-semibold text-white">
                {clientData.clientProfile[currentSlide]?.clientName}
              </h6>
              <p className=" text-[12px] sm:text-[12px] lg:text-[16px] text-white">{clientData.clientProfile[currentSlide]?.clientDesignation}</p>
            </div>
          </div>
          <div className="absolute top-2/2 right-0 transform -translate-y-2/2 -translate-x-[60px] hidden sm:block">
            <button
              onClick={prevSlide}
              className="cursor-pointer p-3 bg-gray-100 rounded-full border-2 border-transparent hover:border-[#0D1B2F] transition-all"
            >
              <FaArrowLeft size={24} className="text-[#0D1B2F]" />
            </button>
          </div>
          <div className="absolute top-2/2 right-0 text-xl md:text-2xl transform -translate-y-2/2 -translate-x-[200px] text-[#0D1B2F] font-semibold hidden sm:block">
            {currentSlide + 1} of {totalSlides}
          </div>
          <div className="absolute top-2/2 right-0 transform -translate-y-2/2  -translate-x-[10px] hidden sm:block">
            <button
              onClick={nextSlide}
              className="cursor-pointer p-3 bg-gray-100 rounded-full border-2 border-transparent hover:border-[#0D1B2F] transition-all"
            >
              <FaArrowRight size={24} className="text-[#0D1B2F]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Client = () => {
  // Fetch data using Apollo Client's useQuery hook
  const { data, loading, error } = useQuery(OFFERING_QUERY);
  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error.message}</div>; // Error state

  // Extracting the Overview data
  const clientData = data?.offerningChildPages?.[0]?.offeringChild?.filter(
    (child) => child.__typename === "ComponentOfferingChildSliceClientTestimonial"
  );

  if (!clientData || clientData.length === 0) {
    return <div>No Overview Data Available</div>; // Fallback if no data
  }

//   // Log the data for debugging purposes
//   console.log("GraphQL Data:", data);  // Make sure to check this log to see the exact structure

//   if (loading) return <div>Loading...</div>;
//   if (error) {
//     console.error("GraphQL Error:", error); // Add more error details
//     return <div>Error: {error.message}</div>;
//   }

//   // Ensure data exists and is structured properly
//   const clientData = data?.offeringChildPages?.[0]?.offeringChild?.filter(
//     (child) => child?.__typename === "ComponentOfferingChildSliceClientTestimonial"
//   );

//   if (!clientData || clientData.length === 0) {
//     return <div>No Client Data Available</div>;
//   }

  return (
    <div className="bg-white container mx-auto py-8">
      {clientData?.map((client, index) => (
        <div key={index} className="">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
              <div className="bg-white rounded-lg">
                <h2 className="text-[#0D1B2F] text-[24px] sm:text-[28px] lg:text-[36px] font-bold mb-4">
                  {client.Heading}
                </h2>
                <CustomCarousel clientData={client} />
              </div>
              <div className="bg-[#0D1B2F] p-4 md:p-6 rounded-lg text-white">
                {client.image?.url && (
                  <div className="mb-2">
                    <Images
                      src={client.image?.url}
                      alt={client.Heading || "Client Image"}
                      width={client.image?.width}
                      height={client.image?.height}
                      className="rounded-lg"
                    />
                  </div>
                )}
                {client.caseDescription && (
                  <p className=" text-[12px] sm:text-[12px] lg:text-[16px]mb-6">{client.caseDescription}</p>
                )}
                {client.caseBtn && client.link?.href && (
                  <a
                    href={client.link?.href}
                    className="inline-flex items-center text-[12px] text-white py-3 px-4 rounded-md bg-gradient-to-r from-[#FF5E3A] to-[#FF2A68] hover:bg-gray-700"
                  >
                    {client.caseBtn} <FaArrowRight className="ml-2 text-[15px]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Client;
