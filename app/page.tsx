
import Container from "./components/Container";
import ClientOnly from "./components/ClientOnly";
import Products from "../data/listings.json";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
export default function home() {
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
                2xl:grid-cols-6
                gap-8
              "
                >
                    {Products.map((listing) => (
                        <InfoCard
                            key={listing.id}
                            name={listing.name}
                            cover={listing.cover}
                            location={listing.location}
                            price={listing.price}
                            rating={listing.rating}
                            equipments={listing.equipments}
                        />
                    ))}
                </div>
                    <Footer />
            </Container>
        </ClientOnly>
    )
}
