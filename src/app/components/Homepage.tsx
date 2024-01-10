import { useState } from "react";
import { useAppContext } from "@/app/context/AppContext";
import GoogleMapsComponent from "./Map";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const Homepage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");

  const priceRanges = [
    { label: "Any Price", value: "any" },
    { label: "5M - 10M", value: "5-10" },
    { label: "10M - 15M", value: "10-15" },
    { label: "15M - 20M", value: "15-20" },
    { label: "20M and above", value: "20+" },
  ];

  const handleSearch = () => {
    console.log("Search:", {
      searchText,
      propertyType,
      priceRange,
    });
  };

  const bgStyle = {
    backgroundImage: "url('/images/home-banner.jpg')",
  };

  return (
    <div className="relative h-screen flex flex-row">
      <div style={bgStyle} className="bg-cover bg-center h-full w-full">
        <div className="bg-black bg-opacity-50 h-full flex flex-col p-8">
          <div className="text-[2.1rem] lg:text-[3rem] text-white mt-24 lg:mt-52">
            Discover Your Epic Home Journey with{" "}
            <div className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-primary">
              EpicEstate
            </div>
          </div>
          <div className="text-[1rem] lg:text-[2rem] text-[#d9d9d9]">
            Where Dreams Meet Realty
          </div>
        </div>
      </div>
      <div className="text-left scale-[90%] lg:scale-100 w-11/12 absolute z-10 text-white p-8 left-1/2 bottom-[5px] lg:bottom-[20px] -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur-[1px]">
        <div>
          <div className="text-xl mb-2">
            Find Your <div className="inline font-semibold">Dream Home</div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <Input
              className="flex-grow text-black text-sm lg:text-xl py-6 capitalize font-semibold"
              type="text"
              placeholder="Where is your target location..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Select
              value={propertyType}
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

            <Select value={priceRange} onValueChange={(e) => setPriceRange(e)}>
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

      <div className="bg-blue-50 h-full w-full lg:block hidden brightness-95">
        <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} />
      </div>
    </div>
  );
};

export default Homepage;
