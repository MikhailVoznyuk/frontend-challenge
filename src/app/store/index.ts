import { configureStore } from '@reduxjs/toolkit';
import TabsSliceReducer from '@/features/tabs/tabsSlice.ts'

export const store = configureStore({
    reducer: {
        tabs: TabsSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store;
