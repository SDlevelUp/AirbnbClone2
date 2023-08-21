import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";
export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])]
        }
      }
    });

    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      title: favorite.title,
      imageSrc: favorite.imageSrc ? favorite.imageSrc : "", // Utilisez favorite.imageSrc au lieu de favorite.image
      category: "", // Ajoutez la valeur appropriée ici
      roomCount: 0, // Ajoutez la valeur appropriée ici
      bathroomCount: 0, // Ajoutez la valeur appropriée ici
      guestCount: 0, // Ajoutez la valeur appropriée ici
      createdAt: new Date(), // Ajoutez la valeur appropriée ici
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}