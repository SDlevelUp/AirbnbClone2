import React from "react";
import HeartButton from "./HeartButton";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
interface InfoCardProps {
  name: string;
  description: string;
  cover: string;
  location: string;
  price: number;
  rating: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
  description,
  cover,
  location,
  rating,
  price,
}) => {
  return (
    <div className="col-span-1 cursor-pointer group pb-4">
      <div className="flex flex-col w-full">
        <div className=" 
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl">
          <Image
            fill
            className="
                priority
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition"
            src={cover}
            alt={description}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 200px, 300px"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pt-2">
          <div className="font-semibold text-[14px] truncate w-33">{location}</div>
          <div className="flex align-center gap-1 text-lg items-center">
            <AiFillStar size={15} />
            <span>{rating}</span>
          </div>
        </div>
        <div className=" text-[#6B7280] text-[14px]">{description}</div>
        <div className="flex flex-row items-center gap-1 text-[14px]">
          <div className="font-bold">{price} €</div>
          <div className="font-normal text-[#6B7280]">par nuit</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;