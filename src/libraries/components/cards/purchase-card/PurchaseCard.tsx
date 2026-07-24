import { USER_DATA } from "@/src/constants/users";
import { Avatar } from "../../misc/Avatar";
import { TrxNumber } from "./TrxNumber";
import { Amount } from "./Amount";

const _SAMPLE = {
    transactionNumber: "D-938419384",
    price: 15,
    type: "DONATION",
    recipient: {
        username: "lilaggy",
        avatar: "lilaggy-avatar.png",
    },
    message: "Guh",
    transactionDate: "July 25, 2026",
};

export const PurchaseCard: React.FC = () => {
    return (
        <div className="text-white-1 bg-black-2.5 rounded-lg relative flex flex-col w-full p-0.5 gap-0.5">
            <div className="flex gap-0.5 text-lg">
                <TrxNumber transactionNumber={_SAMPLE.transactionNumber} />
                <div className="bg-black-1 px-3 flex items-center grow">
                    <Avatar
                        avatar={USER_DATA.profile.avatar}
                        username={USER_DATA.profile.username}
                        className="rounded-full mr-2"
                        style={{ width: `24px`, height: `24px` }}
                        size={24}
                    />
                    @{USER_DATA.profile.username}
                </div>
                <Amount price={_SAMPLE.price} />
                <div className="absolute bottom-0 right-4 translate-y-1/2 flex gap-3 text-base items-center">
                    <div className="bg-black-1 border-2 border-black-2.5 px-3 rounded-md">
                        {_SAMPLE.transactionDate}
                    </div>
                    <div className="bg-black-1 border-2 border-black-2.5 pl-2 pr-3 flex gap-2 items-center rounded-md">
                        <i className="ri-coins-fill text-lg" />
                        Subscription
                    </div>
                </div>
            </div>
            <div className="bg-black-1 flex gap-3 items-center rounded-b-md py-1 px-2">
                <i className="text-lg ri-message-3-line" />
                <span className="italic opacity-85 font-barlow text-lg">
                    {_SAMPLE.message}
                </span>
            </div>
        </div>
    );
};
