import { useId, useState } from "react";

export const LabelPasswordInput: React.FC = () => {
    const id = useId();
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="w-full h-8 flex relative font-fjalla">
            <input
                className="placeholder:text-start! peer auth__input--default"
                placeholder=""
                spellCheck={false}
                type={show ? "text" : "password"}
            />
            <label
                className="absolute not-peer-placeholder-shown:-translate-y-6 not-peer-placeholder-shown:text-sm left-1 top-0.5 peer-hover:opacity-80 peer-focus:-translate-y-6 peer-focus:-translate-x-2 peer-focus:text-sm text-base/6 transition-[opacity,translate,font-size] opacity-60"
                htmlFor={id}
            >
                Password
            </label>
            <div
                onClick={() => setShow((prev) => !prev)}
                className="w-8 h-8 peer-hover:text-white/80 hover:text-white/80 transition-colors absolute text-white/60 peer-focus:text-white/80 bottom-0.5 right-0 flex items-center justify-center text-base cursor-pointer"
            >
                <i
                    className={`${
                        show ? "ri-eye-line" : "ri-eye-off-line"
                    } m-auto`}
                />
            </div>
        </div>
    );
};
