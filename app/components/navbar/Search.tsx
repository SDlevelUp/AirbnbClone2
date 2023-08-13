'use client';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div
            className="
            border-[1px] 
            w-full 
            md:w-auto 
            py-2 
            rounded-full 
            shadow-sm 
            hover:shadow-md 
            transition 
            cursor-pointer
            md:min-w-[348px]
            "
        >
            <div
                className="
                flex 
                flex-row 
                items-center 
                justify-between
            "
            >
                <div
                    className="
                    text-sm 
                    px-6
                    align-left
                    text-ellipsis	
                    overflow-hidden
                    whitespace-nowrap
                    min-w-[80px]
                    flex-initial
                    text-gray-900 
                    font-bold
                    "
                >
                    N’importe où
                </div>
                <div
                    className="
                    hidden
                    relative
                    px-6
                    sm:block 
                    text-sm 
                    border-x-[1px] 
                    align-left
                    text-ellipsis	
                    overflow-hidden
                    whitespace-nowrap
                    min-w-[80px]
                    flex-initial
                    text-gray-900 
                    font-bold
                    "
                >
                    Une semaine
                </div>
                <div
                    className="
                    text-sm 
                    pl-4
                    pr-2 
                    text-gray-600 
                    flex 
                    flex-row 
                    text-left
                    items-center
                    gap-3
                ">
                    <div className="hidden sm:block overflow-hidden min-w-[80px] text-[#717171] font-normal">
                        <p className="truncate w-[100px] sm:w-[200px] md:w-[80px] lg:w-[145px]">
                            Ajouter des voyageurs
                        </p>
                    </div>
                    <div
                        className="
                            p-2
                            bg-[#B50D29]
                            rounded-full
                            text-white
                           
                        "
                    >
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Search;