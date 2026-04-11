import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCats } from "@/shared/api/catApi";
import type { Cat } from "@/entities/cat/model/types.ts";

type CatsState = {
    items: Cat[],
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null
}

const initialState: CatsState = {
    items: [],
    status: 'idle',
    error: null
}

const fetchCats = createAsyncThunk<Cat[], number | undefined>(
    'cats/fetchCats',
    async (limit?: number) => {
        return await getCats(limit);
    }
)

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchCats.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        })
        .addCase(fetchCats.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message ?? 'Unknown error';
        })
    }
})

export default catsSlice.reducer;

