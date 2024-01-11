import { useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useAppContext } from "../context/AppContext";

type Props = {};

const PropertyFinder = (props: Props) => {
  const [location, setLocation] = useState<string | null>(null);
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const priceRanges = [
    { label: "Any Price", value: "any" },
    { label: "5M - 10M", value: "5-10" },
    { label: "10M - 15M", value: "10-15" },
    { label: "15M - 20M", value: "15-20" },
    { label: "20M and above", value: "20+" },
  ];
  const { searchFilter } = useAppContext();
  const handleSearch = () => {
    searchFilter.setSearchFilters({
      location,
      propertyType,
      priceRange,
    });
  };
  return (
    <div className="text-left  text-white p-8  bg-black bg-opacity-50 backdrop-blur-[1px]">
      <div>
        <div className="text-xl mb-2">
          Find Your{" "}
          <span className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-primary">
            Dream Home
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <Input
            className="flex-grow text-black text-sm lg:text-xl py-6 capitalize font-semibold"
            type="text"
            placeholder="Where is your target location..."
            value={location || ""}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Select
            value={propertyType || ""}
            onValueChange={(e) => setPropertyType(e)}
          >
            <SelectTrigger className="text-black py-6 font-semibold w-full lg:w-1/4">
              <SelectValue placeholder="Select Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="font-semibold text-md" value="any">
                Any
              </SelectItem>
              <SelectItem className="font-semibold text-md" value="house">
                House
              </SelectItem>
              <SelectItem className="font-semibold text-md" value="apartment">
                Apartment
              </SelectItem>
              <SelectItem className="font-semibold text-md" value="condo">
                Condo
              </SelectItem>
              <SelectItem className="font-semibold text-md" value="townhouse">
                Townhouse
              </SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={priceRange || ""}
            onValueChange={(e) => setPriceRange(e)}
          >
            <SelectTrigger className="text-black py-6 font-semibold w-full lg:w-1/4">
              <SelectValue placeholder="Select Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range, index) => (
                <SelectItem
                  className="font-semibold text-md"
                  value={range.value}
                  key={index}
                >
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button
            className="rounded-md flex-flex-row whitespace-nowrap bg-primary text-white px-4 py-2 w-full lg:w-fit transition-all duration-300 hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-200"
            onClick={handleSearch}
          >
            Search
            <span>
              <i className="ml-2 p-0 bx bx-search-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFinder;
