import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch} from "@/app/store/index.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();