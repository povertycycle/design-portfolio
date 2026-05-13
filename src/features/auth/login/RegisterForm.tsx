import { RequireVerification } from "./RequireVerification";
import { Hyperlink } from "@/src/libraries/components/misc/Hyperlink";
import useToast from "@/src/libraries/components/notification/Toast";
import { ChangeEvent, useState } from "react";
import { Spinner } from "@/src/libraries/components/loading/Spinner";
import { AlternativeSignIn } from "../external/AlternativeSignIn";
import { PasswordInput } from "@/src/libraries/components/inputs/PasswordInput";
import { RegisterPayload } from "./types";

export const RegisterForm: React.FC = () => {
    const [success, setSuccess] = useState<boolean | undefined>();
    const onSuccess = () => {
        setSuccess(true);
    };

    return (
        <div className={"w-160 absolute h-full z-1 flex justify-end"}>
            {!!success ? (
                <RequireVerification />
            ) : (
                <Form onSuccess={onSuccess} />
            )}
            <img
                src="/design-portfolio/img/pexels-zak-mogel-2158251013-35883712.jpg"
                className="absolute h-full w-full object-cover top-0 left-0"
            />
        </div>
    );
};

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
        <div className="border-r-2 border-white/15 w-full relative z-1 text-white flex flex-col h-full p-16 justify-center bg-black/75 backdrop-blur-sm">
            {Toast}
            <span className="text-2xl ml-auto">Hello there!</span>
            <div className="flex gap-1 items-center font-medium font-barlow text-base ml-auto">
                <span>Create your free account here! or</span>
                <span className="text-gold text-sm/4 mt-1 font-fjalla">
                    <Hyperlink url="/auth/login">Sign-in</Hyperlink>
                </span>
            </div>
            <div className="w-full flex flex-col mt-12">
                <Fields onSuccess={success} />
            </div>
        </div>
    );
};

const Fields: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<Partial<RegisterPayload>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const validatePayload = () => {
        if (loading) return;

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
            className="w-full flex flex-col gap-6 items-end"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                className="auth__input--default"
                placeholder="Username"
                autoComplete="username"
                value={formData.username ?? ""}
                onChange={handleChange("username")}
            />
            <input
                className="auth__input--default"
                placeholder="Email"
                autoComplete="email"
                value={formData.email ?? ""}
                onChange={handleChange("email")}
            />
            <PasswordInput />
            <div className="flex justify-between w-full mt-12">
                <AlternativeSignIn />
                <button
                    disabled={!formData.email}
                    className={`${
                        loading
                            ? ""
                            : "not-disabled:cursor-pointer not-disabled:hover:bg-white/95"
                    } bg-white text-black disabled:bg-white/50 transition-colors rounded-sm px-4 w-32 group font-fjalla text-base py-1 flex items-center justify-center`}
                    onClick={loading ? undefined : validatePayload}
                >
                    {loading ? <Spinner /> : "Register"}
                </button>
            </div>
        </form>
    );
};
