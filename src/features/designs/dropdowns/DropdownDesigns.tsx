import { LabelInput } from "@/src/libraries/components/inputs/LabelInput";
import { LabelPasswordInput } from "@/src/libraries/components/inputs/LabelPasswordInput";
import { PasswordInput } from "@/src/libraries/components/inputs/PasswordInput";
import { PinInput } from "@/src/libraries/components/inputs/PinInput";
import { SearchInput } from "@/src/libraries/components/inputs/SearchInput";
import { UnderlinedInput } from "@/src/libraries/components/inputs/UnderlinedInput";

export const DropdownDesigns: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col px-8 py-16 text-white">
            <h1 className="text-2xl">Dropdown Designs</h1>
            <div className="h-full overflow-y-auto sleek-scroll w-full flex flex-col mt-16 gap-12">
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly ">
                    <span className="my-auto">Basic Notification</span>
                </div>
            </div>
        </div>
    );
};
