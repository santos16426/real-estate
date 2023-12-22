import { useEffect, useState } from 'react';
import styles from './Homepage.module.scss';
import Slider from '../Slider';
import { useAppContext } from '@/app/context/AppContext';
import Link from 'next/link';

const Homepage = () => {
  const { slider, properties, blog } = useAppContext();
  const [searchText, setSearchText] = useState<string>('');
  const [propertyType, setPropertyType] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [isPropertyFinderVisible, setPropertyFinderVisibility] = useState(false);

  const priceRanges = [
    { label: 'Any Price', value: '' },
    { label: '5M - 10M', value: '5-10' },
    { label: '10M - 15M', value: '10-15' },
    { label: '15M - 20M', value: '15-20' },
    { label: '20M and above', value: '20+' },
  ];

  const handleSearch = () => {
    // Handle search logic here based on searchText, propertyType, and priceRange
    console.log('Search:', {
      searchText,
      propertyType,
      priceRange: `${priceRange[0]}M - ${priceRange[1]}M`,
    });
  };

  const bgStyle = {
    backgroundImage: `url(${properties[slider.activeIndex].image})`,
  };

  const [backgroundClass, setBackgroundClass] = useState(styles.fadeIn);

  useEffect(() => {
    setBackgroundClass(styles.fadeOut);
    const timeoutId = setTimeout(() => {
      setBackgroundClass(styles.fadeIn);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [slider.activeIndex]);

  
  return (
    <div style={bgStyle} className={`${styles.background} ${backgroundClass} relative`}>
      <div
        className={`${styles.propertyFinder} w-full sm:w-1/3 text-left absolute`}
      >
        <p className='text-2xl mb-5'>Property Finder 
        
        </p>
        <input
          className='border border-gray-300 px-3 py-2 w-full text-black'
          type='text'
          placeholder='Where is your target location...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className='flex gap-4 mt-2'>
          <div className='flex flex-col w-full'>
            <label className='text-black-600'>Property Type:</label>
            <select
              className='border border-gray-300 px-3 py-2 w-full text-black'
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value='any'>All</option>
              <option value='house'>House</option>
              <option value='apartment'>Apartment</option>
              <option value='condo'>Condo</option>
              <option value='townhouse'>Townhouse</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-white-600'>Price Range:</label>
            <select
              className='border border-gray-300 px-3 text-black py-2 w-full relative z-10'
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className='float-right bg-blue-500 text-white px-4 py-2 mt-3 w-32 transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'
          onClick={handleSearch}
        >
          Search
          <span><i className='ml-2 p-0 bx bx-search-alt'></i></span>
        </button>
      </div>
      <div className={`${styles.description} w-full sm:w-1/4 text-left `}>
        <div className={`px-8 sm:px-12 py-4 w-full text-white ${styles.propertyDetails}`}>
          <p className={`${styles.title} text-3xl`}>{properties[slider.activeIndex].title}</p>
          <p className={styles.propertyType}>{properties[slider.activeIndex].type}</p>
          <p className={styles.shortDescription}>{properties[slider.activeIndex].shortDescription}</p>
          <Link href={`/properties/${properties[slider.activeIndex].id}`} className='hover:underline'>
            View Property <i className='bx bx-chevrons-right leading-normal'></i>
          </Link>
        </div>
      </div>
      <div className={styles.overlay} />
      <Slider />
     
    </div>
  );
};

export default Homepage;
