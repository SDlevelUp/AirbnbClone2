'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";

interface HeartButtonProps {
    listingId: string
    currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser
    });


    return (
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:text-[#B50D29]
                transition
                cursor-pointer
            "
        >
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                     absolute
                    -top-[2px]
                    -right-[2px]
            "
            />
            <AiFillHeart size={24}
                className={
                    hasFavorited ? 'fill-[#B50D29]' : 'fill-neutral-500/70'
                }
            />
        </div>
    );
};

export default HeartButton;