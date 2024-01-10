import { Gem, Gift, LucideIcon, Users } from "lucide-react";
import React from "react";

type Service = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    {
      Icon: Gem,
      title: "Smart Living, Smarter Prices",
      description:
        "Easily search for properties based on location, type, and price range.",
    },
    {
      Icon: Users,
      title: "Neighborly Living, Neighborly Love",
      description:
        "Easily search for properties based on location, type, and price range.",
    },
    {
      Icon: Gift,
      title: "EpicEstate Perks: Your Home, Your Deals",
      description:
        "Easily search for properties based on location, type, and price range.",
    },
  ];
  return (
    <div className="p-20 flex flex-col gap-5 md:flex-row  bg-white">
      {services.map((service, index) => (
        <div
          key={index}
          className=" rounded-lg bg-slate-300 shadow-md text-primary flex flex-col flex-grow justify-center gap-2 lg:gap- items-center p-5 lg:p-8"
        >
          <service.Icon size={50} />
          <p className="text-2xl w-full md:w-2/3 text-center font-semibold">
            {service.title}
          </p>
          <p className="text-sm w-full md:w-2/3 text-center">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
