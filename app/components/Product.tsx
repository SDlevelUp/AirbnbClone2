import InfoCard from "./InfoCard";
import Products from "../../data/listings.json";
import Container from "./Container";

const Product = () => {
  return (
    <Container>
      <div className="
        pt-48
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-8"
      >
        {Products && Products.map((listing: any) => (
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
    </Container>
  );
};

export default Product;