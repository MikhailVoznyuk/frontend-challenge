import { NavLink, type NavLinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

type Props = Omit<NavLinkProps, 'className'> & {
    className?: string;
}

export function TabLink({className, ...props}: Props) {
    return (
        <NavLink
            {...props}
            className={({isActive}) => twMerge(
                'h-16 px-8 flex justify-center items-center bg-accent text-white/70 text-sm hover:text-white transition duration-200 ease-in-out',
                isActive && 'text-white bg-primary',
                className,
            )}
        />
    )
}