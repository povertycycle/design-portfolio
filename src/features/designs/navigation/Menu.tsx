import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className="flex flex-col overflow-hidden w-full h-full">
            <h1 className="text-xl mt-14 text-end border-b-2 border-gray-300 pb-2 px-3">
                Categories
            </h1>
            <div className="flex flex-col items-end overflow-y-auto mt-3 pr-3 font-smooch text-xl tracking-wide gap-3 font-medium px-1 w-full overflow-x-hidden">
                {MENU.map(({ title, url }) => (
                    <div
                        key={url}
                        className={`flex gap-2 ${
                            pathname.includes(url)
                                ? ""
                                : "opacity-75 hover:opacity-100"
                        } text-end w-fit`}
                    >
                        <Link
                            href={`/designs/${url}`}
                            className="focus:outline-none flex"
                        >
                            <span className="truncate">{title}</span>
                        </Link>
                        {pathname.includes(url) && (
                            <i className="ri-arrow-left-s-line" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const MENU = [
    { title: "Dashboards", url: "dashboards" },
    { title: "Buttons", url: "buttons" },
    { title: "Inputs", url: "inputs" },
];
