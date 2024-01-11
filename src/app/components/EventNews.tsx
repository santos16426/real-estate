import React from "react";
// import PropertyCard from "./PropertyCard";
import mockNewsAndEvent from "@/app/mocks/news-event.json";
import { TNewsEvent, TNewsEventType } from "../utils/types";
import Link from "next/link";
import NewsEventCard from "./NewsEventCard";
const EventNews: React.FC = () => {
  const featuredNewsAndEvent: TNewsEvent[] = mockNewsAndEvent.map((ne) => ({
    name: ne.name,
    description: ne.description,
    date: ne.date,
    bannerPhoto: ne.bannerPhoto,
    type: ne.type as TNewsEventType,
  }));
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex flex-col  py-20 gap-10 items-center relative bg-fixed"
    >
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="sticky text-center">
        <p className="text-3xl  text-white font-semibold inline bg-gradient-to-b from-transparent from-50% to-50% to-primary">
          News and Events
        </p>
        <p className="text-white">
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
        {featuredNewsAndEvent.map((ne, index) => (
          <NewsEventCard key={index} {...ne} />
        ))}
      </div>
      <Link
        href={"/news-event"}
        className="cursor-pointer z-10 text-white hover:underline underline-offset-4"
      >
        <p>View more articles</p>
      </Link>
    </div>
  );
};

export default EventNews;
