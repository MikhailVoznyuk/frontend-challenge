import { useEffect, useState } from "react";
import {twMerge} from "tailwind-merge";
import { TabLink } from "@/shared/ui/navigation";
import { ListToggleButton } from "@/shared/ui/buttons";

const MOBILE_MEDIA = '(max-width: 480px)'
export function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const baseHeaderClassName = 'flex items-center h-16 bg-accent shadow-[0_4px_4px_0_rgba(0,0,0,0.24)]'
    useEffect(() => {
        const media = window.matchMedia(MOBILE_MEDIA);

        const onChange = (e: MediaQueryListEvent)=> {
            setIsMobile(e.matches);
        }

        setIsMobile(media.matches);

        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', onChange);
            return () => {
                media.removeEventListener('change', onChange);
            }
        }

        media.addListener(onChange);
        return () => media.removeListener(onChange);
    }, []);

    if (isMobile) {
        return (
            <div className='sticky top-0 w-full z-10'>
                <div className={
                    twMerge(
                        baseHeaderClassName,
                        'justify-end px-4',

                    )
                }
                >
                    <ListToggleButton
                        isOpen={isNavOpen}
                        onToggle={() => setIsNavOpen((prev) => !prev)}
                    />
                </div>
                <div className={twMerge(
                    'absolute top-full h-0 w-full flex flex-col gap-4 bg-accent  overflow-hidden transition-all duration-300',
                    isNavOpen && 'h-[144px] shadow-[0_4px_4px_0_rgba(0,0,0,0.24)]'
                )}>
                    <TabLink onClick={() => setIsNavOpen(false)} to='/all'>Все котики</TabLink>
                    <TabLink onClick={() => setIsNavOpen(false)} to='/favorites'>Любимые котики</TabLink>
                </div>
            </div>

        )
    } else {
        return (
            <div className={
                twMerge(
                    baseHeaderClassName,
                    "sticky top-0 z-10 justify-center md:justify-start px-0 md:px-[62px]"
                )}>
                <TabLink to='/all'>Все котики</TabLink>
                <TabLink to='/favorites'>Любимые котики</TabLink>
            </div>
        )
    }
}