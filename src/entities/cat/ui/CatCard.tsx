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
        <section className='relative w-56 h-56 group/cat'>
            <img
                src={cat.url}
                alt='cat'
                loading='lazy'
                decoding='async'
                width={cat.width}
                height={cat.height}
                className='w-full h-full object-cover object-center group-hover/cat:scale-110 transition-all duration-300 hover:shadow-[2px_2px_6px_3px_rgba(0,0,0,0.34)]'
            />
            <HeartButton
                isActive={isFavorite}
                onClick={() => dispatch(toggleFavorite(cat))}
                className='absolute opacity-0 right-2 bottom-2 group-hover/cat:right-0 group-hover/cat:bottom-0 group-hover/cat:opacity-100 duration-300'
            />
        </section>
    )
}