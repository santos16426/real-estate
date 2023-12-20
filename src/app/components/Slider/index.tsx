import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Slider.module.scss'
import { useAppContext } from '@/app/context/AppContext';

const Slider = () => {
    const {slider, properties, blog} = useAppContext();
    useEffect(() => {
        const intervalId = setInterval(() => {
        slider.setActiveIndex((prevIndex) => (prevIndex + 1) % properties.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [slider, properties.length]);
    const handleCardClick = (index: number) => {
        slider.setActiveIndex(index);
    };
    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.5,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    };
    
  
  return (
    <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        containerClass={styles.sliderContainer}
    >
      {[...Array(properties.length)].map((_, index) => {
        return(
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          className={`${styles.picture} ${slider.activeIndex === index && styles.active} `}
          style={{
            backgroundImage: `url(${properties[index].image})`,
          }}
        >
            <div className={styles.title}>{properties[index].title}</div>
        </div>
      )})}
    </Carousel>
  );
};

export default Slider;
