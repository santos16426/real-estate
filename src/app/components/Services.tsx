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
    <div className="p-20 flex flex-col gap-10 lg:gap-20 md:flex-row  bg-white justify-center">
      {services.map((service, index) => (
        <div
          key={index}
          className="hover:scale-[103%] select-none cursor-pointer rounded-lg bg-slate-300 shadow-md text-primary flex flex-col flex-grow justify-center gap-5 lg:gap- items-center p-5 lg:p-10 max-w-[350px]"
        >
          <service.Icon size={50} />
          <p className="text-xl w-full text-center font-semibold">
            {service.title}
          </p>
          <p className="text-sm w-full text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
