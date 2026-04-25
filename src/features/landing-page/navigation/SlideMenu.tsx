import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";
import { LANDING_CONTAINER_ID, LANDING_NAV } from "../constants";
import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";

export const SlideMenu: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    function intializeScroller() {
        const elem = document.getElementById(LANDING_CONTAINER_ID);
        if (!elem) {
            return;
        }

        elem.onscroll = () => {
            const factor = elem.scrollTop / window.innerHeight;
            if (!ref.current) {
                return;
            }

            ref.current.childNodes.forEach((child, i) => {
                const node = child as HTMLDivElement;
                node.style.transform = `translateY(-${
                    factor <= i ? 0 : Math.min(1, factor - i) * 25
                }vh)`;
                const span = node.getElementsByTagName("a")?.[0];
                if (span) {
                    span.style.opacity = `${
                        factor > i + 1 || factor < i + 0.1 || factor === 0
                            ? 0.6
                            : 1
                    }`;
                }
            });
        };
    }

    useEffect(() => {
        intializeScroller();
    }, []);

    return (
        <div className="h-dvh sm:h-screen fixed right-6 top-0 flex flex-col justify-end items-end">
            <div
                ref={ref}
                className="bg-gray-300 w-0.5 h-full right-0 flex flex-col items-end justify-end gap-6 text-sm sm:text-lg font-raleway text-gray-300 font-medium"
            >
                {LANDING_NAV.map(({ text, anchorId }, i) => (
                    <div
                        key={anchorId}
                        className="flex flex-row-reverse items-center gap-4 -mr-1.25 transition-[transform]"
                    >
                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                        <Link
                            href={`#${anchorId}`}
                            className="hover:text-white transition-opacity opacity-60"
                        >
                            <span className="transition-opacity whitespace-nowrap">
                                {text}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
            <CompanySocials />
        </div>
    );
};

/**
 * [v2.0] - Company social media icons and redirection to their urls.
 */
const CompanySocials: React.FC = () => {
    return (
        <div className="flex flex-col items-end">
            <div className="h-4 w-0.5 bg-gray-300" />
            {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                <Fragment key={remixicon}>
                    <Link
                        href={url}
                        target="_blank"
                        className="border-2 shrink-0 border-white group mr-px rounded-full flex items-center justify-center w-8 h-8 text-white translate-x-1/2"
                    >
                        <span className="hover:opacity-100 opacity-60 transition-opacity">
                            <i className={remixicon} />
                        </span>
                    </Link>
                    <div className="h-4 w-0.5 bg-gray-300" />
                </Fragment>
            ))}
        </div>
    );
};
