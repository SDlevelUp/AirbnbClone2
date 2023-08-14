'use client';

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { RiMenu2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

import { SafeUser } from '@/app/types';
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
interface UserMenuProps {
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {
    const router = useRouter();

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        rentModal.onOpen();
    }, [currentUser, loginModal, rentModal])


    return (
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="
                    hidden
                    md:block
                    text-base
                    font-bold
                    py-2 
                    px-4 
                    rounded-full 
                    hover:bg-neutral-100 
                    transition 
                    cursor-pointer
                    truncate 
                    
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
                                    onclick={rentModal.onOpen}
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