import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import { selectCats, selectCatsStatus } from "@/features/cats/model/selectors.ts";
import { fetchCats } from "@/features/cats/model/catsSlice.ts";
import { CatsGrid } from "@/widgets/cats-grid";

export function AllCatsPage() {
    const dispatch = useAppDispatch();
    const cats = useAppSelector(selectCats);
    const status = useAppSelector(selectCatsStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCats(20));
        }

    }, [dispatch, status]);

    return (
        <CatsGrid variant='all' cats={cats} />
    );
}