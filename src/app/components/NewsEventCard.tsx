import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { TNewsEvent } from "../utils/types";
import { Badge } from "./ui/badge";
import styles from "@/app/styles/Card.module.scss";
import { cn } from "../utils/utils";
const NewsEventCard: React.FC<TNewsEvent> = ({
  name,
  type,
  bannerPhoto,
  description,
  date,
}) => {
  console.log(bannerPhoto);
  return (
    <Card className="cursor-pointer rounded-md shadow-2xl overflow-hidden hover:border-0 border-0">
      <CardContent
        className={cn(
          "relative w-[320px] h-[400px] flex flex-col justify-center",
          styles.cardContent
        )}
      >
        <div
          className={cn("absolute top-0 left-0 w-full h-full", styles.bgImg)}
          style={{
            backgroundImage: `url(${bannerPhoto})`,
            backgroundSize: "cover",
          }}
        />
        <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent from-60% to-100% to-primary"></div>
        <Badge className="absolute top-2 right-2">{type}</Badge>
        <div className="flex flex-col justify-between absolute bottom-0 left-0 bg-slate-800 text-white p-2  w-full h-2/5 shadow-sm">
          <p className="text-lg text-white font-semibold text-ellipsis line-clamp-2">
            {name}
          </p>
          <p className="text-sm text-ellipsis line-clamp-2 text-slate-300">
            {description}
          </p>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsEventCard;
