import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import InfoCard from "@/app/listings/InfoCard";

interface FavoritesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <Container>
            <Heading
                title="Favorites"
                subtitle="List of places you favorited!"
            />
            <div
                className="
                    mt-10
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
                {listings.map((listing: any) => (
                    <InfoCard
                        data={listing.id}
                        name={listing.name}
                        id={listing.id}
                        key={listing.id}
                        description={listing.description}
                        image={listing.image}
                        location={listing.location}
                        price={listing.price}
                        rating={listing.rating}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    );
}

export default FavoritesClient;