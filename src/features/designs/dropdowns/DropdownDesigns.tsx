import { Filter } from "@/src/libraries/components/dropdowns/Filter";
import { NotificationSystem } from "@/src/libraries/components/dropdowns/NotificationSystem";
import { UserMenu } from "@/src/libraries/components/dropdowns/UserMenu";

export const DropdownDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-20 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Dropdown Designs
            </h1>
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Notification System</span>
                <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                    Dropdown, Notification
                </span>
                <NotificationSystem />
            </div>
            <div className="my-20 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">User Menu</span>
                <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                    Dropdown, User, Menu, Settings, Avatar
                </span>
                <UserMenu />
            </div>
            <div className="my-20 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Filter Menu</span>
                <span className="opacity-75 italic text-sm mt-1 mb-6 font-barlow">
                    Dropdown, Filter, Options, Close, Values
                </span>
                <Filter
                    options={[
                        "Option",
                        "Selection",
                        "Choice",
                        "Electee",
                        "Representative",
                    ]}
                />
            </div>
            <div className="my-20 w-full h-px bg-white/35" />
        </div>
    );
};
