import { Hyperlink } from "@/src/libraries/components/misc/Hyperlink";
import useToast from "@/src/libraries/components/notification/Toast";
import { ChangeEvent, useState } from "react";
import { RegisterPayload } from "./types";
import { Spinner } from "@/src/libraries/components/loading/Spinner";
import { AlternativeSignIn } from "../external/AlternativeSignIn";

interface RegisterFormProps {
    onSuccess: () => void;
}

export const Form: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const { toast, Toast } = useToast();
    const success = () => {
        toast("Registration successful!");
        onSuccess?.();
    };

    return (
        <div className="max-w-xl text-white flex flex-col my-auto w-full relative z-1">
            {Toast}
            <span className="font-bold text-2xl/8">Hello there!</span>
            <div className="flex gap-1 leading-7 font-medium text-xl font-smooch">
                <span className="font-medium font-smooch text-xl tracking-wide">
                    Create your <b>free account</b> here! or
                </span>
                <span className="text-gold">
                    <Hyperlink url="/auth/login">Sign-in</Hyperlink>
                </span>
            </div>
            <div className="w-full flex flex-col mt-12 max-w-xl">
                <Fields onSuccess={success} />
            </div>
        </div>
    );
};

/**
 * [v2.0] - Login form with single state management.
 */
const Fields: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<Partial<RegisterPayload>>({});

    const [loading, setLoading] = useState<boolean>(false);
    const validatePayload = () => {
        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            onSuccess?.();
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
            <input
                className="auth__input--default"
                placeholder="Username"
                autoComplete="username"
                value={formData.username ?? ""}
                onChange={handleChange("username")}
            />

            <InputPassword
                value={formData.password ?? ""}
                onChange={handleChange("password")}
            />
            <div className="flex justify-between w-full mt-12">
                <AlternativeSignIn />
                <button
                    disabled={!formData.email || !formData.password}
                    className={`${
                        loading
                            ? ""
                            : "not-disabled:cursor-pointer not-disabled:hover:bg-white/95"
                    } bg-white text-black disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group font-bold py-1 flex items-center justify-center`}
                    onClick={validatePayload}
                >
                    {loading ? <Spinner /> : "Register"}
                </button>
            </div>
        </form>
    );
};

const InputPassword: React.FC<{
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="w-full flex relative">
            <input
                className="peer auth__input--default"
                placeholder="Password"
                value={value}
                spellCheck={false}
                type={show ? "text" : "password"}
                onChange={onChange}
            />
            <div
                onClick={() => setShow((prev) => !prev)}
                className="w-9 h-9 rounded-full border-2 border-white/60 hover:border-white/80 peer-hover:text-white/80 peer-hover:border-white/80 hover:text-white/80 peer-focus:border-white/80 transition-colors absolute text-white/60 peer-focus:text-white/80 left-full top-1/2 flex items-center justify-center text-base cursor-pointer"
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
