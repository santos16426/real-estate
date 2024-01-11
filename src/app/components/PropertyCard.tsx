import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { TProperty } from "../utils/types";
import { Badge } from "./ui/badge";
import styles from "@/app/styles/Card.module.scss";
import { cn } from "../utils/utils";
import { Bookmark, Heart, Star, Zap } from "lucide-react";
import Link from "next/link";
const PropertyCard: React.FC<TProperty & { className?: string }> = ({
  name,
  type,
  image,
  description,
  alias,
  location,
  priceRange,
  className,
  featured,
}) => {
  return (
    <Link href={`/properties/${alias}`}>
      <Card
        className={cn(
          "cursor-pointer rounded-md shadow-lg overflow-hidden hover:border-0 border-0",
          className
        )}
      >
        <CardContent
          className={cn(
            "relative w-[280px] h-[340px] flex flex-col justify-center",
            styles.cardContent
          )}
        >
          {featured && (
            <div className="absolute z-10 top-2 left-2">
              <Star className="text-primary fill-primary" size={20} />
            </div>
          )}
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
            className={cn("absolute top-0 left-0 w-full h-full", styles.bgImg)}
          />
          <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent from-80% to-100% to-primary"></div>
          <Badge className="absolute top-2 right-2">{type}</Badge>
          <p className="absolute left-0 bottom-[80px] text-sm p-2 rounded-e-md text-center font-semibold bg-white bg-opacity-50 backdrop-blur-sm">
            {name}
          </p>
          <div className="absolute left-0 bottom-[40px] bg-primary text-white bg-opacity-70 font-semibold text-sm px-3 py-2 rounded-e-md">
            {location.city}
          </div>
          <div className="absolute bottom-2 left-2 text-white text-xs">
            Price Range: {priceRange}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
