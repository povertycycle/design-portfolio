import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`bg-black w-screen h-dvh sm:h-screen flex flex-col overflow-y-auto font-fjalla`}
        >
            <LandingPageHeader />
            <div className="h-0 grow overflow-y-auto hidden-scroll w-full sm:max-md:p-4 flex flex-col">
                {children}
            </div>
        </div>
    );
}

const LandingPageHeader: React.FC = () => {
    return (
        <div
            className={`bg-transparent fixed top-0 left-0 w-full shrink-0 flex items-center z-50`}
        >
            <div className="h-full relative z-1 flex justify-end py-3 px-12 gap-8 w-full text-white text-xl font-medium tracking-wider">
                <Link href="/designs">
                    <TopMenu title={"Desgins"} />
                </Link>
                <Link href="/auth/questions">
                    <TopMenu title="Support" />
                </Link>
                <Link href="/auth/login">
                    <TopMenu title="Login" />
                </Link>
                <Link href="/auth/register">
                    <TopMenu title="Join Us" />
                </Link>
            </div>
        </div>
    );
};

/**
 * [v2.0] - Custom helper component for hover animation.
 */
const TopMenu: React.FC<{ title: string }> = ({ title }) => {
    return (
        <span className="whitespace-nowrap opacity-65 hover:opacity-100">
            {title}
        </span>
    );
};
