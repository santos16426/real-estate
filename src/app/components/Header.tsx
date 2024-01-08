import React, { useState } from 'react';
import styles from '@/app/styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='bg-primary px-2 sm:px-10 fixed top-0 left-0 w-full py-5 flex z-50 justify-between items-center'>
      <div className='text-xl font-semibold text-white cursor-pointer'><Link href="/">EpicEstate</Link></div>
      <nav className='hidden sm:flex'>
        <ul className='list-none flex gap-5 m-0 p-0 text-white'>
          <li className='relative cursor-pointer'>
            <Link href="/about">
              <span className={`${styles.navLink} ${styles.underlineOnHover}`}>About Us</span>
            </Link>
          </li>
          <li className='relative cursor-pointer'>
            <Link href="/properties">
              <span className={`${styles.navLink} ${styles.underlineOnHover}`}>Our Properties</span>
            </Link>
          </li>
          <li
            className={`relative ${styles.dropdown} ${isDropdownOpen && styles.active}`}
            onClick={toggleDropdown}
            onMouseEnter={() => toggleDropdown()}
            onMouseLeave={() => toggleDropdown()}
          >
            <span className={`${styles.navLink} ${styles.underlineOnHover} ${styles.dropdownLink}`}>
              Locations <i className='bx bx-caret-down' ></i>
            </span>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <a href="#">Location 1</a>
                <a href="#">Location 2</a>
                <a href="#">Location 3</a>
              </div>
            )}
          </li>
          <li className='relative cursor-pointer'>
            <span className={`${styles.navLink} ${styles.underlineOnHover}`}>Blog</span>
          </li>
        </ul>
      </nav>
      <div className={`${styles.buttonContainer} flex gap-2`}>
        <button className='border-2 px-3 py-2 text-white'>Reserve Now</button>
        <button className='bg-white px-3 py-2'>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
