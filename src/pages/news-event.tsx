import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

import mockNewsEvent from "@/app/mocks/news-event.json";
import Link from "next/link";
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
        slidesToShow: 3,
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
const NewsAndEvent = () => (
  <>
    <div className="sliderWrapper">
      <div className="pt-[75px] flex-wrap text-center">
        <div className="py-20 flex flex-col justify-center items-center">
          <p className="font-semibold text-3xl">News and Event</p>
          <p className="w-2/4">
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
  </>
);
export default NewsAndEvent;
