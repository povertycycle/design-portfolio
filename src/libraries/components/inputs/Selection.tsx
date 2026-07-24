import React, { HTMLAttributes, useContext, useState } from "react";

type Option<T> = {
    title: React.ReactNode;
    value: T;
};

interface Selection<T> {
    options: Option<T>[];
}

export function Selection<T>(
    props: Selection<T> & HTMLAttributes<HTMLDivElement>
) {
    const { options, style, className, ...restProps } = props;
    const [active, setActive] = useState<T | null>(options[0]?.value ?? null);
    const { activeIndex, activeTitle } = getActiveData<T | null>(
        options,
        active
    );

    return (
        <div
            style={{
                width: `${128 * options.length + 8}px`,
                ...style,
            }}
            {...restProps}
            className={`bg-black-1.5 text-black flex h-8 relative overflow-hidden rounded-md p-1 ${className}`}
        >
            <div className="flex relative h-full">
                {options.map(({ title, value }, i) => (
                    <button
                        key={i}
                        className={`text-white-1 h-full cursor-pointer w-32 shrink-0 flex px-2 items-center justify-center`}
                        onClick={() => setActive(value)}
                    >
                        {title}
                    </button>
                ))}
                <div
                    className={`bg-white-1 text-black-1 absolute h-full w-32 px-2 rounded-sm top-0 flex items-center justify-center transition-[left]`}
                    style={{
                        left: `${(activeIndex / options.length) * 100}%`,
                    }}
                >
                    {activeTitle}
                </div>
            </div>
        </div>
    );
}

function getActiveData<T>(options: Option<T>[], active: T) {
    let activeIndex = -1,
        activeTitle = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === active) {
            activeTitle = options[i].title;
            activeIndex = i;
            break;
        }
    }

    return { activeIndex, activeTitle };
}
