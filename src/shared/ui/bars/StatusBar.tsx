import {type ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function StatusBar({children}: Props) {
    return (
        <span>{children}</span>
    )
}