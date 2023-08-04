import HeartButton from "./HeartButton";
import Image from "next/image";
const InfoCard = (props) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={props.cover}
            alt={props.name}
          />
          <div className="
              absolute
              top-3
              right-3"
          >
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {props.location}
        </div>

        {/* <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div> */}
        <div className="font-light, text-l">
          {props.name}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            {props.price}€
          </div>
          <div className="font-light">par nuit</div>
        </div>

      </div>
    </div>
  );
};

export default InfoCard;