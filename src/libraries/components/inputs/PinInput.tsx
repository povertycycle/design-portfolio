import { KeyboardEvent, SyntheticEvent, useRef, useState } from "react";

export const PinInput: React.FC = () => {
    const [value, setValue] = useState<string>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handlePinChange = (e: SyntheticEvent<HTMLInputElement>) => {
        let val = (e.target as HTMLInputElement).value.replace(/[^0-9]+/g, "");
        setValue(val);
    };

    function focusPin() {
        if (inputRef.current) inputRef.current.focus();
    }

    function removeInput(e: KeyboardEvent<HTMLInputElement>) {
        if (
            [
                "ArrowLeft",
                "ArrowRight",
                "ArrowUp",
                "ArrowDown",
                "e",
                "-",
                "+",
            ].includes(e.key)
        ) {
            e.preventDefault();
        }
    }

    return (
        <div className="group w-fit flex relative items-center justify-center flex-col">
            <input
                type="text"
                maxLength={6}
                ref={inputRef}
                onKeyDown={removeInput}
                className="peer absolute top-full opacity-0 -z-1"
                onChange={handlePinChange}
            />
            <div className="flex items-center justify-center h-10 relative gap-2 group">
                {Array.from({ length: 6 }, (_, i) => (
                    <div
                        onClick={focusPin}
                        key={i}
                        className="p-1 sm:p-2 aspect-square cursor-text w-full h-full transition-colors group-peer-focus:border-white not-group-peer-focus:group-hover:border-white/80  rounded-sm relative flex items-center justify-center border-2 border-white/60"
                    >
                        {value?.charAt(i)}
                        {(value?.length ?? 0) === i && (
                            <div
                                className={`absolute top-2 blink invisible group-focus-within:visible border-r border-white h-[calc(100%-16px)]`}
                            />
                        )}
                        {(value?.length ?? 0) === 6 && i == 5 && (
                            <div
                                className={`absolute top-2 right-2 blink invisible group-focus-within:visible border-r border-white h-[calc(100%-16px)]`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
