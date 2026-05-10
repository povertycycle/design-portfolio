import { LabelInput } from "@/src/libraries/components/inputs/LabelInput";
import { LabelPasswordInput } from "@/src/libraries/components/inputs/LabelPasswordInput";
import { PasswordInput } from "@/src/libraries/components/inputs/PasswordInput";
import { PinInput } from "@/src/libraries/components/inputs/PinInput";
import { SearchInput } from "@/src/libraries/components/inputs/SearchInput";
import { UnderlinedInput } from "@/src/libraries/components/inputs/UnderlinedInput";

export const InputDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-24 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Input Designs
            </h1>
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Basic Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-2 font-smooch">
                    Input, Fields, Email, Username, Address, Text
                </span>
                <UnderlinedInput placeholder="Fullname" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Password Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-2 font-smooch">
                    Input, Password
                </span>
                <PasswordInput />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Labelled Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-8 font-smooch">
                    Input, Fields, Email, Username, Address, Text, Label,
                    Floating, Slide, Up
                </span>
                <LabelInput placeholder="Fullname" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Labelled Password Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-8 font-smooch">
                    Input, Password, Label, Floating, Slide, Up
                </span>
                <LabelPasswordInput />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Search Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-8 font-smooch">
                    Input, Search, Bar, Dropdown
                </span>
                <SearchInput placeholder="Search name" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Pin Input</span>
                <span className="opacity-75 italic text-base mt-1 mb-8 font-smooch">
                    Input, Pin, Digits, Numbers
                </span>
                <PinInput />
            </div>
        </div>
    );
};
