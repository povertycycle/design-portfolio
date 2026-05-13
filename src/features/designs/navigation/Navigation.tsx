import { useState } from "react";
import { Menu } from "./Menu";

export const Navigation: React.FC = () => {
    const [compressed, setCompressed] = useState<boolean>(false);

    const toggle = () => setCompressed((prev) => !prev);

    return (
        <div
            className={`${
                compressed ? "w-16.5" : "w-60"
            } transition-[width] duration-500 border-r-2 border-white/35 flex flex-col h-full text-gray-300 text-lg shrink-0 relative`}
        >
            <div
                onClick={toggle}
                className="absolute right-0 top-5 translate-x-1/2 text-xl font-bold cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-white/35"
            >
                <span className="hover:opacity-100 opacity-60 transition-opacity text-base mr-0.5">
                    {!compressed ? (
                        <i className="ri-arrow-left-s-line" />
                    ) : (
                        <i className="ri-arrow-right-s-line" />
                    )}
                </span>
            </div>
            <Menu />
        </div>
    );
};
