import { UserData } from "@/src/interfaces/user";
import { PasswordInput } from "@/src/libraries/components/inputs/PasswordInput";
import { Spinner } from "@/src/libraries/components/loading/Spinner";
import { Hyperlink } from "@/src/libraries/components/misc/Hyperlink";
import useToast from "@/src/libraries/components/notification/Toast";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { AlternativeSignIn } from "./AlternativeSignIn";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { LoginPayload } from "./types";

export const LoginForm: React.FC = () => {
    const params = useSearchParams();
    const isResetPassword = params?.get("reset-password") === "true";

    return (
        <div className={"w-160 absolute h-full z-1 flex"}>
            <div
                data-reset={isResetPassword}
                className="flex flex-col w-full h-full relative z-1 translate-y-0 data-[reset=true]:-translate-y-full duration-500"
            >
                <Form />
                <ResetPasswordForm />
            </div>
            <img
                src="/design-portfolio/img/pexels-wal_-172619-2156618639-36077711.jpg"
                className="absolute h-full w-full object-cover top-0 left-0"
            />
        </div>
    );
};

export const Form: React.FC = () => {
    const { toast, Toast } = useToast();
    const success = (res: UserData) => {
        toast("Successfully logged-in");
    };

    return (
        <div className="border-l-2 shrink-0 border-white/15 w-full relative z-1 text-white-1 flex flex-col h-full p-16 justify-center bg-black/75 backdrop-blur-sm">
            {Toast}
            <span className="text-2xl">Hi, Welcome Back!</span>
            <div className="flex gap-1 items-center font-barlow text-base">
                We&apos;ve been waiting for your return!
            </div>
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
        </div>
    );
};

const Fields: React.FC<{ onSuccess: Function }> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<Partial<LoginPayload>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const validatePayload = () => {
        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            onSuccess();
        }, 3000);
    };

    const handleChange =
        (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
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
                value={formData.email ?? ""}
                onChange={handleChange("email")}
            />
            <PasswordInput />
            <ForgotPassword />
            <div className="flex justify-between w-full">
                <AlternativeSignIn />
                <button
                    disabled={!formData.email}
                    className={`${
                        loading
                            ? ""
                            : "not-disabled:cursor-pointer not-disabled:hover:bg-white/95"
                    } bg-white-1 text-black disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group font-fjalla text-base py-1 flex items-center justify-center`}
                    onClick={validatePayload}
                >
                    {loading ? <Spinner /> : "Login"}
                </button>
            </div>
        </form>
    );
};

const ForgotPassword: React.FC = () => {
    return (
        <Link
            href={"/auth/login?reset-password=true"}
            className="w-fit mr-1 font-barlow text-white/45 hover:text-white/75 text-base italic text-end cursor-pointer transition-colors"
        >
            Forgot Password?
        </Link>
    );
};
