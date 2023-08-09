import React from "react";
import HeartButton from "./HeartButton";
import Image from "next/image";

import { AiFillStar } from "react-icons/ai";
interface InfoCardProps {
  description: string;
  cover: string;
  location: string;
  price: number;
  rating: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  cover,
  description,
  location,
  price,
  rating,
}) => {
  return (
    <div className="col-span-1 cursor-pointer group pb-4">
      <div className="flex flex-col w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={cover}
            alt={description}
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-m truncate w-33">{location}</div>
          <div className="flex items-center gap-1 text-lg">
            <AiFillStar size={18} />
            <div>{rating}</div>
          </div>
        </div>
        <div className=" text-[#6B7280]">{description}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">{price} €</div>
          <div className="font-weight-600">par nuit</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;