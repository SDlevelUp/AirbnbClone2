'use client';

import React, { useRef, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import CategoryBox from "../CategoryBox";
import Container from "../Container";

import { FaSkiingNordic, FaMountain } from 'react-icons/fa';
import { TbBeach, TbPool } from 'react-icons/tb'
import { GoKey } from 'react-icons/go';
import { BsWifiOff } from 'react-icons/bs';
import {
    MdOutlineVilla,
    MdPark,
} from 'react-icons/md';
import {
    GiIsland,
    GiFlyingFox,
    GiCampingTent,
    GiBarn,
    GiTipi,
    GiFamilyHouse,
    GiCastle,
    GiGolfTee,
    GiHobbitDwelling,
    GiWaterMill,
    GiPalmTree,
    GiRetroController,
    GiDesert,
    GiPisaTower,
    GiRiver,
} from 'react-icons/gi';

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export const categories = [
    {
        label: 'Plage',
        icon: TbBeach,
        description: 'Cette propriété est proche de la plage',
    },
    {
        label: 'Camping',
        icon: GiCampingTent,
        description: 'Cette propriété est un camping'
    },
    {
        label: 'Moderne',
        icon: MdOutlineVilla,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Nouveauté',
        icon: GoKey,
        description: 'Cette propriété est nouvelle'
    },
    {
        label: 'Ski',
        icon: FaSkiingNordic,
        description: 'Cette propriété est proche d’une piste skiable'
    },
    {
        label: 'Ile',
        icon: GiIsland,
        description: 'Cette propriété est sur une île'
    },
    {
        label: 'Parc',
        icon: MdPark,
        description: 'Cette propriété est proche d’un parc national'
    },
    {
        label: 'Sensation forte',
        icon: GiFlyingFox,
        description: 'Cette propriété propose des activités à sensations fortes'
    },
    {
        label: 'Piscine',
        icon: TbPool,
        description: 'Cette propriété est un château'
    },
    {
        label: 'Ferme',
        icon: GiBarn,
        description: 'Cette propriété est une ferme'
    },
    {
        label: 'Golf',
        icon: GiGolfTee,
        description: 'Cette propriété est proche d’un terrain de golf'
    },
    {
        label: 'Tipi',
        icon: GiTipi,
        description: 'Cette propriété est isolée'
    },
    {
        label: 'Hobbit',
        icon: GiHobbitDwelling,
        description: 'Cette propriété possède est proche de la forêt'
    },
    {
        label: 'Maison familiale',
        icon: GiFamilyHouse,
        description: 'Cette propriété est une piscine familiale'
    },
    {
        label: 'Montagne',
        icon: FaMountain,
        description: 'Cette propriété se situe dans les montagnes'
    },
    {
        label: 'Moulin à eaux',
        icon: GiWaterMill,
        description: 'Cette propriété est un moulin à eau'
    },
    {
        label: 'Chateau',
        icon: GiCastle,
        description: 'Cette propriété est un château'
    },
    {
        label: 'Séjour Déconnecté',
        icon: BsWifiOff,
        description: 'Cette propriété propose un séjour déconnecté'
    },

    {
        label: 'Rétro',
        icon: GiRetroController,
        description: 'Cette propriété est rétro'
    },
    {
        label: 'Sous les tropiques',
        icon: GiPalmTree,
        description: 'Cette propriété se situe dans un lieu tropical'
    },
    {
        label: 'Désert',
        icon: GiDesert,
        description: 'Cette propriété est en plien désert'
    },
    {
        label: 'Bord de rivière',
        icon: GiRiver,
        description: 'Cette propriété est aux abords d’une rivière'
    },
    {
        label: 'Ville emblématique',
        icon: GiPisaTower,
        description: 'Cette propriété se situe dans une ville emblématique'
    },
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollableLeft, setScrollableLeft] = useState(false);
    const [scrollableRight, setScrollableRight] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            setScrollableLeft(containerRef.current.scrollLeft > 0);
            setScrollableRight(containerRef.current.scrollLeft < containerRef.current.scrollWidth - containerRef.current.clientWidth);
        }
    }, []);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200;
        }
    };

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-2 flex flex-row items-center justify-between custom-scrollbar" style={{
                scrollBehavior: 'smooth'
            }}>
                <button onClick={scrollLeft} className={`mr-2 ${scrollableLeft ? 'opacity-100' : ''}`}>
                    <BsArrowLeftCircle size={24} className=' hover:opacity-75' />
                </button>
                <div className="flex overflow-x-auto pr-4" ref={containerRef} style={{ overflowX: 'hidden' }}>
                    {categories.map((item) => (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                        />
                    ))}
                </div>
                <button onClick={scrollRight} className={`ml-2 ${scrollableRight ? 'opacity-100' : ''}`}>
                    <BsArrowRightCircle size={24} className=' hover:opacity-75' />
                </button>
            </div>
        </Container >
    )
}

export default Categories;