import {CatCard} from "@/entities/cat/ui/CatCard";
import type {Cat} from "@/entities/cat/model/types";

type Props = {
    variant: 'all' | 'favorite'
    cats: Cat[];
}

export function CatsGrid({cats, variant}: Props) {
    if (!cats.length) {
        return (
            <div className='w-full h-[40vh] flex justify-center items-center'>
                <span>
                    {variant === 'all' ? 'Загружаю котиков...' : 'Здесь пока пусто...'}
                </span>
            </div>
        )
    }
    return (
        <section
            className='w-full px-[62px] py-[52px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[52px]'
        >

            {cats.map((cat) => <CatCard key={cat.id} cat={cat} />)}
        </section>
    )

}