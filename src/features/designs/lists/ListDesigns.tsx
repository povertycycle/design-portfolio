import { CategoryList } from "@/src/libraries/components/list/CategoryList";
import { HorizontalList } from "@/src/libraries/components/list/HorizontalList";

export const ListDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-24 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                List Designs
            </h1>
            <div className="flex flex-col w-full mx-auto px-4">
                <div className="w-lg flex flex-col mx-auto">
                    <span className="text-xl">
                        Horizontal List (Categories)
                    </span>
                    <span className="opacity-75 italic text-base mt-1 mb-2 font-smooch">
                        List, Horizontal, Scrollbar-less, Categories, Arrows,
                        Buttons
                    </span>
                </div>
                <CategoryList />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="flex flex-col w-full mx-auto px-4">
                <div className="w-lg flex flex-col mx-auto">
                    <span className="text-xl">
                        Horizontal List (Livestreams)
                    </span>
                    <span className="opacity-75 italic text-base mt-1 mb-2 font-smooch">
                        List, Horizontal, Scrollbar-less, Video
                    </span>
                </div>
                <HorizontalList />
                <span className="italic font-smooch opacity-75 mt-2">
                    *Personas and contents above belong to the respective
                    owners/creators/streamers
                </span>
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
        </div>
    );
};
