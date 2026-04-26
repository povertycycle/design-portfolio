import Link from "next/link";
import React from "react";
import { SlideMenu } from "./SlideMenu";

/**
 * [v2.0] - Header container component for landing page.
 */
export const Navigation: React.FC = () => {
    return (
        <div
            className={`bg-transparent transition-colors fixed top-0 left-0 w-full shrink-0 h-14 xs:h-20 flex items-center z-50`}
        >
            <SlideMenu />
            <Link
                href="/"
                className="h-full aspect-square text-white flex items-center justify-center text-2xl"
            >
                <i className="ri-home-2-fill" />
            </Link>
            <div className="h-full relative z-1 flex justify-center sm:justify-end py-5 sm:py-3 sm:px-12 gap-8 w-full text-white text-sm sm:text-xl font-medium tracking-wider">
                <Link href={"/designs"}>
                    <TopMenu title={"Designs"} />
                </Link>
                <Link href={"/auth/questions"}>
                    <TopMenu title="Support" />
                </Link>
                <Link href="/auth/login">
                    <TopMenu title="Login" />
                </Link>
                <Link href={"/auth/register"}>
                    <TopMenu title="Join Us" />
                </Link>
            </div>
        </div>
    );
};

/**
 * [v2.0] - Custom helper component for hover animation.
 */
const TopMenu: React.FC<{ title: string }> = ({ title }) => {
    return (
        <span className="whitespace-nowrap opacity-65 hover:opacity-100">
            {title}
        </span>
    );
};
