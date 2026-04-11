import type { RootState} from "@/app/store";

export const selectFavoriteCats = (state: RootState) => state.favorites.items;
export const selectIsFavorite = (id: string) =>
    (state: RootState) => state.favorites.items.some(item => item.id === id);

