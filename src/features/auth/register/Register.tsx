import { useState } from "react";
import { RequireVerification } from "../login/RequireVerification";
import { Form } from "./Form";

export const Register: React.FC = () => {
    const [success, setSuccess] = useState<boolean | undefined>();
    const onSuccess = () => {
        setSuccess(true);
    };

    return (
        <div className={"relative w-full h-full grid grid-cols-2 px-6 gap-16"}>
            <div className="w-120 h-160 my-auto ml-auto rounded-lg overflow-hidden relative z-1">
                <img
                    src="/design-portfolio/img/pexels-pexels-user-2161008279-37149787.jpg"
                    alt="pexels-pexels-user-2161008279-37149787"
                    className=""
                />
            </div>
            {!!success ? (
                <RequireVerification />
            ) : (
                <Form onSuccess={onSuccess} />
            )}
            <img
                src="/design-portfolio/img/pexels-zak-mogel-2158251013-35883712.jpg"
                className="absolute h-full w-full object-cover brightness-35 blur-sm"
            />
        </div>
    );
};
