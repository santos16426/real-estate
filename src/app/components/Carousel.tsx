import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { cn } from "../utils/utils";

export const PhotoGallery = ({
  images,
  customSettings,
}: {
  images: string[];
  customSettings?: Settings;
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const defaultSettings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    beforeChange: (current: any, next: React.SetStateAction<number>) => {
      setActiveSlide(next);
    },
  };
  const settings = customSettings ? customSettings : defaultSettings;
  const goToSlide = (index: number): void => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="relative full-screen-slider h-full ">
      <Slider {...settings} ref={sliderRef}>
        {images.map((i, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${i})`,
                backgroundSize: "cover",
              }}
              className="w-full h-screen"
            ></div>
          </div>
        ))}
      </Slider>
      <div className="absolute items-center bottom-0 px-2 lg:bottom-[80px] bg-primary h-[100px] text-white w-full flex flex-row justify-center gap-2 sm:gap-5">
        <ChevronLeft
          className="hidden lg:flex bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 rounded-full"
          onClick={goToPrevSlide}
        />
        <div className="flex flex-row justify-center items-center gap-2 px-2 sm:gap-5 overflow-x-auto">
          {images.map((i, index) => (
            <div
              style={{
                backgroundImage: `url(${i})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100px",
                height: "80px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <ChevronRight
          className="hidden lg:flex bg-white bg-opacity-50 p-1 cursor-pointer hover:bg-opacity-25 active:bg-opacity-25 rounded-full"
          onClick={goToNextSlide}
        />
      </div>
    </div>
  );
};
