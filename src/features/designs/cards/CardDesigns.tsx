import { MY_SOCIALS } from "@/src/constants/profile";
import { TIER_OPTIONS } from "@/src/constants/subs";
import { CommunityCard } from "@/src/libraries/components/cards/CommunityCard";
import { LivestreamVideoCard } from "@/src/libraries/components/cards/LivestreamVideoCard";
import { ProfileCard } from "@/src/libraries/components/cards/ProfileCard";
import { SubscriptionCard } from "@/src/libraries/components/cards/subscription-card/SubscriptionCard";
import { ThumbnaillessCard } from "@/src/libraries/components/cards/ThumbnaillessCard";
import { VideoCard } from "@/src/libraries/components/cards/VideoCard";

export const CardDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-20 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Card Designs
            </h1>
            <div className="flex flex-col mx-auto">
                <div className="mx-auto flex">
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
                </div>
                <div className="my-20 w-full h-px bg-white/35" />
                <div className="flex mx-auto gap-8">
                    <div className="w-60 flex flex-col justify-start">
                        <span className="text-xl">Profile Card</span>
                        <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                            Card, Profile, Description, Portrait, Socials,
                            Avatar, Bio
                        </span>
                        <ProfileCard
                            banner="pexels-erkocphoto-32146234-medium.jpg"
                            avatar="avatar.jfif"
                            username="povertycycle"
                            bio="Struggling to survive everyday"
                            role="Engineer and Designer"
                            socials={MY_SOCIALS}
                        />
                    </div>
                    <div className="w-60 flex flex-col justify-start">
                        <span className="text-xl">Community Card</span>
                        <span className="opacity-75 italic text-sm mt-1 mb-auto font-barlow">
                            Card, Community, Description, Portrait, Tags
                        </span>
                        <CommunityCard
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
                <div className="my-20 w-full h-px bg-white/35" />
                <div className="flex gap-8 mx-auto">
                    <div className="w-60 flex flex-col justify-start">
                        <span className="text-xl">Subscription Card</span>
                        <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                            Card, Avatar, Username, Subscription, Price, Plans,
                            Banner
                        </span>
                        <SubscriptionCard
                            userData={{
                                banner: "pexels-erkocphoto-32146234-medium.jpg",
                                avatar: "avatar.jfif",
                                username: "povertycycle",
                                role: "Engineer and Designer",
                            }}
                            tierData={TIER_OPTIONS[0]}
                            inactive={false}
                            subData={{
                                startDate: "January 19, 2025",
                                endDate: null,
                                streak: 15,
                            }}
                        />
                    </div>
                    <div className="w-60 flex flex-col justify-start">
                        <span className="text-xl">
                            Subscription Card (Inactive)
                        </span>
                        <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                            Card, Avatar, Username, Subscription, Price, Plans,
                            Banner, Black-and-white, Inactive
                        </span>
                        <SubscriptionCard
                            userData={{
                                banner: "pexels-erkocphoto-32146234-medium.jpg",
                                avatar: "avatar.jfif",
                                username: "povertycycle",
                                role: "Engineer and Designer",
                            }}
                            tierData={TIER_OPTIONS[0]}
                            inactive={true}
                            subData={{
                                startDate: "January 19, 2025",
                                endDate: "May 19, 2026",
                                streak: 0,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
