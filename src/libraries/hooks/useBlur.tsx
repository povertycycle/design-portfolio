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
    const focus: MouseEventHandler<HTMLElement> = (e) => {
        e?.stopPropagation();
        setIsFocused(true);
    };
    const unFocus: MouseEventHandler<HTMLElement> = (e) => {
        e?.stopPropagation();
        setIsFocused(false);
    };

    return { isFocused, focus, ref, unFocus };
};
