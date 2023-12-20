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
        <div className={styles.overlay}/>
        <Slider/>
    </div>
)}

export default Homepage;