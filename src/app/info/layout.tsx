import { LandingHeader } from "@/src/libraries/components/navigation/LandingHeader";

export default function InfoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full overflow-y-auto bg-black text-white font-fjalla flex flex-col">
            <LandingHeader />
            {children}
        </div>
    );
}
