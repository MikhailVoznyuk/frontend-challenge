import { useAppSelector } from "@/app/store/hooks.ts";
import { selectFavoriteCats } from "@/features/favorites/model/selectors.ts";
import { CatsGrid } from "@/widgets/cats-grid";
import { Container } from "@/shared/ui/containers";
import { StatusBar } from "@/shared/ui/bars";

export function FavoriteCatsPage() {
    const favoriteCats = useAppSelector(selectFavoriteCats);
    return (
        <Container>
            {
                !favoriteCats.length &&
                <StatusBar>Здесь пока пусто...</StatusBar>
            }
            <CatsGrid cats={favoriteCats} />
        </Container>
    )
}