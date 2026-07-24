import { useState } from "react";
import { Dropdown } from "./Dropdown";

interface SortByProps {
    options: string[];
    defaultOption?: string;
}

export const SortBy: React.FC<SortByProps> = ({ options, defaultOption }) => {
    const [sortBy, setSortBy] = useState<string | undefined>(
        defaultOption ?? undefined
    );

    const clearOption = (e: any) => {
        e.stopPropagation();
        setSortBy(undefined);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle className="pl-4 pr-3 h-8 flex justify-between gap-4 w-80 whitespace-nowrap rounded-sm cursor-pointer items-center dropdown-toggle">
                {sortBy ?? "Sort by"}
                {sortBy ? (
                    <i
                        onClick={clearOption}
                        className="ri-close-line text-xl"
                    />
                ) : (
                    <i className="ri-sort-desc" />
                )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="top-full left-0">
                {options.map((tag) => (
                    <Dropdown.Item
                        onClick={() => setSortBy(tag)}
                        key={tag}
                        className="whitespace-nowrap py-1 pl-4 pr-8 hover:bg-white/10 cursor-pointer"
                    >
                        {tag}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
