import { useId } from "react";

interface LabelInputProps {
    placeholder?: string;
}

export const LabelInput: React.FC<LabelInputProps> = ({ placeholder }) => {
    const id = useId();

    return (
        <div className="relative w-full max-w-lg font-fjalla">
            <input
                id={id}
                placeholder=""
                className="peer relative h-8 z-1 hover:border-b-white/80 transition-colors border-b-white/60 border-b-2 w-full pb-1 focus:outline-none px-2"
            />
            <label
                className="absolute not-peer-placeholder-shown:-translate-y-6 not-peer-placeholder-shown:text-sm left-1 top-0.5 peer-hover:opacity-80 peer-focus:-translate-y-6 peer-focus:-translate-x-2 peer-focus:text-sm text-base/6 transition-[opacity,translate,font-size] opacity-60"
                htmlFor={id}
            >
                {placeholder}
            </label>
        </div>
    );
};
