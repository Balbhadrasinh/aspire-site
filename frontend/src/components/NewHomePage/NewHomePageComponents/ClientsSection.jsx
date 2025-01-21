import Images from "../../Shared/Image";
import React from "react";

const ClientsSection = ({ clientData }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container w-[80%] mx-auto px-4">
        <h2 className="font-bold text-center mb-8">{clientData?.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clientData?.firstImageRow?.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white"
            >
              <div className="flex items-center justify-center w-full h-40">
                <Images
                  src={client?.image?.url}
                  alt={client?.name || "client logo"}
                  width={client?.image?.width || 120}
                  height={client?.image?.height || 150}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
