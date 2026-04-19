import { Spinner } from "@/src/libraries/loading/Spinner";
import { useState } from "react";

export const Form: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className="w-full flex flex-col gap-4 p-8">
            <input className="auth__input--default" placeholder="Title" />
            <textarea
                className="auth__input--default min-h-32 max-h-64 mt-8"
                placeholder="Message"
            />
            <button
                className={`ml-auto bg-white mt-8 text-dark-blue disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group py-1 flex items-center justify-center`}
            >
                {loading ? <Spinner /> : "Ask Us"}
            </button>
        </div>
    );
};
