'use client';
import React, { useState, useEffect } from "react";
import ClientOnly from "./components/ClientOnly";

import { ClipLoader } from "react-spinners";

import listingsData from "../data/listings.json";
import InfoCard from "./components/InfoCard";
import Container from "./components/Container";
import Footer from "./components/Footer";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <ClientOnly>
            <Container>
                <div className="pt-24">
                    {loading ? (
                        <div className='h-[70vh] flex flex-col justify-center items-center'>
                            <ClipLoader size={95} color='#B50D29' />
                            <p className="mt-2 text-black">Ça charge...</p>
                        </div>
                    ) : (
                        <div
                            className="
                                grid 
                                grid-cols-1 
                                sm:grid-cols-2 
                                md:grid-cols-3 
                                lg:grid-cols-4
                                xl:grid-cols-5
                                2xl:grid-cols-6
                                gap-8
                            "
                        >
                            {listingsData.map((listing) => (
                                <InfoCard
                                    key={listing.id}
                                    name=""
                                    description={listing.description}
                                    cover={listing.cover}
                                    location={listing.location}
                                    price={listing.price}
                                    rating={listing.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Container>
            <div className="pt-20">
                <Footer />
            </div>
        </ClientOnly>
    );
}