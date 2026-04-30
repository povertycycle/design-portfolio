import { DesignMenu } from "./DesignMenu";
import { Footer } from "./Footer";
import { SupportMenu } from "./SupportMenu";

export function Menu() {
    return (
        <div className="flex flex-col gap-2 w-full h-full overflow-y-auto overflow-x-hidden sleek-scroll font-smooch font-medium text-xl mt-4">
            <SupportMenu />
            <div className="w-full h-0.5 bg-white/35 my-2 shrink-0" />
            <DesignMenu />
            <div className="w-full h-0.5 bg-white/35 my-2 shrink-0" />
            <Footer />
        </div>
    );
}
