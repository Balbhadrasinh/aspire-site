// pages/offerings.js
import React from "react";

const OfferingsMenu = ({ offeringData }) => {
  return (
    <div className=" bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Offerings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offeringData?.tab.map((tab, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {tab.mainTitle.label} {/* Access the label from mainTitle */}
            </h2>
            <ul className="space-y-2">
              {tab.subTitle.map((sub, subIndex) => (
                <li key={subIndex}>
                  <a
                    href={sub.href}
                    target={sub.target || "_self"}
                    className="text-blue-500 hover:underline"
                  >
                    {sub.label} {/* Access the label from subTitle */}
                  </a>
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
