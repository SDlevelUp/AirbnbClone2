'use client';
import { useSearchParams } from 'next/navigation';
import React, { useRef, useState, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

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


export const categories = [
    {
        label: 'Plages',
        icon: TbBeach,
        description: 'Cette propriété est proche de la plage!',
    },
    {
        label: 'Campings',
        icon: GiCampingTent,
        description: 'Vous logerez dans un caomping'
    },
    {
        label: 'Modernes',
        icon: MdOutlineVilla,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Nouveautés',
        icon: GoKey,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Skis',
        icon: FaSkiingNordic,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Iles',
        icon: GiIsland,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Parcs',
        icon: MdPark,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Sensations fortes',
        icon: GiFlyingFox,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Piscines',
        icon: TbPool,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Fermes',
        icon: GiBarn,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Golfs',
        icon: GiGolfTee,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Tipi',
        icon: GiTipi,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Hobbits',
        icon: GiHobbitDwelling,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Maisons familiales',
        icon: GiFamilyHouse,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Montagnes',
        icon: FaMountain,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Moulins à eaux',
        icon: GiWaterMill,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Chateaux',
        icon: GiCastle,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Séjours Déconnectés',
        icon: BsWifiOff,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },

    {
        label: 'Rétros',
        icon: GiRetroController,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Sous les tropiques',
        icon: GiPalmTree,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Désert',
        icon: GiDesert,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Bord de rivière',
        icon: GiRiver,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
    {
        label: 'Villes emblématiques',
        icon: GiPisaTower,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');

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