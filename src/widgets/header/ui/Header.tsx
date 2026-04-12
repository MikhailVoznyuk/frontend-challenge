import {TabLink} from "@/shared/ui/navigation";

export function Header() {
    return (
        <div className="flex px-[62px] h-16 bg-accent">
            <TabLink to='/all'>Все котики</TabLink>
            <TabLink to='/favorites'>Любимые котики</TabLink>
        </div>
    )
}