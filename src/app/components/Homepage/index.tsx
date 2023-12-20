import { useEffect, useState } from 'react';
import styles from './Homepage.module.scss'
import Slider from '../Slider';
import { useAppContext } from '@/app/context/AppContext';

const Homepage = () => {
    const {slider, properties, blog} = useAppContext();

    const bgStyle = {
        backgroundImage : `url(${properties[slider.activeIndex].image})`,
    }
    const [backgroundClass, setBackgroundClass] = useState(styles.fadeIn);
    useEffect(() => {
        setBackgroundClass(styles.fadeOut);
        const timeoutId = setTimeout(() => {
          setBackgroundClass(styles.fadeIn);
        }, 100); 
        return () => clearTimeout(timeoutId);
      }, [slider.activeIndex]);
    
    return(
    <div style={bgStyle} className={`${styles.background} ${backgroundClass}`} >
        <div className={`${styles.description} w-1/4 text-left `}>
            <div className='bg-black bg-opacity-40 px-12 py-4 w-full text-white'>
                <p className={`${styles.title} text-3xl`}>{properties[slider.activeIndex].title}</p>
                <p className={styles.propertyType}>{properties[slider.activeIndex].type}</p>
                <p className={styles.shortDescription}>{properties[slider.activeIndex].shortDescription}</p>
            </div>
        </div>
        <div className={styles.overlay}/>
        <Slider/>
    </div>
)}

export default Homepage;