import { useEffect, useState } from 'react';
import styles from './Homepage.module.scss'
import Slider from '../Slider';

type HomepageProps = {
    imagePath : string;
    setActiveIndex : React.Dispatch<React.SetStateAction<number>>;
    selectedIndex : number;
}
const Homepage:React.FC<HomepageProps> = ({imagePath, setActiveIndex, selectedIndex}) => {
    const bgStyle = {
        backgroundImage : `url(${imagePath})`,
    }
    const [backgroundClass, setBackgroundClass] = useState(styles.fadeIn);
    useEffect(() => {
        setBackgroundClass(styles.fadeOut);
        const timeoutId = setTimeout(() => {
          setBackgroundClass(styles.fadeIn);
        }, 100); 
        return () => clearTimeout(timeoutId);
      }, [selectedIndex]);
    
    
      const handleSliderChange = (event: { index: number }) => {
        setActiveIndex(event.index);
        setBackgroundClass(styles.fadeOut);
    
        const timeoutId = setTimeout(() => {
          setBackgroundClass(styles.fadeIn);
        }, 100); 
      };
    
    return(
    <div style={bgStyle} className={`${styles.background} ${backgroundClass}`} >
        <div className={styles.overlay}></div>
        <Slider totalItems={6} activeIndex={selectedIndex} onChange={handleSliderChange} />
    </div>
)}

export default Homepage;