import React from "react";

const Sidebar = ({ activeSection, handleScrollToSection }) => {
  const sidebarItems = [
    { title: "Overview", sectionId: "overview" },
    { title: "Aspire Edge", sectionId: "aspireEdge" },
    { title: "Key Offerings", sectionId: "keyOfferning" },
    { title: "Technologies", sectionId: "technologies" },
    { title: "Our Process", sectionId: "ourProcess" },
    { title: "Client Testimonials", sectionId: "clientTestimonials" },
  ];

  return (
    <div className="sticky top-40">
      <div className="gap-4 p-8">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`mb-12 container ${
              activeSection === item.sectionId ? "text-[#FD644F]" : "text-[#0D1B2F]"
            }`}
          >
            {item?.title && (
              <p
                onClick={() => handleScrollToSection(item.sectionId)}
                className="text-[20px] hover:text-[#FD644F] block relative pl-6 cursor-pointer before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-full before:w-1 before:bg-transparent hover:before:bg-[#FD644F] transition-all duration-300"
              >
                {item.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
