import { MouseEventHandler, useEffect, useRef, useState } from "react";

export const useBlur = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handler = (evt: globalThis.MouseEvent) => {
            if (!!ref.current && !ref.current.contains(evt.target as Node)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mouseup", handler);
        return () => {
            document.removeEventListener("mouseup", handler);
        };
    }, []);
    const focus: MouseEventHandler<HTMLInputElement> = (e) => {
        e?.stopPropagation();
        setIsFocused(true);
    };

    return { isFocused, focus, ref };
};
