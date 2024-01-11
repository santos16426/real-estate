// pages/properties/[propertyId].tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/app/components/Header";
import { useAppContext } from "@/app/context/AppContext";
import mockProject from "@/app/mocks/property.json";
import PropertyDetails from "@/app/components/PropertyDetails";
import PropertyNotFound from "@/app/components/PropertyNotFound";
import { BookImage, Layers3, Share2 } from "lucide-react";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const propertyId = Array.isArray(router.query.propertyId)
    ? router.query.propertyId[0]
    : typeof router.query.propertyId === "string"
    ? router.query.propertyId
    : undefined;
  const property = mockProject.find((p) => p.alias === propertyId);
  const { properties } = useAppContext();
  const { activeTab } = properties;
  const Controller = () => (
    <div className="absolute cursor-pointer top-[100px] right-0 gap-2 flex flex-col">
      <div className="relative flex flex-col gap-2 items-end">
        <div className="hover:gap-2  w-fit flex shrink flex-row justify-center group text-white items-center bg-black bg-opacity-70 p-4">
          <BookImage />
          <div className="overflow-hidden max-w-0 gallery-item group-hover:max-w-full ease-in-out transition-all duration-300">
            Gallery
          </div>
        </div>
        <div className="hover:gap-2  w-fit flex shrink flex-row justify-center group text-white items-center bg-black bg-opacity-70 p-4">
          <Layers3 />
          <div className="overflow-hidden max-w-0 gallery-item group-hover:max-w-full ease-in-out transition-all duration-300">
            Area
          </div>
        </div>
        <div className="hover:gap-2  w-fit flex shrink flex-row justify-center group text-white items-center bg-black bg-opacity-70 p-4">
          <Share2 />
          <div className="overflow-hidden max-w-0 gallery-item group-hover:max-w-full ease-in-out transition-all duration-300">
            Gallery
          </div>
        </div>
      </div>
    </div>
  );
  const HasProperty = () => (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-screen shadow-xl lg:fixed">
        <div className="relative pt-[75px]">
          {activeTab}
          <Controller />
        </div>
      </div>
      <div className="lg:w-1/2 lg:ml-[50%] right-0">
        <PropertyDetails propertyId={propertyId} />
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {property ? <HasProperty /> : <PropertyNotFound />}
    </>
  );
};

export default PropertyPage;
