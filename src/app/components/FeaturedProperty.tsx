import React from "react";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import mockProject from "@/app/mocks/property.json";
import { TCoordinates, TProperty, TPropertyType } from "../utils/types";
const FeaturedProperty: React.FC = () => {
  const featuredProperties: TProperty[] = mockProject
    .filter((p) => p.featured)
    .map((project) => ({
      name: project.name,
      alias: project.alias,
      type: project.type as TPropertyType,
      image: project.image,
      description: project.description,
      location: {
        city: project.location.city,
        coordinates: {
          lat: project.location.coordinates.lat,
          long: project.location.coordinates.long,
        } as TCoordinates,
      },
      priceRange: project.priceRange,
      featured: project.featured,
    }));
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg.jpeg)",
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
      className="flex flex-col  py-20 gap-10 items-center relative bg-fixed"
    >
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="sticky text-center">
        <p className="text-3xl  text-white font-semibold inline bg-gradient-to-b from-transparent from-50% to-50% to-primary">
          Feature Properties
        </p>
        <p>
          {`
            Discover your ideal home with EpicEstate's diverse range of properties nationwide.
          `}
        </p>
      </div>
      <div
        style={{
          animationTimeline: "scroll(y)",
          transformOrigin: "left",
          animationRangeStart: "cover 0vh",
          animationRangeEnd: "cover 70vh",
        }}
        className="flex flex-row flex-wrap gap-10 justify-center items-center lg:-translate-x-1/2 lg:animate-slideIn"
      >
        {featuredProperties.map((project, index) => (
          <PropertyCard key={index} {...project} />
        ))}
      </div>
      <Link
        href={"/properties"}
        className="cursor-pointer z-10 text-white hover:underline underline-offset-4"
      >
        <p>View more properties</p>
      </Link>
    </div>
  );
};

export default FeaturedProperty;
