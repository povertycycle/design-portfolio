import Link from "next/link";

export const DesignMenu: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full text-white font-fjalla text-lg px-3">
                <Link
                    href="/designs/categories"
                    className="flex gap-2 items-center px-3 h-10 hover:bg-white/20 w-full"
                >
                    <span className="truncate flex items-center">
                        Categories{" "}
                        <i className="ri-arrow-right-s-line text-2xl ml-2" />
                    </span>
                </Link>
                <div className="flex flex-col font-smooch mt-2 gap-2 w-full">
                    {MENU.map(({ title, url }) => (
                        <Link
                            href={`/designs/${url}`}
                            key={title}
                            className="flex gap-4 w-full items-center h-10 hover:bg-white/20 cursor-pointer px-3 rounded-md"
                        >
                            <span className="truncate">{title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
const MENU = [
    { title: "Inputs", url: "inputs" },
    { title: "Dropdowns", url: "dropdowns" },
    { title: "Cards", url: "cards" },
    { title: "Lists", url: "lists" },
    { title: "Navigations", url: "navigations" },
    { title: "Buttons", url: "buttons" },
];
