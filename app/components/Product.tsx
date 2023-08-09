import InfoCard from "./InfoCard";
import Products from "../../data/listings.json";
import Container from "./Container";

const Product = () => {
  return (
    <Container>
      <div className="
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
        {Products.map((listing: any) => (
          <InfoCard
            key={listing.id}
            name={listing.name}
            cover={listing.cover}
            location={listing.location}
            price={listing.price}
            rating={listing.rating}
            description={listing.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Product;