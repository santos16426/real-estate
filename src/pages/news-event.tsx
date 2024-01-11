import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import mockNewsEvent from "@/app/mocks/news-event.json";
import Link from "next/link";
import NewsEventCard from "@/app/components/NewsEventCard";
import { TNewsEvent, TNewsEventType } from "@/app/utils/types";
const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 15000,
  slidesToShow: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const newsAndEvent: TNewsEvent[] = mockNewsEvent.map((ne) => ({
  name: ne.name,
  alias: ne.alias,
  featured: ne?.featured,
  description: ne.description,
  date: ne.date,
  bannerPhoto: ne.bannerPhoto,
  type: ne.type as TNewsEventType,
}));
const NewsAndEvent = () => (
  <>
    <div className="sliderWrapper">
      <div className="pt-[75px] flex-wrap text-center">
        <div className="py-20 flex flex-col justify-center items-center px-5">
          <p className="font-semibold text-2xl lg:text-3xl">News and Event</p>
          <p className="lg:w-2/4">
            Stay informed and engaged with the latest happenings around the
            world and in your community. Our News and Events section is your
            go-to source for breaking news, insightful articles, and exciting
            happenings.
          </p>
        </div>
        <div className="relative full-screen-slider min-h-1/2 w-full mt-10">
          <Slider {...settings} className="sliderContainer">
            {mockNewsEvent
              .filter((n) => n.featured)
              .map((newsEvent, index) => {
                return (
                  <div key={index} className="shadow-xl shadow-gray-500">
                    <div
                      style={{
                        backgroundImage: `url(${newsEvent.bannerPhoto})`,
                        backgroundSize: "cover",
                      }}
                      className="w-full h-[300px]  flex flex-col justify-center items-center relative"
                    >
                      <div className="absolute top-0 left-0 h-full w-full z-[1] bg-black bg-opacity-50" />
                      <p className="z-10 text-3xl text-white font-bold">
                        {newsEvent.name}
                      </p>
                      <Link
                        href={`/news-event/${newsEvent.alias}`}
                        className="z-10 mt-5 text-xs"
                      >
                        <button className="text-white border-[1px] px-3 py-2">
                          View article
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
    <div className="mt-28 flex flex-col ">
      <div className="flex flex-col justify-center items-center px-5">
        <p className="font-semibold text-2xl lg:text-3xl">Other articles</p>
        <p className="lg:w-2/4 text-sm text-center">
          Explore more insightful articles that cover a diverse range of topics.
          Our collection goes beyond the headlines, offering you a rich variety
          of content to spark your curiosity and broaden your perspectives.
        </p>
      </div>
      <div className="mt-16 px-5 lg:px-32 flex flex-col lg:flex-row flex-wrap gap-5 items-center justify-center">
        {newsAndEvent.map((ne, index) => (
          <div className="w-fit">
            <NewsEventCard key={index} {...ne} />
          </div>
        ))}
      </div>
    </div>
  </>
);
export default NewsAndEvent;
