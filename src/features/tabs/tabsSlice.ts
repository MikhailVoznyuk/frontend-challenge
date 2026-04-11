import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Tab = 'all' | 'liked';

interface TabsState {
    currentTab: Tab;
}

const initialState: TabsState = {
    currentTab: "all",
}

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setCurrentTab: (state, action: PayloadAction<Tab>) => {
            state.currentTab = action.payload;
        },
        resetTab: (state) => {
            state.currentTab = 'all';
        }
    }
});

export const { setCurrentTab, resetTab } = tabsSlice.actions;
export default tabsSlice.reducer;