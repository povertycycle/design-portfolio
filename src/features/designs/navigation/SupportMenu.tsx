import Link from "next/link";

export const SupportMenu: React.FC = () => {
    return (
        <div className="flex flex-col text-base gap-1 font-barlow text-white w-full tracking-wide px-3 whitespace-nowrap">
            {MENU.map(({ icon, title, url, target }) => (
                <Link
                    key={url}
                    href={url}
                    target={target}
                    className={`h-10 pr-3 w-full hover:bg-white/20 rounded-sm flex gap-4 items-center`}
                >
                    <div className="h-full aspect-square flex items-center justify-center">
                        <i className={`${icon} text-xl`} />
                    </div>
                    <span>{title}</span>
                </Link>
            ))}
        </div>
    );
};

const MENU = [
    {
        icon: "ri-home-2-fill",
        title: "Home",
        url: "/designs",
    },
    {
        icon: "ri-file-list-3-line",
        title: "Profile",
        url: "https://povertycycle.github.io/povertycycle",
        target: "_blank",
    },
    {
        icon: "ri-gamepad-line",
        title: "Pokemon Project",
        url: "https://povertycycle.github.io/pokemon",
    },
    {
        icon: "ri-angularjs-line",
        title: "Angular Project",
        url: "https://povertycycle.github.io/color-palette",
    },
];
