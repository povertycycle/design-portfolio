import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";
import Link from "next/link";
import { Fragment, RefObject, useEffect, useRef } from "react";

interface ScrollNavsProps {
    containerId: string;
    contentIds: string[];
    children: React.ReactNode;
}

export const ScrollNavs: React.FC<ScrollNavsProps> = ({
    containerId,
    contentIds,
    children,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollCache = useRef<number[] | null>(null);

    function intializeScroller() {
        const elem = document.getElementById(containerId);
        if (!elem) {
            return;
        }

        const scrollLevel = getScrollLevel(scrollCache, contentIds) ?? [];

        elem.onscroll = () => {
            if (!ref.current) {
                return;
            }

            ref.current.childNodes.forEach((child, i) => {
                const node = child as HTMLDivElement;
                const lower = scrollLevel[i],
                    upper = scrollLevel[i + 1];
                const factor =
                    elem.scrollTop <= lower
                        ? 0
                        : elem.scrollTop >= upper
                        ? 1
                        : elem.scrollTop / upper;

                node.style.transform = `translateY(-${factor * 25}vh)`;
                const span = node.getElementsByTagName("span")?.[0];
                if (span) {
                    span.style.opacity = `${
                        factor >= 1 || factor <= 0 ? 0.6 : 1
                    }`;
                }
            });
        };
    }

    useEffect(() => {
        intializeScroller();
    }, []);

    return (
        <div className="h-dvh sm:h-screen fixed right-5 top-0 flex flex-col justify-end items-end">
            <div
                ref={ref}
                className="bg-gray-300 w-0.5 h-full right-0 flex flex-col items-end justify-end gap-6 text-base font-raleway text-white font-medium"
            >
                {children}
            </div>
            <CompanySocials />
        </div>
    );
};

const CompanySocials: React.FC = () => {
    return (
        <div className="flex flex-col items-end">
            <div className="h-16 w-0.5 bg-gray-300" />
            {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                <Fragment key={remixicon}>
                    <Link
                        href={url}
                        target="_blank"
                        className="border-2 shrink-0 border-white group mr-px rounded-full flex items-center justify-center w-7 h-7 text-white translate-x-1/2"
                    >
                        <span className="hover:opacity-100 opacity-60 transition-opacity text-sm">
                            <i className={remixicon} />
                        </span>
                    </Link>
                    <div className="h-4 w-0.5 bg-gray-300" />
                </Fragment>
            ))}
        </div>
    );
};

function getScrollLevel(
    cache: RefObject<number[] | null>,
    contentIds: string[]
) {
    if (!document || !window || contentIds.length === 0) {
        return;
    }

    if (!cache.current) {
        const elements = contentIds.map((id) => document.getElementById(id));
        const threshold = [0];
        elements.forEach((element) => {
            const bound = element?.getBoundingClientRect();
            threshold.push(bound ? bound.top : 0);
        });
        cache.current = threshold;
    }

    return cache.current;
}
