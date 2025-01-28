import Link from "next/link";
import React from "react";

const OfferingsMenu = ({ offeringData }) => {
  return (
    <div className=" bg-gray-100 p-8">
      <div className="grid grid-cols-3 px-24 py-12 gap-12">
        {offeringData?.tab &&
          offeringData?.tab.map((tab, index) => (
            <div key={index} className="">
              <h2 className="text-[#0D1B2F] font-[600] text-[2rem] mb-8">
                {tab?.mainTitle?.label}
              </h2>
              <ul className="space-y-8 px-12 py-4 border-l-4 border-[#0D1B2F66] border-opacity-40">
                {tab?.subTitle &&
                  tab?.subTitle.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub?.href}
                        target={sub?.target || "_self"}
                        className="text-[#0D1B2F] font-[400] text-[1.8rem] hover:underline"
                      >
                        {sub?.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OfferingsMenu;
