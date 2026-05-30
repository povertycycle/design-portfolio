import { TIER_OPTIONS } from "@/src/constants/subs";
import { useBlur } from "../../../hooks/useBlur";
import { formatCurrency } from "../../../utils/formatter/unit";
import { Avatar } from "../../misc/Avatar";
import { CreatorData } from "../../misc/CreatorData";
import { Benefits } from "./Benefits";
import { TierData } from "./types";
import { TierCard } from "./TierCard";
import { ChangePlan } from "./ChangePlan";
import { EndPlan } from "./EndPlan";

type SubData = {
    startDate: string;
    endDate?: string | null;
    streak: number;
};

interface SubscriptionCardProps {
    inactive: boolean;
    userData: {
        avatar: string;
        username: string;
        role: string;
        banner: string;
    };
    tierData: TierData;
    subData: SubData;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
    inactive,
    userData,
    tierData,
    subData,
}) => {
    const { ref, focus, isFocused, unFocus } = useBlur();
    const { title, banner, price, level } = tierData;
    const nextUpgrade = TIER_OPTIONS.find((t) => level + 1 === t.level);

    return (
        <div
            ref={ref}
            data-inactive={inactive}
            className={`data-[inactive="true"]:grayscale relative w-60 h-fit rounded-xl flex flex-col m-auto`}
        >
            <div
                className={`w-full relative flex flex-col rounded-xl overflow-hidden cursor-pointer`}
            >
                <div className="w-full h-full relative z-1 bg-black/65 hover:bg-black/50 border-t-2 border-white/5 transition-colors flex flex-col p-2">
                    <CreatorData {...userData} inactive={inactive} />
                    <div
                        className={`w-full flex flex-col relative overflow-hidden rounded-lg border-2 border-white/10 mt-12`}
                    >
                        <TierCard
                            className="h-22"
                            banner={banner}
                            inactive={inactive}
                        />
                        <div
                            className={`w-full flex flex-col px-3 pt-3 pb-3 relative z-1 bg-black/50`}
                        >
                            <span className="text-lg">{title}</span>
                            <div className="flex w-full justify-between text-sm mt-0.5 font-barlow">
                                <div>
                                    <span>{formatCurrency(price)}</span>
                                    <span>/mo</span>
                                </div>
                                <span>Tier {level}</span>
                            </div>
                            <div className="flex w-full justify-between text-sm mt-1 font-barlow">
                                {!inactive && (
                                    <>
                                        <span className="opacity-75">
                                            Since {subData.startDate}
                                        </span>
                                        <span className="flex items-center gap-0.5">
                                            {subData.streak}{" "}
                                            <i className="ri-fire-fill" />
                                        </span>
                                    </>
                                )}
                                {inactive && (
                                    <span className="opacity-75">
                                        Ended at {subData.endDate}
                                    </span>
                                )}
                            </div>
                            <Benefits
                                benefits={tierData.benefits}
                                nextUpgrade={nextUpgrade}
                                avatar={userData.avatar}
                                username={userData.username}
                                inactive={inactive}
                            />
                            <div
                                onClick={focus}
                                className="w-full flex gap-2 mt-3 items-center hover:opacity-100 transition-opacity opacity-75"
                            >
                                <div className="border-t-2 border-white/40 w-full" />
                                <span
                                    className={`${
                                        isFocused ? "rotate-180" : ""
                                    } transition-transform`}
                                >
                                    <i className="ri-arrow-down-s-line" />
                                </span>
                                <div className="border-t-2 border-white/40 w-full" />
                            </div>
                            <div
                                className={`relative ${
                                    !isFocused ? "max-h-0" : "max-h-34"
                                } transition-[max-height] duration-400 overflow-hidden flex flex-col items-center`}
                            >
                                <ChangePlan
                                    inactive={inactive}
                                    tierData={tierData}
                                    username={userData.username}
                                    avatar={userData.avatar}
                                />
                                {!inactive && (
                                    <>
                                        <div className="border-t-2 border-white/20 w-full my-3" />
                                        <EndPlan
                                            tierData={tierData}
                                            username={userData.username}
                                            avatar={userData.avatar}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={`/design-portfolio/img/${userData.banner}`}
                    className=" absolute left-0 top-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
};
