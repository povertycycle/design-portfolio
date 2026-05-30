import { formatCurrency } from "@/src/libraries/utils/formatter/unit";
import { Popup } from "../../misc/Popup";
import { TierData } from "./types";
import { TierCard } from "./TierCard";
import { Avatar } from "../../misc/Avatar";

interface EndPlanProps {
    tierData: TierData;
    username: string;
    avatar: string;
}

export const EndPlan: React.FC<EndPlanProps> = ({
    tierData,
    username,
    avatar,
}) => {
    return (
        <Popup>
            <Popup.Toggle className="font-barlow mx-auto cursor-pointer hover:opacity-85 text-base pb-1">
                End Subscription
            </Popup.Toggle>
            <Popup.Display>
                <Popup.Header>Ending Subscription Service</Popup.Header>
                <div className="mt-12 flex gap-2">
                    <TierCard {...tierData} />
                </div>
                <div className="mt-4 flex flex-col w-full px-1 font-barlow">
                    <div className="flex justify-between w-full items-center">
                        <span>Creator</span>
                        <div className="flex gap-4 items-center">
                            <Avatar
                                avatar={avatar}
                                className="w-10 h-10 rounded-full border-2 border-white/20"
                            />
                            <span className="font-bold tracking-wide">
                                @{username}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <span>Price</span>
                        <span className="font-bold tracking-wide">
                            {formatCurrency(tierData.level)}/mo
                        </span>
                    </div>
                </div>
                <Popup.CloseButton className="mx-auto mt-12 w-36 cursor-pointer bg-white/20 hover:bg-white/10 transition-colors rounded-sm border-2 h-8 border-white/50">
                    Confirm
                </Popup.CloseButton>
            </Popup.Display>
        </Popup>
    );
};
