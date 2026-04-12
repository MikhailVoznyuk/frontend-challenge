import { configureStore } from '@reduxjs/toolkit';
import catsReducer from '@/features/cats/model/catsSlice';
import favoriteReducer from '@/features/favorites/model/favoritesSlice';
import { favoriteStorage } from "@/features/favorites/lib/favoriteStorage.ts";

const preloadedFavorites = favoriteStorage.get();

export const store = configureStore({
    reducer: {
        cats: catsReducer,
        favorites: favoriteReducer,
    },
    preloadedState: {
        favorites: {items: preloadedFavorites},
    }
})

let prevFavorites = store.getState().favorites.items;

store.subscribe(() => {
    const nextFavorites = store.getState().favorites.items;

    if (nextFavorites !== prevFavorites) {
        favoriteStorage.set(nextFavorites);
        prevFavorites = nextFavorites;
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store;
