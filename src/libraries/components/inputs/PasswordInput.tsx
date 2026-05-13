import { useState } from "react";

export const PasswordInput: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="w-full h-8 flex relative max-w-lg">
            <input
                className="peer auth__input--default"
                placeholder="Password"
                spellCheck={false}
                type={show ? "text" : "password"}
            />
            <div
                onClick={() => setShow((prev) => !prev)}
                className="w-7 h-7 rounded-full border-2 border-white/60 hover:border-white/80 peer-hover:text-white/80 peer-hover:border-white/80 hover:text-white/80 peer-focus:border-white/80 transition-colors absolute text-white/60 peer-focus:text-white/80 left-full top-1/2 flex items-center justify-center text-base cursor-pointer"
            >
                <i
                    className={`${
                        show ? "ri-eye-line" : "ri-eye-off-line"
                    } m-auto text-sm`}
                />
            </div>
        </div>
    );
};
