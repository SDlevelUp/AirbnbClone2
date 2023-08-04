import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const HeartButton: React.FC = () => {
    return (
        <div
            className="
                relative
              hover:text-rose-500
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
            <AiFillHeart size={24} />
        </div>
    );
};

export default HeartButton;