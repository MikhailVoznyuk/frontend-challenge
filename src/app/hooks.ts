import { useStore, useSelector, useDispatch } from 'react-redux'
import type { AppStore, RootState, AppDispatch} from "@/app/store.ts";

export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();