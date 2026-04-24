"use client";

import { Navigation } from "@/src/features/designs/navigation/Navigation";

export default function DesignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-screen h-screen bg-black flex font-fjalla">
            <Navigation />
            <div className="w-full flex">{children}</div>
        </div>
    );
}
