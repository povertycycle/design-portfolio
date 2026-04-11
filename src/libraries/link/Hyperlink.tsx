import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type HyperlinkProps = {
    url: string;
    children?: React.ReactNode;
    target?: HTMLAttributeAnchorTarget;
};

export const Hyperlink: React.FC<HyperlinkProps> = ({
    url,
    children,
    target,
}) => {
    return (
        <Link
            onClick={(e) => {
                e.stopPropagation();
            }}
            href={url}
            target={target}
            className="sm:[--underline-width:0%] pb-slight transition-[background-size] max-sm:[--underline-width:100%] sm:hover:[--underline-width:100%]"
            style={{
                background:
                    "linear-gradient(currentColor 0 0) bottom left / var(--underline-width, 0%) 1px no-repeat",
            }}
        >
            {children ?? url}
        </Link>
    );
};
