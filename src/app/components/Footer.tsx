import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import GoogleMapsComponent from "./Map";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-2 justify-between bg-primary px-5 lg:px-32 py-5">
      <div className="w-full h-full flex flex-col gap-5 text-left">
        <div className="text-xl font-semibold text-white cursor-pointer text-left">
          <Link href="/">EpicEstate</Link>
        </div>
        <ul className="list-none lg:list-disc flex flex-col lg:flex-row gap-3 lg:gap-8 text-white text-xs lg:ml-3">
          <li>
            <Link href="https://google.com" target="_blank">
              Privacy Notice
            </Link>
          </li>
          <li>
            <Link href="https://google.com" target="_blank">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link href="/properties">Property Listing</Link>
          </li>
        </ul>
        <ul className="flex gap-5 flex-row text-white text-xs">
          <li>
            <Link href="https://facebook.com" target="_blank">
              <Facebook size={20} />
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              <Instagram size={20} />
            </Link>
          </li>
          <li>
            <Link href="https://youtube.com" target="_blank">
              <Youtube size={20} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com" target="_blank">
              <Twitter size={20} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full flex flex-col gap-5 lg:items-end lg:text-right">
        <p className="text-xl text-white font-semibold">Directory</p>
        <ul className="flex flex-row gap-3 lg:gap-6 text-white text-xs">
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/about-us">Our Properties</Link>
          </li>
          <li>
            <Link href="/about-us">Blog</Link>
          </li>
          <li>
            <Link href="/about-us">Reserve Now</Link>
          </li>
          <li>
            <Link href="/about-us">Contact Us</Link>
          </li>
        </ul>
        <p className="text-xs text-white">Copyright 2024 Billy Joe Santos</p>
      </div>
    </div>
  );
};

export default Footer;
