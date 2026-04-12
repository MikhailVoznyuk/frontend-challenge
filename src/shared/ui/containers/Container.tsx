import {type ReactNode} from 'react'

type Props = {
    children: ReactNode
}

export function Container({children}: Props) {
    return (
        <div className='w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-[62px] py-8 md:py-[52px] gap-8'>
            {children}
        </div>
    )
}