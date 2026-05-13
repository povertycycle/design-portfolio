import useToast from "@/src/libraries/components/notification/Toast";
import React from "react";

export const RequireVerification: React.FC = () => {
    return (
        <div className="w-160 absolute h-full z-1 flex">
            <div className="w-full relative z-1 font-barlow text-white flex flex-col h-full p-16 justify-center bg-black/75 backdrop-blur-sm">
                <h1 className="text-2xl font-fjalla">Welcome!</h1>
                <h2 className="mt-2 text-base text-white/75">
                    You&apos;re just a step away from becoming a part of our
                    family!
                </h2>
                <div className="mt-16 text-base">
                    <p>
                        But, before you can enjoy the{" "}
                        <b className="text-gold">full access </b>to the
                        platform, we&apos;ll need you to{" "}
                        <b className="text-gold">validate </b>your account
                        through a{" "}
                        <b className="text-gold">confirmation link </b>that
                        we&apos;ve sent to your email.
                    </p>
                </div>
                <p className="mt-4">
                    We can&apos;t wait for you to have fun with us.
                </p>
                <p className="flex flex-col text-base mt-16 text-white/75">
                    <span>Sincerely,</span>
                    <span>Your friend</span>
                </p>
                <span className="mb-5 text-center italic text-base text-white/75 mt-12">
                    Didn&apos;t receive any e-mail?
                </span>
                <RequestNewMail />
            </div>
        </div>
    );
};

const RequestNewMail: React.FC = () => {
    const { toast, Toast } = useToast();

    const resend = () => {
        toast("Verification re-sent");
    };

    return (
        <>
            {Toast}
            <div className="mx-auto text-base font-fjalla" onClick={resend}>
                <span className="cursor-pointer hover:opacity-100 opacity-65 transition-opacity">
                    Resend Verification
                </span>
            </div>
        </>
    );
};
