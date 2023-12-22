import React, { useState } from 'react';
import styles from './Header.module.scss'; // Add your own SCSS file for styling
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`${styles.header} bg-primary px-2 sm:px-5`}>
      <div className={styles.logo}><Link href="/">Logo</Link></div>
      <nav className={`${styles.nav} hidden sm:flex`}>
        <ul>
            <li className={styles.navItem}>
              <Link href="/about">
                <span className={`${styles.navLink} ${styles.underlineOnHover}`}>About Us</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/properties">
                <span className={`${styles.navLink} ${styles.underlineOnHover}`}>Our Properties</span>
              </Link>
            </li>
            <li
            className={`${styles.navItem} ${styles.dropdown} ${isDropdownOpen && styles.active}`}
            onClick={toggleDropdown}
            onMouseEnter={() => toggleDropdown()}
            onMouseLeave={() => toggleDropdown()}
            >
            <span className={`${styles.navLink} ${styles.underlineOnHover} ${styles.dropdownLink}`}>
                Locations <i className='bx bx-caret-down' ></i>
            </span>
            {/* Dropdown content goes here */}
            {isDropdownOpen && (
                <div className={styles.dropdownContent}>
                <a href="#">Location 1</a>
                <a href="#">Location 2</a>
                <a href="#">Location 3</a>
                {/* Add more locations as needed */}
                </div>
            )}
            </li>
            <li className={styles.navItem}>
            <span className={`${styles.navLink} ${styles.underlineOnHover}`}>Blog</span>
            </li>
        </ul>
        </nav>

        <div className={`${styles.buttonContainer} flex gap-2 hidden sm:flex`}>
            <button className={styles.outlinedButton}>Reserve Now</button>
            <button className={styles.filledButton}>Contact Us</button>
        </div>
    </header>
  );
};

export default Header;
