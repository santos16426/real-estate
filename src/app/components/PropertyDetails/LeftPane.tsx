import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./LeftPane.module.scss"; // Import your module.scss file
import Image from 'next/image'
type LeftPaneProps = {
  propertyId: string | undefined;
};

const LeftPane: React.FC<LeftPaneProps> = ({ propertyId }) => {
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  const images = [
    {
      original: "/images/interior-1.jpg",
      thumbnail: "/images/interior-1.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-2.jpg",
      thumbnail: "/images/interior-2.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-3.jpg",
      thumbnail: "/images/interior-3.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-4.jpg",
      thumbnail: "/images/interior-4.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-5.jpg",
      thumbnail: "/images/interior-5.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-6.jpg",
      thumbnail: "/images/interior-6.jpg",
      originalClass: "image-gallery-item",
    },
    {
      original: "/images/interior-7.jpg",
      thumbnail: "/images/interior-7.jpg",
      originalClass: "image-gallery-item",
    },
  ];

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: styles.slider1,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    className: styles.slider2,
  };

  const goToSlide = (index: number) => {
    slider1.current?.slickGoTo(index);
  };
  return (
    <div className={`${styles.leftPane} shadow-lg`}>
      <Slider {...settings1} ref={slider1}>
        {images.map((image, index) => (
          <div key={index} className={styles.backgroundImageContainer}
          >
            <Image width={1000} height={1000} src={image.original} alt={`Slide ${index}`} className={styles.backgroundImage} />
          </div>
        ))}
      </Slider>

      <div className={styles.thumbnailContainer}>
        <Slider {...settings2} ref={slider2}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.thumbnailImageContainer}
              onClick={() => goToSlide(index)}
            >
              <Image width={200} height={200} src={image.thumbnail} alt={`Thumbnail ${index}`} className={styles.thumbnailImage} />
            </div>
          ))}
        </Slider>
        {/* <button className={styles.toggleButton} onClick={toggleThumbnails}>
          {showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
        </button> */}
      </div>
    </div>
  );
};

export default LeftPane;
