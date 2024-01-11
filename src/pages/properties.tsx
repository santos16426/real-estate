import Header from "@/app/components/Header";
import GoogleMapsComponent from "@/app/components/Map";
import PropertyFinder from "@/app/components/PropertyFinder";
import { useAppContext } from "@/app/context/AppContext";
import { TCoordinates, TProperty, TPropertyType } from "@/app/utils/types";
import { useEffect } from "react";
import mockProject from "@/app/mocks/property.json";
import PropertyCard from "@/app/components/PropertyCard";
import { ScrollArea } from "@/app/components/ui/scroll-area";

const PropertiesList = () => {
  const { searchFilter } = useAppContext();
  const { searchFilters } = searchFilter;
  let projects: TProperty[] = mockProject.map((project) => ({
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
  useEffect(() => {
    if (searchFilters?.priceRange) {
    }
    if (searchFilters?.location) {
    }
    if (searchFilters?.priceRange) {
    }
  }, [searchFilters]);
  return (
    <>
      <div
        className="relative h-screen flex flex-col lg:flex-row"
        style={{
          backgroundImage: "url(/images/bg.jpeg)",
          backgroundPosition: "top left",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-40"></div>

        <div className="h-full w-full flex flex-col pt-[60px] lg:pt-[75px] text-white">
          <PropertyFinder />
          <p className="text-2xl z-10 mx-8 mt-5">
            List of{" "}
            <span className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-primary">
              Properties
            </span>
          </p>
          <ScrollArea className="p-2 lg:p-8 z-10">
            <div className="flex flex-row flex-wrap gap-2">
              {projects.map((project, index) => (
                <PropertyCard key={index} {...project} className="scale-90" />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="h-full w-full">
          <GoogleMapsComponent
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          />
        </div>
      </div>
    </>
  );
};
export default PropertiesList;
