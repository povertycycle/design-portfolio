import Link from "next/link";

export const SupportMenu: React.FC = () => {
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
    return (
        <div className="flex flex-col gap-1 text-white w-full tracking-wide px-3 whitespace-nowrap">
            {MENU.map(({ icon, title, url, target }) => (
                <Link
                    key={url}
                    href={url}
                    target={target}
                    className={`h-10 px-3 w-full hover:bg-white/20 rounded-md flex gap-8 items-center text-lg`}
                >
                    <i className={`${icon} text-xl`} />
                    <span>{title}</span>
                </Link>
            ))}
        </div>
    );
};
