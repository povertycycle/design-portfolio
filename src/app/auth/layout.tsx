import { LandingHeader } from "@/src/libraries/components/navigation/LandingHeader";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`bg-black w-screen h-dvh sm:h-screen flex flex-col overflow-y-auto font-fjalla`}
        >
            <LandingHeader />
            <div className="h-0 grow overflow-y-auto hidden-scroll w-full sm:max-md:p-4 flex flex-col">
                {children}
            </div>
        </div>
    );
}
