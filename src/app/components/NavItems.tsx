import { useState } from "react";
import styles from "@/app/styles/Header.module.scss";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

const NavItems: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="hidden lg:flex">
        <ul className="list-none flex gap-5 m-0 p-0 text-white">
          <li className="relative cursor-pointer">
            <Link href="/about">
              <span className={`${styles.navLink} ${styles.underlineOnHover}`}>
                About Us
              </span>
            </Link>
          </li>
          <li className="relative cursor-pointer">
            <Link href="/properties">
              <span className={`${styles.navLink} ${styles.underlineOnHover}`}>
                Our Properties
              </span>
            </Link>
          </li>
          <li
            className={`relative ${styles.dropdown} ${
              isDropdownOpen && styles.active
            }`}
            onClick={toggleDropdown}
            onMouseEnter={() => toggleDropdown()}
            onMouseLeave={() => toggleDropdown()}
          >
            <span
              className={`${styles.navLink} ${styles.underlineOnHover} ${styles.dropdownLink}`}
            >
              Locations <i className="bx bx-caret-down"></i>
            </span>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <a href="#">Location 1</a>
                <a href="#">Location 2</a>
                <a href="#">Location 3</a>
              </div>
            )}
          </li>
          <li className="relative cursor-pointer">
            <Link href="/news-event">
              <span className={`${styles.navLink} ${styles.underlineOnHover}`}>
                Blog
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="block lg:hidden">
        <Sheet open={isDrawerOpen} modal={false}>
          <SheetTrigger>
            <Menu
              className="block lg:hidden text-gray-700 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </SheetTrigger>
          <SheetContent
            draggable={true}
            className="w-screen bg-primary border-0 shadow-lg"
          >
            <div className="h-screen text-black flex flex-col justify-center items-center text-center">
              <nav className="flex flex-col justify-center items-center text-center gap-10">
                <div className="text-xl font-semibold text-white cursor-pointer">
                  <Link href="/">EpicEstate</Link>
                </div>
                <ul className="list-none flex flex-col gap-5 m-0 p-0 text-white">
                  <li className="relative cursor-pointer">
                    <Link href="/about">
                      <span
                        className={`${styles.navLink} ${styles.underlineOnHover}`}
                      >
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li className="relative cursor-pointer">
                    <Link href="/properties">
                      <span
                        className={`${styles.navLink} ${styles.underlineOnHover}`}
                      >
                        Our Properties
                      </span>
                    </Link>
                  </li>
                  <li
                    className={`relative ${styles.dropdown} ${
                      isDropdownOpen && styles.active
                    }`}
                    onClick={toggleDropdown}
                    onMouseEnter={() => toggleDropdown()}
                    onMouseLeave={() => toggleDropdown()}
                  >
                    <span
                      className={`${styles.navLink} ${styles.underlineOnHover} ${styles.dropdownLink}`}
                    >
                      Locations <i className="bx bx-caret-down"></i>
                    </span>
                    {isDropdownOpen && (
                      <div className={styles.dropdownContent}>
                        <a href="#">Location 1</a>
                        <a href="#">Location 2</a>
                        <a href="#">Location 3</a>
                      </div>
                    )}
                  </li>
                  <li className="relative cursor-pointer">
                    <Link href="/news-event">
                      <span
                        className={`${styles.navLink} ${styles.underlineOnHover}`}
                      >
                        Blog
                      </span>
                    </Link>
                  </li>
                </ul>
                <SheetClose asChild>
                  <X
                    className="text-white"
                    onClick={() => setIsDrawerOpen(false)}
                  />
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
export default NavItems;
