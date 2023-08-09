'use client';

import React from "react";
import ClientOnly from "./components/ClientOnly";
import listingsData from "../data/listings.json";
import InfoCard from "./components/InfoCard";
import Container from "./components/Container";

export default function Home() {
    return (
        <ClientOnly>
            <Container>
                <div
                    className="
                            pt-24
                            grid 
                            grid-cols-1
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4
                            xl:grid-cols-5
                            2xl:grid-cols-4
                            gap-8
                        "
                >
                    {listingsData.map((listing) => (
                        <InfoCard
                            key={listing.id}
                            description={listing.description}
                            cover={listing.cover}
                            location={listing.location}
                            price={listing.price}
                            rating={listing.rating}
                        />
                    ))}
                </div>

            </Container>
        </ClientOnly>
    );
}