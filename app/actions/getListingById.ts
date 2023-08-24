import prisma from "@/app/libs/prismadb";
import generateId from "@/app/idGenerator"; // Assurez-vous de fournir le chemin correct vers votre fichier idGenerator

interface IParams {
  listingId?: string;
}

export default async function getListingById(
  params: IParams
) {
  try {
    const { listingId } = params;

    // Si vous n'avez pas d'ID existant, générez-en un nouveau
    const id = listingId || generateId();

    const listing = await prisma.listing.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true
      }
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: 
          listing.user.emailVerified?.toString() || null,
      }
    };
  } catch (error: any) {
    throw new Error(error);
  }
}