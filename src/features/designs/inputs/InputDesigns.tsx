import { LabelInput } from "@/src/libraries/inputs/LabelInput";
import { LabelPasswordInput } from "@/src/libraries/inputs/LabelPasswordInput";
import { PasswordInput } from "@/src/libraries/inputs/PasswordInput";
import { PinInput } from "@/src/libraries/inputs/PinInput";
import { SearchInput } from "@/src/libraries/inputs/SearchInput";
import { UnderlinedInput } from "@/src/libraries/inputs/UnderlinedInput";

export const InputDesigns: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col px-8 py-16 text-white">
            <h1 className="text-2xl">Input Designs</h1>
            <div className="h-full overflow-y-auto sleek-scroll w-full flex flex-col mt-16 gap-12">
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly ">
                    <span className="my-auto">Basic Input</span>
                    <UnderlinedInput placeholder="Fullname" />
                </div>
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly">
                    <span className="my-auto">Password Input</span>
                    <PasswordInput />
                </div>
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly">
                    <span className="my-auto">Basic Input with Label</span>
                    <LabelInput placeholder="Fullname" />
                </div>
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly">
                    <span className="my-auto">Password Input with Label</span>
                    <LabelPasswordInput />
                </div>
                <div className="grid grid-cols-[216px_auto] gap-6 h-10 content-evenly">
                    <span className="my-auto">Search Input</span>
                    <SearchInput placeholder="Search name" />
                </div>
                <div className="grid grid-cols-[216px_auto] gap-6">
                    <span className="my-auto">Pin Input</span>
                    <PinInput />
                </div>
            </div>
        </div>
    );
};
