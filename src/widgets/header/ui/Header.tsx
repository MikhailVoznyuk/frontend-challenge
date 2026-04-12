import {TabLink} from "@/shared/ui/navigation";

export function Header() {
    return (
        <div className="flex justify-center md:justify-start px-0 md:px-[62px] h-16 bg-accent shadow-[0_4px_4px_0_rgba(0,0,0,0.24)]">
            <TabLink to='/all'>Все котики</TabLink>
            <TabLink to='/favorites'>Любимые котики</TabLink>
        </div>
    )
}