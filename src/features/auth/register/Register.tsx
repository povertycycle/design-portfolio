import { useState } from "react";
import { RequireVerification } from "../login/RequireVerification";
import { Form } from "./Form";

export const Register: React.FC = () => {
    const [success, setSuccess] = useState<boolean | undefined>();
    const onSuccess = () => {
        setSuccess(true);
    };

    return (
        <div className={"w-full h-full grid grid-cols-2 px-6 gap-16"}>
            <div className="w-120 h-160 my-auto rounded-lg bg-white/75 ml-auto" />
            {!!success ? (
                <RequireVerification />
            ) : (
                <Form onSuccess={onSuccess} />
            )}
        </div>
    );
};
