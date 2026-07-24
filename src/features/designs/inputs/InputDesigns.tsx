import { BlockInput } from "@/src/libraries/components/inputs/BlockInput";
import { LabelInput } from "@/src/libraries/components/inputs/LabelInput";
import { LabelPasswordInput } from "@/src/libraries/components/inputs/LabelPasswordInput";
import { PasswordInput } from "@/src/libraries/components/inputs/PasswordInput";
import { PinInput } from "@/src/libraries/components/inputs/PinInput";
import { SearchInput } from "@/src/libraries/components/inputs/SearchInput";
import { Selection } from "@/src/libraries/components/inputs/Selection";
import { UnderlinedInput } from "@/src/libraries/components/inputs/UnderlinedInput";

export const InputDesigns: React.FC = () => {
    return (
        <div className="h-full pb-24 text-white-1 w-full overflow-y-auto sleek-scroll ">
            <h1 className="text-2xl px-16 pt-6 pb-6 mb-20 w-full z-50 sticky top-0 bg-black border-b border-white/50">
                Input Designs
            </h1>
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Basic Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-2 font-barlow">
                    Input, Fields, Email, Username, Address, Text
                </span>
                <UnderlinedInput placeholder="Fullname" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Password Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-2 font-barlow">
                    Input, Password
                </span>
                <PasswordInput />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Labelled Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Input, Fields, Email, Username, Address, Text, Label,
                    Floating, Slide, Up
                </span>
                <LabelInput placeholder="Fullname" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Labelled Password Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Input, Password, Label, Floating, Slide, Up
                </span>
                <LabelPasswordInput />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Search Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Input, Search, Bar, Dropdown
                </span>
                <SearchInput placeholder="Search name" />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Pin Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Input, Pin, Digits, Numbers
                </span>
                <PinInput />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Selection</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Option, Multiple, Selection, Text, Number, Horizontal
                </span>
                <Selection
                    options={[
                        { title: "Select", value: 1 },
                        { title: "Pick", value: 2 },
                        { title: "Choose", value: 3 },
                    ]}
                />
            </div>
            <div className="my-24 w-full h-px bg-white/35" />
            <div className="w-lg flex flex-col mx-auto">
                <span className="my-auto text-xl">Block Input</span>
                <span className="opacity-75 italic text-sm mt-1 mb-8 font-barlow">
                    Input, Fields, Email, Username, Address, Text, Block,
                    Border, Outline
                </span>
                <BlockInput placeholder="myusername">Username</BlockInput>
            </div>
        </div>
    );
};
