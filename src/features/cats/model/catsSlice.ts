import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCats } from "@/shared/api/catApi";
import type { Cat } from "@/entities/cat/model/types.ts";

type CatsState = {
    items: Cat[],
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
    page: number;
    limit: number;
    hasMore: boolean;
    isFetchingMore: boolean;
}

const initialState: CatsState = {
    items: [],
    status: 'idle',
    error: null,
    page: 0,
    limit: 15,
    hasMore: true,
    isFetchingMore: false,
}

type FetchCatsParams = {
    page: number;
    limit: number;
}

type FetchCatsResult = {
    items: Cat[];
    page: number;
    limit: number;
}

export const fetchCats = createAsyncThunk<FetchCatsResult, FetchCatsParams>(
    'cats/fetchCats',
    async ({page, limit}) => {
        const items = await getCats({page, limit});
        return {items, page, limit}
    }
)

function MergeUniqueCats(prev: Cat[], next: Cat[]): Cat[] {
    const map = new Map<string, Cat>(prev.map((cat) => [cat.id, cat]));
    for (const cat of next) {
        map.set(cat.id, cat)
    }

    return Array.from(map.values()) ;
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state, action) => {
            const nextPage = action.meta.arg.page;
            if (nextPage === 0) {
                state.status = 'loading';
                state.isFetchingMore = false;
            } else {
                state.isFetchingMore = true;
            }
            state.error = null;
        })
        .addCase(fetchCats.fulfilled, (state, action) => {
            const {items, page, limit} = action.payload;
            state.status = 'success';
            state.page = page;
            state.limit = limit;
            state.hasMore = items.length === limit;
            state.isFetchingMore = false;
            state.error = null;

            state.items = (page === 0) ? items : MergeUniqueCats(state.items, items);
        })
        .addCase(fetchCats.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message ?? 'Unknown error';
            state.isFetchingMore = false;
        })
    }
})

export default catsSlice.reducer;

