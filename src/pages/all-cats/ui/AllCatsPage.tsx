import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectCats, selectCatsStatus, selectCatsPage, selectCatsError, selectCatsHasMore, selectCatsFetchingMore } from "@/features/cats/model/selectors";
import { fetchCats } from "@/features/cats/model/catsSlice";
import { CatsGrid } from "@/widgets/cats-grid";
import { StatusBar } from "@/shared/ui/bars";
import { Container } from "@/shared/ui/containers";

const LIMIT = 15;

export function AllCatsPage() {
    const dispatch = useAppDispatch();
    const cats = useAppSelector(selectCats);
    const status = useAppSelector(selectCatsStatus);
    const error = useAppSelector(selectCatsError);
    const page = useAppSelector(selectCatsPage);
    const hasMore = useAppSelector(selectCatsHasMore);
    const fetchingMore = useAppSelector(selectCatsFetchingMore);

    const sentinelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCats({page: 0, limit: LIMIT}));
        }
    }, [dispatch, status]);

    useEffect(() => {
        const node = sentinelRef.current;
        if (!node || !hasMore || status === 'error') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry.isIntersecting) return;
                if (status === 'loading' || fetchingMore || !hasMore || !!error) return;

                dispatch(fetchCats({page: page + 1, limit: LIMIT}));
            },
            {
                root: null,
                rootMargin: '300px 0px',
                threshold: 0
            }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        }

    }, [dispatch, page, status, fetchingMore, hasMore, error]);


    return (
        <Container>
            <CatsGrid cats={cats} />
            <div ref={sentinelRef} className='h-10' />

            {status === 'loading' && cats.length === 0 &&
                <StatusBar>Загружаю котиков...</StatusBar>
            }
            {status === 'error' &&
                <StatusBar> {`Ошибка при загрузке: ${error}`}</StatusBar>
            }
            {fetchingMore &&
                <StatusBar>Загружаю еще котиков...</StatusBar>
            }
            {
                !hasMore && cats.length > 0 &&
                <StatusBar>Котики закончились</StatusBar>
            }
        </Container>

    );
}