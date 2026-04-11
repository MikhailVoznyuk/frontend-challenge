import { useAppDispatch, useAppSelector } from "@/app/store/hooks.ts";
import { selectIsFavorite } from "@/features/favorites/model/selectors.ts";
import { toggleFavorite } from "@/features/favorites/model/favoritesSlice.ts";
import { HeartButton } from "@/shared/ui/buttons";

import type { Cat } from "@/entities/cat/model/types.ts";

type Props = {
    cat: Cat
}
export function CatCard({cat}: Props) {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector(selectIsFavorite(cat.id));

    return (
        <section className='relative w-56 h-56'>
            <img
                src={cat.url}
                alt='cat'
                loading='lazy'
                decoding='async'
                width={cat.width}
                height={cat.height}
                className='w-full h-full object-cover object-center'
            />
            <HeartButton
                isActive={isFavorite}
                onClick={() => dispatch(toggleFavorite(cat))}
                className='absolute right-4 bottom-4'
            />
        </section>
    )
}