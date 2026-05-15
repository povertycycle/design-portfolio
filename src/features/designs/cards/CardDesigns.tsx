import { LivestreamVideoCard } from "@/src/libraries/components/cards/LivestreamVideoCard";
import { ProfileCard } from "@/src/libraries/components/cards/ProfileCard";
import { ThumbnaillessCard } from "@/src/libraries/components/cards/ThumbnaillessCard";
import { VideoCard } from "@/src/libraries/components/cards/VideoCard";

export const CardDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-20 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Card Designs
            </h1>
            <div className="flex flex-wrap gap-4 px-16">
                <div className="flex flex-col justify-between">
                    <div className="w-80 flex flex-col justify-start">
                        <span className="text-xl">Video Card</span>
                        <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                            Card, Video, Duration, VOD
                        </span>
                        <VideoCard
                            username="captain_domo"
                            avatar="captain_domo-avatar.png"
                            duration={7847}
                            thumbnail="captain_domo-content.jpg"
                            title="USA vs France randomizer relay race"
                        />
                    </div>
                    <div className="w-80 flex flex-col justify-start">
                        <span className="text-xl">Thumbnail-less Card</span>
                        <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                            Card, Post, Image, Video, Count, No-Thumbnail
                        </span>
                        <ThumbnaillessCard
                            username="midetaka_hiyazaki"
                            content={{
                                stars: 4594859,
                                type: ".zip",
                                files: 21,
                                size: 73947291,
                            }}
                            title="The Iron Mass vol.1"
                        />
                    </div>
                </div>
                <div className="w-80 flex flex-col justify-start">
                    <span className="text-xl">Livestream Video Card</span>
                    <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                        Card, Video, Livestream, Viewers
                    </span>
                    <LivestreamVideoCard
                        username="povertycycle"
                        avatar="avatar.jfif"
                        viewers={53948}
                        thumbnail="talents.jpg"
                        title="Live design sessions - RE9 later"
                        isLive
                    />
                </div>
                <div className="w-80 flex flex-col justify-start">
                    <span className="text-xl">Profile Card</span>
                    <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                        Card, Profile, Description, Portrait, Tags
                    </span>
                    <ProfileCard
                        banner="pexels-pspov-3046628-medium.jpg"
                        community="Brookstone Haven Scuba Club"
                        description="Vestibulum commodo nec nisi vel laoreet."
                        members={37}
                        tags={[
                            "Diving",
                            "Friendly",
                            "Sea",
                            "Sports",
                            "Coaching",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
