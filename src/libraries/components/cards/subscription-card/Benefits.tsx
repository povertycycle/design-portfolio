import { use, useState } from "react";
import { Popup } from "../../misc/Popup";
import { TierData } from "./types";
import { TierCard } from "./TierCard";
import { formatCurrency } from "@/src/libraries/utils/formatter/unit";
import { Avatar } from "../../misc/Avatar";

interface BenefitsProps {
    benefits: string[];
    nextUpgrade?: TierData;
    avatar: string;
    username: string;
    inactive?: boolean;
}

export const Benefits: React.FC<BenefitsProps> = ({
    benefits,
    nextUpgrade,
    avatar,
    username,
    inactive,
}) => {
    const [upgrade, setUpgrade] = useState<boolean>(false);

    return (
        <Popup>
            <Popup.Toggle className="text-start font-barlow cursor-pointer text-sm mt-1 opacity-75 hover:opacity-95">
                View Benefits
            </Popup.Toggle>
            <Popup.Display>
                {!upgrade ? (
                    <Details
                        benefits={benefits}
                        nextUpgrade={nextUpgrade}
                        proceed={() => setUpgrade(true)}
                        inactive={inactive}
                    />
                ) : (
                    !!nextUpgrade && (
                        <UpgradeService
                            nextUpgrade={nextUpgrade}
                            avatar={avatar}
                            username={username}
                            revert={() => setUpgrade(false)}
                        />
                    )
                )}
            </Popup.Display>
        </Popup>
    );
};

const Details: React.FC<
    Pick<BenefitsProps, "benefits" | "nextUpgrade" | "inactive"> & {
        proceed: () => void;
    }
> = ({ benefits, nextUpgrade, proceed, inactive }) => {
    return (
        <>
            <Popup.Header>Benefits</Popup.Header>
            <div className="mt-8 flex gap-2 flex-col px-1">
                <span>Current benefits</span>
                <ul className="list-disc px-5 opacity-90 font-barlow">
                    {benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                    ))}
                </ul>
            </div>
            {!!nextUpgrade && (
                <div className="flex flex-col mt-8 px-1">
                    <span className="">Upgrade Available</span>
                    <div className="flex flex-col mt-3">
                        <TierCard {...nextUpgrade} />
                        <ul className="list-disc px-5 opacity-90 font-barlow mt-2">
                            {nextUpgrade.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={proceed}
                        className="mx-auto mt-12 w-36 cursor-pointer bg-white/20 hover:bg-white/10 transition-colors rounded-sm border-2 h-8 border-white/50"
                    >
                        {inactive ? "Renew via Upgrade" : "Upgrade My Plan"}
                    </button>
                </div>
            )}
        </>
    );
};

const UpgradeService: React.FC<
    Required<Pick<BenefitsProps, "nextUpgrade" | "avatar" | "username">> & {
        revert: () => void;
    }
> = ({ nextUpgrade, avatar, username, revert }) => {
    return (
        <>
            <Popup.Header>Upgrading Subscription Service</Popup.Header>
            <div className="mt-12 flex gap-2">
                <TierCard {...nextUpgrade} />
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
                        {formatCurrency(nextUpgrade.price)}/mo
                    </span>
                </div>
            </div>
            <div className="opacity-75 mt-6 flex items-center gap-2 font-barlow">
                <i className="ri-shield-check-fill text-xl" />
                <span className="italic text-sm">
                    You will be redirected to our secure payment page
                </span>
            </div>
            <Popup.CloseButton
                onClick={revert}
                className="mx-auto mt-12 w-36 cursor-pointer bg-white/20 hover:bg-white/10 transition-colors rounded-sm border-2 h-8 border-white/50"
            >
                Proceed
            </Popup.CloseButton>
        </>
    );
};
