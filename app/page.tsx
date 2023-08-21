import Container from "@/app/components/Container";
import InfoCard from "@/app/listings/InfoCard";
import EmptyState from "@/app/components/EmptyState";
import listingsData from "@/data/listings.json";

import getListings, {
    IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";

interface HomeProps {
    searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <Container>
                <div className="pt-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {listingsData.map((listing) => (
                            <InfoCard
                                key={listing.id}
                                data={listing}
                                description={listing.description}
                                image={listing.image}
                                location={listing.location}
                                price={listing.price}
                                rating={listing.rating}
                                currentUser={currentUser}
                                name={listing.name}
                            />
                        ))}
                    </div>
                </div>
            </Container>
            <div className="pt-20">
                <Footer />
            </div>
        </ClientOnly>
    );
};

export default Home;