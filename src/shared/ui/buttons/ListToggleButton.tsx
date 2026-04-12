import {twMerge} from "tailwind-merge";

type Props = {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

export function ListToggleButton({ isOpen, onToggle, className }: Props) {
    const baseLineClassName = 'absolute w-full h-[3px] bg-white left-0 rounded-full transition-all duration-300'

    return (
        <button
            type='button'
            onClick={onToggle}
            className={
                twMerge(
                    'relative  w-10 h-8',
                    className
                )
            }
        >
            <span className={
                twMerge(
                    baseLineClassName,
                    'top-0',
                    isOpen && 'top-1/2 -translate-y-1/2 opacity-0 scale-0',
                )}
            />
            <span className={
                twMerge(
                    baseLineClassName,
                    'top-1/2 -translate-y-1/2 opacity-100',
                    isOpen && 'rotate-45',
                )}
            />
            <span className={
                twMerge(
                    baseLineClassName,
                    'top-1/2 -translate-y-1/2 opacity-0',
                    isOpen && '-rotate-45 opacity-100',
                )}
            />
            <span className={
                twMerge(
                    baseLineClassName,
                    'bottom-0',
                    isOpen && 'bottom-1/2 translate-y-1/2 opacity-0 scale-0',
                )}
            />
        </button>
    )
}