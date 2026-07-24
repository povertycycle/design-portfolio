import {
    ButtonHTMLAttributes,
    createContext,
    CSSProperties,
    HTMLAttributes,
    MouseEvent,
    useContext,
} from "react";
import { createPortal } from "react-dom";
import { useBlur } from "../../hooks/useBlur";

const PopupContext = createContext<
    Pick<ReturnType<typeof useBlur>, "focus" | "isFocused" | "unFocus">
>({
    focus: () => {},
    isFocused: false,
    unFocus: () => {},
});

const PopupComponent: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { focus, isFocused, unFocus } = useBlur();

    return (
        <PopupContext.Provider value={{ isFocused, focus, unFocus }}>
            <>{children}</>
        </PopupContext.Provider>
    );
};

const Toggle: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...restProps
}) => {
    const { focus } = useContext(PopupContext);

    return (
        <button {...restProps} className={className} onClick={focus}>
            {children}
        </button>
    );
};
const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { unFocus } = useContext(PopupContext);

    return (
        <div className="flex justify-between items-center text-xl pl-1">
            {children}
            <div
                className="h-full aspect-square flex items-center justify-center cursor-pointer"
                onClick={unFocus}
            >
                <i className="ri-close-line text-2xl" />
            </div>
        </div>
    );
};

const CloseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    onClick,
    ...attributes
}) => {
    const { unFocus } = useContext(PopupContext);

    const parsedClick = (e: any) => {
        onClick?.(e);
        unFocus(e);
    };

    return (
        <button {...attributes} className={className} onClick={parsedClick}>
            {children}
        </button>
    );
};

const Display: React.FC<{
    children: React.ReactNode;
    style?: CSSProperties;
    className?: string;
}> = ({ children, style, className }) => {
    const { isFocused, unFocus } = useContext(PopupContext);

    return (
        isFocused &&
        createPortal(
            <div className="w-screen h-screen fixed top-0 left-0 z-10000 flex items-center justfy-center">
                <div
                    className="w-full h-full absolute top-0 left-0 bg-black/50"
                    onClick={unFocus}
                />
                <div
                    style={style}
                    className={`bg-black z-1 border-2 border-white/20 rounded-2xl w-120 m-auto text-white-1 p-6 font-fjalla flex flex-col overflow-hidden ${className}`}
                >
                    {children}
                </div>
            </div>,
            document.body
        )
    );
};

export const Popup = Object.assign(PopupComponent, {
    Toggle,
    Display,
    Header,
    CloseButton,
});
