import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';

type SliderChangeEventType = {
    index: number;
};

type SliderProps = {
    totalItems : number;
    activeIndex : number;
    onChange: (event: SliderChangeEventType) => void;
}

const Slider:React.FC<SliderProps> = ({ totalItems, activeIndex, onChange }) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const bgImages: string[] = [
    "/images/property-1.jpg",
    "/images/property-2.jpg",
    "/images/property-3.jpg",
    "/images/property-4.jpg",
    "/images/property-5.jpg",
    "/images/property-66.jpg",
    "/images/property-7.jpg",
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      onChange({ index: currentIndex });
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [currentIndex, totalItems, onChange]);

  
  return (
    // <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
        {bgImages.map((picture, index) => (
            <div
            key={index}
            className={`${styles.picture} ${index === currentIndex && styles.active}`}
            style={{ 
                backgroundImage: `url(${picture})`,
            }}
            onClick={() => {
                setCurrentIndex(index);
                onChange({ index });
            }}
            ></div>
        ))}
        </div>
    // </div>
  );
};

export default Slider;
