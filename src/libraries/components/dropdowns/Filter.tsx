import { useState } from "react";
import { useBlur } from "../../hooks/useBlur";

interface FilterProps {
    options: string[];
}

export const Filter: React.FC<FilterProps> = ({ options }) => {
    const [value, setValue] = useState<string>();
    const { isFocused, focus, unFocus, ref } = useBlur();

    return (
        <div ref={ref} className="relative flex flex-col w-fit">
            <div
                onClick={focus}
                className="pl-4 pr-3 h-8 my-auto flex justify-between gap-4 w-40 border-white/30 border-2 whitespace-nowrap text-white/75 rounded-sm bg-black-1 hover:bg-black-1.5 cursor-pointer items-center"
            >
                {value ? (
                    <>
                        <span>{value}</span>
                        <div
                            className="h-4 flex items-center justify-center aspect-square hover:text-white"
                            onClick={(e) => {
                                unFocus(e);
                                setValue(undefined);
                            }}
                        >
                            <i className="ri-close-line text-xl" />
                        </div>
                    </>
                ) : (
                    <>
                        <span>Sort By</span>
                        <i className="ri-filter-3-line" />
                    </>
                )}
            </div>
            {isFocused && (
                <div className="text-white/75 flex flex-col mt-4 w-40 bg-black-1 py-2 absolute z-50 top-full left-0 border-2 border-white/30 rounded-md">
                    <div className="flex flex-col text-sm">
                        {options.map((tag) => (
                            <div
                                onClick={(e) => {
                                    setValue(tag);
                                    unFocus(e);
                                }}
                                key={tag}
                                className="whitespace-nowrap py-1.5 pl-4 pr-8 hover:text-white/90 hover:bg-white/10 cursor-pointer"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
