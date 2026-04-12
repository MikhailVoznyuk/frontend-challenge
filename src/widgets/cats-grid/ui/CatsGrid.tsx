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
            className='w-full px-4 sm:px-8 md:px-[62px] py-4 sm:py-8 md:py-[52px] grid justify-center grid-cols-[repeat(1,auto)]  sm:grid-cols-[repeat(2,auto)] 2 md:grid-cols-[repeat(3,auto)]  lg:grid-cols-[repeat(4,auto)]  xl:grid-cols-[repeat(5,auto)]  gap-4 sm:gap-8 md:gap-[52px]'
        >

            {cats.map((cat) => <CatCard key={cat.id} cat={cat} />)}
        </section>
    )

}