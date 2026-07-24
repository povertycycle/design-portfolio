import { CSSProperties } from "react";

export const Button: React.FC<{
    children: React.ReactNode;
    style?: CSSProperties;
}> = ({ children, style }) => {
    return (
        <div
            className={`bg-black h-10 w-10 flex items-center justify-center rounded-full relative`}
        >
            <div
                style={style}
                className={`bg-white-1 text-black-1 cursor-pointer h-8 w-8 rounded-full flex items-center justify-center hover:scale-120 transition-transform`}
            >
                {children}
            </div>
        </div>
    );
};
