import {CatCard} from "@/entities/cat/ui/CatCard";
import type {Cat} from "@/entities/cat/model/types";

type Props = {
    cats: Cat[];
}

export function CatsGrid({cats}: Props) {
    return (
        <section
            className='w-full grid justify-center grid-cols-[repeat(1,auto)]  sm:grid-cols-[repeat(2,auto)] 2 md:grid-cols-[repeat(3,auto)]  lg:grid-cols-[repeat(4,auto)]  xl:grid-cols-[repeat(5,auto)]  gap-8 md:gap-[52px]'
        >

            {cats.map((cat) => <CatCard key={cat.id} cat={cat} />)}
        </section>
    )

}