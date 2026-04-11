import type { Cat } from "@/entities/cat/model/types.ts";

type Props = {
    cat: Cat
}
export function CatCard({cat}: Props) {
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
        </section>
    )
}