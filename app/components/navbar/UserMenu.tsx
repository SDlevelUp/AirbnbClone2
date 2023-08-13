'use client';
import { useCallback, useState } from "react";
import { SafeUser } from '@/app/types';
import { signOut } from "next-auth/react";
import { RiMenu2Line } from "react-icons/ri";
// import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface UserMenuProps {
    currentUser?: SafeUser | null
}
// const router = useRouter();
const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => { }}
                    className="
                    hidden
                    lg:flex
                    xl:flex
                    md:hidden
                    text-sm 
                    font-semibold 
                    py-2
                    px-4 
                    rounded-full 
                    hover:bg-neutral-100 
                    transition 
                    cursor-pointer
                    "
                >
                    Mettre mon logement sur Airbnb
                </div>
                <div
                    onClick={toggleOpen}

                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px] 
                        border-neutral-200 
                        flex 
                        flex-row 
                        items-center 
                        gap-3
                        rounded-full 
                        cursor-pointer 
                        hover:shadow-md 
                        transition
                    "
                >
                    <RiMenu2Line />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute 
                        rounded-xl 
                        shadow-md
                        w-[40vw]
                        md:w-3/4 
                        bg-white 
                        overflow-hidden 
                        right-0 
                        top-12 
                        sm:top-[5rem]
                        text-sm
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            // Si l'utilisateur est connecté
                            <>

                                <MenuItem
                                    label={<span className="font-bold">Messages</span>}
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label={<span className="font-bold">Notifications</span>}
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label={<span className="font-bold">Voyages</span>}
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label={<span className="font-bold">Favoris</span>}
                                    onclick={() => { }}
                                />
                                <hr />
                                <MenuItem
                                    label={<span className="text-[#161616] font-normal ">Mettre mon logement sur Airbnb</span>}
                                    onclick={() => { }}
                                />
                                <MenuItem
                                    label={<span className="text-[#161616] font-normal">Mon compte</span>}
                                    onclick={() => { }}
                                />
                                <hr />
                                <MenuItem
                                    label={<span className="text-[#161616] font-normal">Déconnexion</span>}
                                    onclick={() => { signOut() }}
                                />
                            </>
                        ) : (
                            // Si l'utilisateur n'est pas connecté
                            <>
                                <MenuItem
                                    label="Connexion"
                                    onclick={loginModal.onOpen}
                                />
                                <MenuItem
                                    label="S'enregistrer"
                                    onclick={registerModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
export default UserMenu;