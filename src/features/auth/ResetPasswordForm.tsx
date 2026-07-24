import { Hyperlink } from "@/src/libraries/components/misc/Hyperlink";
import useToast from "@/src/libraries/components/notification/Toast";
import { ChangeEvent, useState } from "react";
import { AlternativeSignIn } from "./AlternativeSignIn";
import { Spinner } from "@/src/libraries/components/loading/Spinner";

export const ResetPasswordForm: React.FC = () => {
    const { toast, Toast } = useToast();
    const success = () => toast("Successfully logged-in");

    return (
        <section className="border-l-2 shrink-0 border-white/15 w-full relative z-1 text-white-1 flex flex-col h-full p-16 justify-center bg-black/75 backdrop-blur-sm">
            {Toast}
            <h1 className="text-2xl">Forgot your password?</h1>
            <h2 className="flex gap-1 items-center font-barlow text-base">
                <b>Worry not!</b> We shall help you with that.
            </h2>
            <div className="w-full flex flex-col mt-12">
                <Fields onSuccess={success} />
                <div className="flex gap-1 justify-center mt-12 items-center font-medium font-barlow text-base">
                    Don&apos;t have an account?
                    <span className="text-gold font-fjalla text-sm/4 mt-1">
                        <Hyperlink url="/auth/login?register=true">
                            Sign-up
                        </Hyperlink>
                    </span>
                </div>
            </div>
        </section>
    );
};

const Fields: React.FC<{ onSuccess: Function }> = ({ onSuccess }) => {
    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const validatePayload = () => {
        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            onSuccess?.();
        }, 3000);
    };
    return (
        <form
            className="w-full flex flex-col gap-6 items-end"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                className="auth__input--default"
                placeholder="Email"
                autoComplete="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
            <div className="flex justify-between w-full">
                <AlternativeSignIn />
                <button
                    disabled={!email}
                    className={`${
                        loading
                            ? ""
                            : "not-disabled:cursor-pointer not-disabled:hover:bg-white/95"
                    } bg-white-1 text-black disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group font-fjalla text-base py-1 flex items-center justify-center`}
                    onClick={validatePayload}
                >
                    {loading ? <Spinner /> : "Send Request"}
                </button>
            </div>
        </form>
    );
};
