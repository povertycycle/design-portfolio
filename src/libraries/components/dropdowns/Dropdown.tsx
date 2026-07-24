import {
    ButtonHTMLAttributes,
    createContext,
    CSSProperties,
    HTMLAttributes,
    useContext,
} from "react";
import { useBlur } from "../../hooks/useBlur";

const DropdownContext = createContext<
    Pick<ReturnType<typeof useBlur>, "focus" | "isFocused" | "unFocus">
>({
    isFocused: false,
    focus: () => {},
    unFocus: () => {},
});

const DropdownComponent: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
}) => {
    const { ref, focus, unFocus, isFocused } = useBlur();

    return (
        <DropdownContext.Provider value={{ isFocused, focus, unFocus }}>
            <div
                ref={ref}
                data-dark={true}
                className={`relative flex dropdown-container ${className}`}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

const Toggle: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...restProps
}) => {
    const { focus } = useContext(DropdownContext);

    return (
        <button
            {...restProps}
            className={`${className} dropdown-toggle`}
            onClick={focus}
        >
            {children}
        </button>
    );
};

const Menu: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    style,
    ...restProps
}) => {
    const { isFocused } = useContext(DropdownContext);

    return (
        isFocused && (
            <div
                style={{
                    ...style,
                }}
                {...restProps}
                className={`dropdown-menu absolute z-50 rounded-lg w-80 flex flex-col mt-4 overflow-hidden ${className}`}
            >
                <div className="flex flex-col bg-black-1.5 w-full relative z-1  py-2">
                    {children}
                </div>
            </div>
        )
    );
};

const Item: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    onClick,
    ...restProps
}) => {
    const { unFocus } = useContext(DropdownContext);

    return (
        <div
            onClick={(e: any) => {
                unFocus(e);
                onClick?.(e);
            }}
            {...restProps}
            className={`cursor-pointer dropdown-item ${className}`}
        >
            {children}
        </div>
    );
};

export const Dropdown = Object.assign(DropdownComponent, {
    Toggle,
    Menu,
    Item,
});
