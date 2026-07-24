import { ScrollNavs } from "@/src/libraries/components/navigation/ScrollNavs";
import Link from "next/link";
import React from "react";
import { LANDING_CONTAINER_ID, LANDING_NAV } from "../constants";

export const Navigation: React.FC = () => {
    return (
        <div
            className={`bg-transparent transition-colors fixed top-0 left-0 w-full shrink-0 h-14 xs:h-20 flex items-center z-50`}
        >
            <ScrollNavs
                contentIds={LANDING_NAV.map(({ anchorId }) => anchorId)}
                containerId={LANDING_CONTAINER_ID}
            >
                {LANDING_NAV.map(({ text, anchorId }) => (
                    <div
                        key={anchorId}
                        className="flex flex-row-reverse items-center gap-4 -mr-1.25 transition-[transform]"
                    >
                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                        <Link
                            href={`#${anchorId}`}
                            className="transition-opacity whitespace-nowrap hover:opacity-95 opacity-60"
                        >
                            {text}
                        </Link>
                    </div>
                ))}
            </ScrollNavs>
            <Link
                href="/"
                className="h-full aspect-square text-white-1 flex items-center justify-center text-2xl"
            >
                <i className="ri-home-2-fill" />
            </Link>
            <div className="h-full relative z-1 flex justify-center sm:justify-end py-5 sm:py-3 sm:px-12 gap-8 w-full text-white-1 text-sm sm:text-lg font-medium">
                <Link href={"/designs"}>
                    <TopMenu title={"Designs"} />
                </Link>
                <Link href={"/auth/questions"}>
                    <TopMenu title="Support" />
                </Link>
                <Link href="/auth/login">
                    <TopMenu title="Login" />
                </Link>
                <Link href={"/auth/login?register=true"}>
                    <TopMenu title="Join Us" />
                </Link>
            </div>
        </div>
    );
};

const TopMenu: React.FC<{ title: string }> = ({ title }) => {
    return (
        <span className="whitespace-nowrap opacity-75 hover:opacity-100">
            {title}
        </span>
    );
};
