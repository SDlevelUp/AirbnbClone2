import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation"; // gestion des routes au clique des icones
import { useCallback } from "react";
import queryString from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            //Cela va créer un objet a partir de nos paramètres actuels, et on va stocker plusieurs infos
            //dans notre URL, comme la location, les dates de réservation, etc.
            // Evite qu'au click sur une autre catégorie, il ne soient supprimer accidentellement.
            currentQuery = queryString.parse(params.toString())
        }
        // mettre à jour les paramètres de l'URL en fonction des actions de l'utilisateur
        //afin que les modifications soient reflétées dans l'URL par exemple on sur camping et on passe a plage
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        // Vérifie que si on reclique sur la même catégorie les données sont supprimé et c'est réinitialiser
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        //créer une URL en chaîne de caractères qui contient les paramètres de la chaîne de requête mis à jour 
        //avec la nouvelle catégorie sélectionnée.
        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);


    return (
        <div
            onClick={handleClick}
            className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-xs whitespace-nowrap">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox;