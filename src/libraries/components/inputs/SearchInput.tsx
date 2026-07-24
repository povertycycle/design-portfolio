import { useId, useState } from "react";
import { useBlur } from "../../hooks/useBlur";
import { SearchContent } from "../list/SearchContent";

interface SearchInputProps {
    placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
    const id = useId();
    const [search, setSearch] = useState<string>("");
    const { ref, focus, isFocused } = useBlur();

    return (
        <div ref={ref} className="relative w-full font-fjalla z-2">
            <input
                id={id}
                value={search}
                onClick={focus}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                autoComplete="off"
                className="peer relative px-8 h-8 z-1 pb-px focus:border-white-1 hover:border-white/80 transition-colors border-white/60 border-2 w-full focus:outline-none rounded-full"
            />
            <div className="peer-focus:text-white-1 absolute left-0.5 text-white/60 peer-hover:text-white/80 transition-colors top-0 z-0 h-8 w-8 flex items-center justify-center">
                <i className="ri-search-line font-bold" />
            </div>
            {!!search && (
                <div
                    onClick={() => setSearch("")}
                    className="absolute right-px bottom-0 cursor-pointer opacity-60 peer-focus:opacity-80 hover:opacity-100 z-2 h-8 w-8 flex items-center justify-center"
                >
                    <i className="ri-close-circle-fill text-xl" />
                </div>
            )}
            {!!isFocused && !!search && <SearchContent />}
        </div>
    );
};
