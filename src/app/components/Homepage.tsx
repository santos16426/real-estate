import { useAppContext } from "@/app/context/AppContext";
import GoogleMapsComponent from "./Map";
import PropertyFinder from "./PropertyFinder";

const Homepage: React.FC = () => {
  const bgStyle = {
    backgroundImage: "url('/images/home-banner.jpg')",
  };

  return (
    <div className="relative h-screen flex flex-row">
      <div
        style={bgStyle}
        className="bg-cover bg-center h-full w-full bg-blend-hard-light"
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col p-8">
          <div className="text-[2.1rem] lg:text-[3rem] text-white mt-24 lg:mt-52">
            Discover Your Epic Home Journey with{" "}
            <div className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-primary">
              EpicEstate
            </div>
          </div>
          <div className="text-[1rem] lg:text-[1.8rem] text-white opacity-75">
            Where Dreams Meet Realty
          </div>
        </div>
      </div>
      <div className="scale-[90%] lg:scale-100 w-9/12 absolute z-10 left-1/2 bottom-[5px] lg:bottom-[20px] -translate-x-1/2">
        <PropertyFinder />
      </div>

      <div className="bg-blue-50 h-full w-full lg:block hidden brightness-95">
        <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} />
      </div>
    </div>
  );
};

export default Homepage;
