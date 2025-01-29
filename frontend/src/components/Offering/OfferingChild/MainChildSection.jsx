import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import AspireEdge from "./AspireEdge";
import KeyOfferning from "./KeyOfferning";
import Technologies from "./Technologies";
import OurProcess from "./OurProcess";
import Client from "./Client";

const MainChildSection = ({ offerningPageData }) => {
  const [activeSection, setActiveSection] = useState("");
  const overviewRef = useRef(null);
  const aspireEdgeRef = useRef(null);
  const keyOfferningRef = useRef(null);
  const technologiesRef = useRef(null);
  const ourProcessRef = useRef(null);
  const clientTestimonialsRef = useRef(null);

  const sectionRefs = {
    overview: overviewRef,
    aspireEdge: aspireEdgeRef,
    keyOfferning: keyOfferningRef,
    technologies: technologiesRef,
    ourProcess: ourProcessRef,
    clientTestimonials: clientTestimonialsRef,
  };

  const handleScrollToSection = (sectionId) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef?.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section"));
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const sectionBgColors = {
    overview: "bg-white",
    aspireEdge: "bg-white",
    keyOfferning: "bg-gradient-to-t from-[#FFFFFF] to-[#F5F4FA]",
    technologies: "bg-[#F5F4FA]",
    ourProcess: "bg-white",
    clientTestimonials: "bg-white",
  };

  return (
    <div className="flex overflow-x-hidden mx-auto">
      {/* Sidebar */}
      <div
        className={`w-1/4 hidden lg:block transition-colors duration-500 ${
          sectionBgColors[activeSection] || "bg-white"
        }`}
      >
        <Sidebar
          activeSection={activeSection}
          handleScrollToSection={handleScrollToSection}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow ">
        {/* Overview Section */}
        <div data-section="overview" ref={overviewRef} className="w-full">
          <Overview
            overviewPageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentOverviewOverview"
            )}
          />
        </div>

        {/* Aspire Edge Section */}
        <div data-section="aspireEdge" ref={aspireEdgeRef} className="w-full ">
          <AspireEdge
            AspireEdgeSlicePageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentAspireEdgeSliceAspireEdgeSlice"
            )}
          />
        </div>

        {/* Key Offerning Section */}
        <div data-section="keyOfferning" ref={keyOfferningRef} className="w-full ">
          <KeyOfferning
            KeyOfferningPageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentKeyOfferningSliceKeyOfferningSlice"
            )}
          />
        </div>

        {/* Technologies Section */}
        <div data-section="technologies" ref={technologiesRef} className="w-full ">
          <Technologies
            TechnologyPageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentTechnologiesSlicesTechnologiesSlices"
            )}
          />
        </div>

        {/* Our Process Section */}
        <div data-section="ourProcess" ref={ourProcessRef} className="w-full ">
          <OurProcess
            OurProcessPageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentOfferningSliceOurProccess"
            )}
          />
        </div>

        {/* Client Testimonials Section */}
        <div data-section="clientTestimonials" ref={clientTestimonialsRef} className="w-full ">
          <Client
            ClientPageData={offerningPageData?.offerningSlices?.filter(
              (slice) => slice.__typename === "ComponentOfferningSliceClientTestimonialSlice"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MainChildSection;
