import Link from "next/link";

export const LandingHeader: React.FC = () => {
    return (
        <div
            className={`bg-transparent h-14 fixed top-0 left-0 w-full shrink-0 flex items-center z-50`}
        >
            <Link
                href="/"
                className="h-full aspect-square text-white-1 flex items-center justify-center text-2xl px-4"
            >
                <i className="ri-home-2-fill" />
            </Link>
            <div className="h-full relative z-1 flex justify-end py-3 px-12 gap-8 w-full text-white-1 text-lg font-medium">
                <Link href="/designs">
                    <TopMenu title={"Designs"} />
                </Link>
                <Link href="/auth/questions">
                    <TopMenu title="Support" />
                </Link>
                <Link href="/auth/login">
                    <TopMenu title="Login" />
                </Link>
                <Link href="/auth/login?register=true">
                    <TopMenu title="Join Us" />
                </Link>
            </div>
        </div>
    );
};

const TopMenu: React.FC<{ title: string }> = ({ title }) => {
    return (
        <span className="whitespace-nowrap opacity-65 hover:opacity-100">
            {title}
        </span>
    );
};
