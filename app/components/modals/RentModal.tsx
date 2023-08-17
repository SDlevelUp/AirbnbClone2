'use client';

import { useState, useMemo } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { categories } from "../navbar/Categories";

import Modal from "./Modal";
import Heading from "../Heading";
import CategoryInput from "../inputs/CategoryInput";
import CountrySelected from "../inputs/CountrySelected";

import useRentModal from "@/app/hooks/useRentModal";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step, setSteps] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    });

    const category = watch('category');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    }

    const onBack = () => {
        setSteps(step - 1);
    }
    const onNext = () => {
        setSteps(step + 1);
    }

    const actionlabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Créer';
        }
        return 'Suivant';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return 'Précedent';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Laquelles de ses propositions correspond à votre logement ?"
                subtitle="Choisissez une catégorie :"
            />

            <div className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2
                    gap-3
                    max-h-[55vh]
                    overflow-y-auto 
                               
                "
            >
                {categories.map((item) => (
                    <div key={item.label} className=" col-span-1">
                        <CategoryInput
                            onClick={
                                (category) =>
                                    setCustomValue('category', category)
                            }
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="
                flex
                flex-col
                gap-8
            "
            >
                <Heading
                    title="Où se trouve cotre bien ?"
                    subtitle="Aidez les voyageurs à vous trouver !"
                />
                <CountrySelected/>
            </div>
        )
    }


    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={onNext}
            actionLabel={actionlabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Mets ton logement en location"
            body={bodyContent}
        />
    )
}

export default RentModal;
