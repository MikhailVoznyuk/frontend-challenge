import type {RootState} from "@/app/store/index.ts";

export const selectCats = (state: RootState) => state.cats.items;
export const selectCatsStatus = (state: RootState) => state.cats.status;
export const selectCatsError = (state: RootState) => state.cats.error;
export const selectCatsPage = (state: RootState) => state.cats.page;
export const selectCatsHasMore = (state: RootState) => state.cats.hasMore;
export const selectCatsFetchingMore = (state: RootState) => state.cats.isFetchingMore;