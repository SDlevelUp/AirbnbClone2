'use client'

import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => {
                toast.success('Compte créer avec succès!');
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])

    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <Heading
                    title="Bienvenue chez Airbnb"
                    subtitle="Créer ton compte!"
                />
                <Input
                    id="email"
                    label="E-mail"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="name"
                    label="Nom"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="password"
                    label="Mot de passe"
                    type="password"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </form>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continuer avec Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label="Continuer avec Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />

            <div
                className="
            text-neutral-500 
            text-center 
            mt-4 
            font-light
            "
            >
                <p>Tu as déjà un compte?
                    <span
                        onClick={onToggle}
                        className="
                            text-neutral-800
                            cursor-pointer 
                            hover:underline
                "
                    > Connectes-toi</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="S'enregistrer"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;