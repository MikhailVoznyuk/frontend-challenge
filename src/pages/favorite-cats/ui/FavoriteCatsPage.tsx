import { useAppSelector } from "@/app/store/hooks.ts";
import { selectFavoriteCats } from "@/features/favorites/model/selectors.ts";
import { CatsGrid } from "@/widgets/cats-grid";

export function FavoriteCatsPage() {
    const favoriteCats = useAppSelector(selectFavoriteCats);
    return (
        <CatsGrid variant='favorite' cats={favoriteCats} />
    )
}