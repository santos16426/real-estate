import React, { useState } from 'react';
import styles from './Header.module.scss'; // Add your own SCSS file for styling

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}><i className='bx bxs-home-smile'></i>Logo</div>
      <nav className={styles.nav}>
        <ul>
            <li className={styles.navItem}>
            <span className={`${styles.navLink} ${styles.underlineOnHover}`}>About Us</span>
            </li>
            <li className={styles.navItem}>
            <span className={`${styles.navLink} ${styles.underlineOnHover}`}>Our Properties</span>
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

        <div className={`${styles.buttonContainer} flex gap-2`}>
            <button className={styles.outlinedButton}>Reserve Now</button>
            <button className={styles.filledButton}>Contact Us</button>
        </div>
    </header>
  );
};

export default Header;
