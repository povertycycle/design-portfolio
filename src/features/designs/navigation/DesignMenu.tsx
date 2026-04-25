import Link from "next/link";

export const DesignMenu: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full text-white font-fjalla text-lg px-3">
                <Link
                    href="/designs/categories"
                    className="flex gap-2 items-center px-3 h-10 hover:bg-white/20"
                >
                    <span>Categories</span>
                    <i className="ri-arrow-right-s-line text-2xl" />
                </Link>
                <div className="flex flex-col font-smooch mt-2 gap-2">
                    {MENU.map(({ title, url }) => (
                        <Link
                            href={url}
                            key={title}
                            className="flex gap-4 items-center h-10 hover:bg-white/20 cursor-pointer px-3 rounded-md"
                        >
                            <span>{title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
const MENU = [
    { title: "Navigaions", url: "navigations" },
    { title: "Buttons", url: "buttons" },
    { title: "Inputs", url: "inputs" },
    { title: "Cards", url: "cards" },
];
