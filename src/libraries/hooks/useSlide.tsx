import { useRef } from "react";

export const useSlide = (distance?: number) => {
    const leftButtonRef = useRef<HTMLDivElement>(null);
    const rightButtonRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (
            !ref.current ||
            !window ||
            !leftButtonRef.current ||
            !rightButtonRef.current
        )
            return;
        const displacement = distance ?? window.innerWidth;

        ref.current.scrollLeft -= displacement;
        leftButtonRef.current.style.display = "none";
        rightButtonRef.current.style.display = "flex";
    };

    const scrollRight = () => {
        if (
            !ref.current ||
            !window ||
            !leftButtonRef.current ||
            !rightButtonRef.current
        )
            return;
        const displacement = distance ?? window.innerWidth;

        ref.current.scrollLeft += displacement;
        leftButtonRef.current.style.display = "flex";
        rightButtonRef.current.style.display = "none";
    };

    return {
        ref,
        left: { scroll: scrollLeft, button: leftButtonRef },
        right: { scroll: scrollRight, button: rightButtonRef },
    };
};
