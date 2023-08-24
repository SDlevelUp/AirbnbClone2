'use client';

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { SafeListing, SafeUser } from "@/app/types";
import HeartButton from "@/app/components/HeartButton";
import { useRouter } from "next/navigation";

interface InfoCardProps {
  id: string;
  data: SafeListing;
  name: string;
  description: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  currentUser?: SafeUser | null;
}
const InfoCard: React.FC<InfoCardProps> = ({
  id,
  name,
  data,
  description,
  image,
  location,
  rating,
  price,
  currentUser,

}) => {

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group pb-4"
    >
      <div className="flex flex-col w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
  "
            src={image ?? ""}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton
              listingId={data.id}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center pt-2">
          <div className="font-semibold text-[14px] truncate w-33">{location}</div>
          <div className="font-semibold text-[14px] truncate w-33">{name}</div>
          <div className="flex align-center gap-1 text-lg items-center">
            <AiFillStar size={15} />
            <span>{rating}</span>
          </div>
        </div>
        <div className="text-[#6B7280] text-[14px]">{description}</div>
        <div className="flex flex-row items-center gap-1 text-[14px]">
          <div className="font-bold">{price} €</div>
          <div className="font-normal text-[#6B7280]">par nuit</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;