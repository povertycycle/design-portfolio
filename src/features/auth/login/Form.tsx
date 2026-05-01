import { USER_DATA } from "@/src/constants/users";
import { UserData } from "@/src/interfaces/user";
import { Hyperlink } from "@/src/libraries/link/Hyperlink";
import useToast from "@/src/libraries/notification/Toast";
import { ChangeEvent, useState } from "react";
import { LoginPayload } from "./types";
import { Spinner } from "@/src/libraries/loading/Spinner";
import { AlternativeSignIn } from "../external/AlternativeSignIn";
import { PasswordInput } from "@/src/libraries/inputs/PasswordInput";

interface LoginFormProps {
    onSuccess?: (res: UserData) => void;
}

/**
 * [v2.0] - Login form usable anywhere in the application with toast message and callbacks.
 * @param callbacks Callbacks on success or failure.
 */
export const Form: React.FC<LoginFormProps> = ({ onSuccess }) => {
    const { toast, Toast } = useToast();
    const success = (res: UserData) => {
        toast("Successfully logged-in");
        onSuccess?.(res);
    };

    return (
        <div className="max-w-xl text-white flex flex-col my-auto items-end ml-auto w-full relative z-1">
            {Toast}
            <span className="font-bold text-2xl/8">Hi, Welcome Back!</span>
            <div className="font-medium text-lg font-smooch">
                We&apos;ve been waiting for <b>your return</b>!
            </div>
            <div className="flex flex-col w-full h-full mt-12 max-w-xl">
                <Fields onSuccess={success} />
                <div className="flex gap-3 justify-center mt-12 leading-7">
                    <span className="font-medium font-smooch text-xl tracking-wide">
                        Don&apos;t have an account?
                    </span>
                    <span className="text-gold">
                        <Hyperlink url="/auth/register">Sign-up</Hyperlink>
                    </span>
                </div>
            </div>
        </div>
    );
};

/**
 * [v2.0] - Login form with single state management.
 */
const Fields: React.FC<LoginFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<Partial<LoginPayload>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const validatePayload = () => {
        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            onSuccess?.(USER_DATA);
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
            className="w-full flex flex-col gap-8 items-end font-smooch text-xl tracking-wide font-medium"
            onSubmit={(e) => {
                e.preventDefault();
            }}
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
                    } bg-white text-dark-blue disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group font-bold py-1 flex items-center justify-center`}
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
        <div className="w-fit mr-1 text-white/60 hover:text-white text-base italic text-end cursor-pointer transition-colors">
            Forgot Password?
        </div>
    );
};
