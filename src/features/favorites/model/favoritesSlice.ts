import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cat } from "@/entities/cat/model/types.ts";

type FavoritesState = {
    items: Cat[];
}

const initialState: FavoritesState = {
    items: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, action: PayloadAction<Cat[]>) => {
            state.items = action.payload;
        },
        toggleFavorite: (state, action: PayloadAction<Cat>) => {
            const cat = action.payload;
            const exists = state.items.some((item) => item.id === cat.id);

            state.items = (exists) ?
                state.items.filter((item) => item.id !== cat.id) :
                [...state.items, cat];
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearFavorites: (state) => {
            state.items = [];
        }
    }
})

export const {
    setFavorites,
    toggleFavorite,
    removeFavorite,
    clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;