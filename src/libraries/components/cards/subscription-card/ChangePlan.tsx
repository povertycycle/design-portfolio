import { useState } from "react";
import { Popup } from "../../misc/Popup";
import { TierData } from "./types";
import { TierCard } from "./TierCard";
import { formatCurrency } from "@/src/libraries/utils/formatter/unit";
import { TIER_OPTIONS } from "@/src/constants/subs";
import { Avatar } from "../../misc/Avatar";

interface ChangePlanProps {
    inactive?: boolean;
    tierData: TierData;
    avatar: string;
    username: string;
}

export const ChangePlan: React.FC<ChangePlanProps> = ({
    inactive,
    tierData,
    avatar,
    username,
}) => {
    const [selected, setSelected] = useState<TierData>(tierData);

    return (
        <Popup>
            <Popup.Toggle className="font-barlow mx-auto cursor-pointer hover:opacity-85 text-base">
                {inactive ? "Renew/Buy New Plan" : "Change Plan"}
            </Popup.Toggle>
            <Popup.Display>
                <Popup.Header>
                    {inactive ? "Renewing" : "Changing"} Subscription Service
                </Popup.Header>
                <div className="mt-12 flex gap-2">
                    <TierCard inactive={inactive} {...tierData} />
                    {selected.level !== tierData.level && (
                        <>
                            <i className="ri-arrow-right-double-line my-auto" />
                            <TierCard {...selected} />
                        </>
                    )}
                </div>
                <div className="mt-4 flex flex-col w-full px-1 font-barlow">
                    <div className="flex justify-between w-full items-center">
                        <span>Creator</span>
                        <div className="flex gap-4 items-center">
                            <Avatar
                                avatar={avatar}
                                className="h-10 w-10 rounded-full border-2 border-white/20"
                            />
                            <span className="font-bold tracking-wide">
                                @{username}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <span>Price</span>
                        <span className="font-bold tracking-wide">
                            {formatCurrency(selected.price)}/mo
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2 mt-8 px-1">
                    {inactive && (
                        <>
                            <div className="flex gap-4 items-center">
                                <input
                                    id="option-tier-default"
                                    type="radio"
                                    value={tierData.level}
                                    checked={selected.level === tierData.level}
                                    onChange={() => setSelected(tierData)}
                                    className="w-fit"
                                />
                                <label
                                    htmlFor="option-tier-default"
                                    className="ml-3.5"
                                >
                                    Keep the same plan
                                </label>
                            </div>
                            <div className="w-full h-px border-t-2 border-white/40 my-2" />
                        </>
                    )}
                    <div className="flex flex-col w-full gap-2">
                        {TIER_OPTIONS.filter(
                            (option) => option.level !== tierData.level
                        ).map((tierData) => (
                            <div
                                key={tierData.level}
                                className="flex gap-4 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    value={tierData.level}
                                    checked={selected.level === tierData.level}
                                    onChange={(e: any) => setSelected(tierData)}
                                    className="w-fit"
                                />
                                <div
                                    onClick={() => setSelected(tierData)}
                                    className="w-full"
                                >
                                    <TierCard {...tierData} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="opacity-75 mt-6 flex items-center gap-2 font-barlow">
                    <i className="ri-shield-check-fill text-xl" />
                    <span className="italic text-sm">
                        You will be redirected to our secure payment page
                    </span>
                </div>
                <Popup.CloseButton className="mx-auto mt-12 w-36 cursor-pointer bg-white/20 hover:bg-white/10 transition-colors rounded-sm border-2 h-8 border-white/50">
                    Proceed
                </Popup.CloseButton>
            </Popup.Display>
        </Popup>
    );
};
