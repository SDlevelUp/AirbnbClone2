import Image from "next/image"
import { TbWorld } from 'react-icons/tb';
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0">
            <div className=" z-2 border-b bg-white/[95%] tablet:p-3 lg:sticky lg:z-2 sm:border-0 md:border-0">
                <div className="flex items-center justify-between md:w-[100%] sm:flex sm:items-center">

                    {/* Left */}
                    <div className="fill-none cursor-pointer display sm:hidden md:flex lg:-left-7 lg:relative lg:top-0">
                        <Image
                            src="/air5.png"
                            alt="LogoAirbnb"
                            width={100}
                            height={10} />
                    </div>

                    {/*MIDDLE*/}
                    <div className="display items-center flex relative shadow-md shadow-gray-300 border-2 rounded-full py-2 sm:shadow-md md:m-5 md:shadow-sm sm:flex sm:left-2.5 sm:w-[80%] lg:w-[45%] lg:right-5 lg:relative	md:pt-[10px] md:pl-[20px] md:w-[80%]" >
                        <input
                            type="search"
                            placeholder=""
                            className="w-[25rem] rounded-full outline-0" />
                        <div className="flex items-center absolute w-full pl-6 font-semibold text-gray-600 text-[14px] pr-3">
                            <button className="w-full text-slate-400 justify-start flex sm:text-[14px] sm:items-start md:justify-start l:text-[17px]">L'aventure commence ici</button>
                        </div>

                        {/*LOUPE*/}
                        <Link href="/Card">

                            <div className="bg-[#FF385C] text-[white] mr-2 cursor-pointer p-1 rounded-full size-s display sm:hidden md:display lg:display">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>

                        </Link>


                        {/*FILTRE*/}
                        <div className="p-1 text-[white] rounded-full border bg-[#FF385C] mr-2 sm:display md:display tablet:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 bg-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="0" y="0" width="24" height="24" />
                            </svg>
                        </div>
                    </div>

                    {/*RIGHT*/}
                    <div className="flex items-center pr-3 font-semibold text-gray-600 sm:hidden md:display ">
                        <span className="hover:bg-slate-200 rounded-full w-[100%] h-[100%] lg:hover:hidden px-2 py-1">
                            <p className="text-[16px] sm:text-[14px] md:text-[14px] cursor-pointer lg:hover:underline-offset-4">Mettre mon logement sur Airbnb</p>
                        </span>
                        <div className="flex items-center mx-8 lg:relative cursor-pointer">
                            <TbWorld className="text-xl lg:text-2xl" />
                            <div className="text-[15px] cursor-pointer lg:relative lg:px-0 ">
                            </div>

                        </div>
                        <div className="flex bg-[#FF385C] text-white font-semibold items-center px-3 py-2 gap-2 border rounded-full shadow-md shadow-gray-300 hover:text-black hover:bg-[#FF385C] duration-200 ease-out cursor-pointer">
                            <FiMenu className="text-[20px]" />
                            <AiOutlineUser className="text-[18px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;