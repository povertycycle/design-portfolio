import { LivestreamVideoCard } from "@/src/libraries/components/cards/LivestreamVideoCard";

export const CardDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-24 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Card Designs
            </h1>
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Livestream Video Card</span>
                <span className="opacity-75 italic text-base mt-1 mb-6 font-smooch">
                    Card, Video, Livestream, Viewers
                </span>
                <LivestreamVideoCard
                    username="povertycycle"
                    avatar="avatar.jfif"
                    viewers={53948}
                    thumbnail="talents.jpg"
                    title="Live design sessions - RE9 later"
                />
            </div>
            <div className="my-20 w-full h-px bg-white/35" />
        </div>
    );
};
