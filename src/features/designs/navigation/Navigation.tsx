import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "./Menu";

export const Navigation: React.FC = () => {
    const [compressed, setCompressed] = useState<boolean>(false);

    const toggle = () => setCompressed((prev) => !prev);

    return (
        <div
            className={`py-4 pl-4 ${
                compressed ? "w-22" : "w-72"
            } transition-[width] duration-500 border-r-2 border-gray-300 flex flex-col h-full text-gray-300 text-lg shrink-0 relative`}
        >
            <div
                onClick={toggle}
                className="absolute right-0 top-4 translate-x-1/2 text-xl font-bold cursor-pointer flex items-center justify-center w-9 h-9 rounded-full bg-black border-2 border-gray-300"
            >
                <span className="hover:opacity-100 opacity-60 transition-opacity">
                    {!compressed ? (
                        <i className="ri-arrow-left-s-line" />
                    ) : (
                        <i className="ri-arrow-right-s-line" />
                    )}
                </span>
            </div>
            <div className="h-9 w-full flex">
                <Link
                    href="/"
                    className="w-9 h-9 group shrink-0 border-gray-300 border-2 text-white rounded-sm flex items-center justify-center"
                >
                    <i className="group-hover:opacity-100 opacity-60 transition-opacity ri-home-2-line" />
                </Link>
                <div className="my-auto h-0.5 bg-gray-300 w-full" />
            </div>
            <Menu />
        </div>
    );
};
