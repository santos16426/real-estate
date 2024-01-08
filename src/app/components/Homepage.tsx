import { useEffect, useState } from 'react';
import styles from '@/app/styles/Homepage.module.scss';
import Slider from './Slider';
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
    console.log('Search:', {
      searchText,
      propertyType,
      priceRange: `${priceRange[0]}M - ${priceRange[1]}M`,
    });
  };

  const bgStyle = {
    backgroundImage: "url('/images/property-3.jpg')",
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
    <div style={bgStyle} className='relative h-screen bg-cover bg-center p-32'>
      <div className='text-right mt-20  max-w-4xl float-right'>
        <p className='text-[3rem] text-black font-montserrat'>Discover Your Dream Home with <span className='font-semibold text-primary'>EpicEstate</span></p>
        <p className='text-lg mt-2 text-gray-600 float-right'>Where Every Home is a Masterpiece - Discover Unmatched Luxury and Comfort</p>
      </div>

      <div
        className='text-left absolute text-white p-8 bottom-[5%] left-10  bg-black bg-opacity-50 shadow-md rounded-lg w-6/12'
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
          className='float-right bg-primary text-white px-4 py-2 mt-3 w-fit transition-all duration-300 hover:bg-primary-700 focus:outline-none focus:ring focus:ring-primary-200'
          onClick={handleSearch}
        >
          Search
          <span><i className='ml-2 p-0 bx bx-search-alt'></i></span>
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default Homepage;
