import React, { useState } from "react";
import Link from "next/link";
import NavItems from "./NavItems";

const Header: React.FC = () => {
  return (
    <header className="bg-primary px-2 sm:px-10 fixed top-0 left-0 w-full py-4 flex z-50 justify-between items-center">
      <div className="text-xl font-semibold text-white cursor-pointer">
        <Link href="/">EpicEstate</Link>
      </div>
      <NavItems />
      <div className="hidden lg:flex gap-2">
        <button className="border-2 px-3 py-2 text-white">Reserve Now</button>
        <button className="bg-white px-3 py-2">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
