import { useEffect, useRef, useState } from "react";

interface PaginationProps {
    maxPages: number;
    constants?: {
        siblings?: number;
        jump?: number;
    };
}

export const Pagination: React.FC<PaginationProps> = ({
    maxPages,
    constants,
}) => {
    const [activePage, setActivePage] = useState<number>(1);

    const ref = useRef<HTMLDivElement>(null);
    function generatePages(currentPage: number) {
        const siblings = constants?.siblings || 1,
            jump = siblings + (constants?.jump || 1);
        const maxOptions = 4 + siblings * 2;
        if (maxPages <= maxOptions) {
            return Array.from({ length: maxPages }, (_, i) => i + 1);
        } else if (activePage < maxOptions - 1) {
            return [
                ...Array.from({ length: maxOptions - 2 }, (_, i) => i + 1),
                -(maxOptions - 1),
                maxPages,
            ];
        } else if (activePage > maxPages - maxOptions + 2) {
            return [
                1,
                -(maxPages - maxOptions + 2),
                ...Array.from(
                    { length: maxOptions - 2 },
                    (_, i) => maxPages - i
                ).reverse(),
            ];
        } else {
            return [
                1,
                -(activePage - jump),
                ...Array.from(
                    { length: 1 + siblings * 2 },
                    (_, i) => currentPage - siblings + i
                ),
                -(activePage + jump),
                maxPages,
            ];
        }
    }

    const options = generatePages(activePage);
    const modify = (page: number) => () => setActivePage(page);

    useEffect(() => {
        if (ref.current) {
            const index = options.indexOf(activePage);
            const newPos =
                (index === -1 ? Math.floor(options.length / 2) : index) * 40;
            ref.current.style.left = `${newPos}px`;
        }
    }, [activePage]);

    return (
        <div className="w-lg mx-auto flex mt-auto items-center h-14 shrink-0 font-bold gap-4 text-white py-3 z-3">
            <button
                disabled={activePage <= 1}
                onClick={activePage <= 1 ? undefined : modify(activePage - 1)}
                className="disabled:bg-white/25 disabled:text-white/50 bg-white/25 cursor-pointer h-full aspect-square flex not-disabled:hover:bg-white/50 transition-colors rounded-full disabled:cursor-not-allowed"
            >
                <i className="m-auto ri-arrow-left-s-line" />
            </button>
            <div className="flex gap-2 relative h-full">
                {options.length === 0 ? (
                    <div
                        className={`h-full aspect-square flex items-center justify-center transition-colors rounded-full`}
                    >
                        0
                    </div>
                ) : (
                    options.map((num, i) => (
                        <button
                            key={i}
                            className={`h-full aspect-square flex items-center justify-center ${
                                activePage === num
                                    ? "cursor-default"
                                    : "sm:hover:bg-white/35 cursor-pointer"
                            } transition-colors rounded-full`}
                            onClick={modify(num < 0 ? -num : num)}
                        >
                            {num < 0 ? "..." : num}
                        </button>
                    ))
                )}
                <div
                    ref={ref}
                    className="transition-[left] rounded-full absolute left-0 top-0 bg-white text-black h-full aspect-square flex items-center justify-center"
                >
                    {activePage}
                </div>
            </div>
            <button
                disabled={activePage + 1 >= maxPages}
                onClick={
                    activePage + 1 >= maxPages
                        ? undefined
                        : modify(activePage + 1)
                }
                className="disabled:bg-white/25 disabled:text-white/50 bg-white/25 cursor-pointer h-full aspect-square flex not-disabled:hover:bg-white/50 transition-colors rounded-full disabled:cursor-not-allowed"
            >
                <i className="m-auto ri-arrow-right-s-line" />
            </button>
        </div>
    );
};
