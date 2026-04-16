import { UserData } from "@/src/interfaces/user";
import { useState } from "react";
import { RequireVerification } from "./RequireVerification";
import { Form } from "./Form";

export const LoginPage: React.FC = () => {
    const [emailUnverified, setEmailUnverified] = useState<string>();

    const onSuccess = (res: UserData) => {
        if (!res.metaData.isEmailVerified) {
            setEmailUnverified(res.profile.email);
        } else {
            // Redirect to dashboard
        }
    };

    return (
        <div className={"w-full h-full grid grid-cols-2 px-6 gap-16"}>
            <div className="w-120 h-160 my-auto ml-auto rounded-lg bg-white" />
            {!!emailUnverified ? (
                <RequireVerification />
            ) : (
                <Form onSuccess={onSuccess} />
            )}
        </div>
    );
};
