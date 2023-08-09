'use client';
import { useCallback, useState } from "react";
import { User } from '@prisma/client';
import { signOut } from "next-auth/react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { RiMenu2Line } from "react-icons/ri";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface UserMenuProps {
    currentUser?: User | null;
}

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
                        md:block
                        text-sm 
                        font-semibold 
                        py-3 
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
                        <Avatar />
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
                                    label="Messages"
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label="Notifications"
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label="Voyages"
                                    onclick={() => { }}
                                />

                                <MenuItem
                                    label="Mes favoris"
                                    onclick={() => { }}
                                />
                                <hr />
                                <MenuItem
                                    label="Mettre mon logement sur Airbnb"
                                    onclick={() => { }}
                                />
                                <MenuItem
                                    label="Compte"
                                    onclick={() => { }}
                                />

                                <hr />

                                <MenuItem
                                    label="Déconnexion"
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