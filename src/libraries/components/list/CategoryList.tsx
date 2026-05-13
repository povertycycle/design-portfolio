import { useState } from "react";
import { useSlide } from "../../hooks/useSlide";

export const CategoryList: React.FC = () => {
    const [category, setCategory] = useState<string>("All");
    const { ref, left, right } = useSlide();

    return (
        <div className="flex w-full p-6 relative">
            <div
                ref={left.button}
                onClick={left.scroll}
                className="h-8 w-8 hidden items-center justify-center rounded-full bg-black hover:bg-[#333333] cursor-pointer absolute left-2 top-6"
            >
                <i className="ri-arrow-left-s-line" />
            </div>
            <div
                ref={right.button}
                onClick={right.scroll}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-black hover:bg-[#333333] cursor-pointer absolute right-2 top-6"
            >
                <i className="ri-arrow-right-s-line" />
            </div>
            <div
                ref={ref}
                className="flex gap-4 w-full overflow-x-scroll hidden-scroll scroll-smooth"
            >
                {CATEGORIES.map((cat) => (
                    <div
                        onClick={() => setCategory(cat)}
                        className={`h-8 flex items-center px-4 rounded-sm whitespace-nowrap ${
                            cat === category
                                ? "bg-white text-black"
                                : " bg-[#333333] cursor-pointer hover:bg-[#404040]"
                        }`}
                        key={cat}
                    >
                        {cat}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CATEGORIES = [
    "All",
    "Premier League",
    "BLAST R6",
    "Esports",
    "Gaming",
    "Live",
    "Music Analysis",
    "Elden Ring",
    "PSG",
    "Lionel Messi",
    "Bingo Brawlers",
    "AGDQ 2026",
    "Technology",
    "Barbarian",
    "Jurassic Park",
    "History",
    "Cooking Show",
];
