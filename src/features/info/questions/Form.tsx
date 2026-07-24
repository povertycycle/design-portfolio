import { Spinner } from "@/src/libraries/components/loading/Spinner";
import { useState } from "react";

export const Form: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col gap-4 px-6 py-8 text-white-1 font-smooch text-xl tracking-wide font-medium">
            <input className="auth__input--default" placeholder="Title" />
            <textarea
                className="auth__input--default min-h-32 max-h-64 mt-6 sleek-scroll"
                placeholder="Message"
            />
            <button
                className={`mt-8 ml-auto bg-white-1 text-black h-8 text-sm/5 rounded-sm px-4 w-32 group py-1 flex items-center cursor-pointer hover:bg-white/95 transition-colors justify-center font-fjalla`}
            >
                {loading ? <Spinner /> : "Ask Us"}
            </button>
        </div>
    );
};
