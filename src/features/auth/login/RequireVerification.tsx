import React, { useEffect, useState } from "react";

/**
 * [v2.0] - Successful registration confirmation.
 */
export const RequireVerification: React.FC = () => {
    return (
        <div className="flex flex-col z-1 relative text-base/6 text-white max-w-xl my-auto">
            <h1 className="text-3xl font-bold tracking-wide">Welcome!</h1>
            <h2 className="mt-2 font-medium text-xl tracking-wide text-gray-300 font-smooch">
                You&apos;re just <b>a step</b> away from becoming a part of our{" "}
                <b>family</b>!
            </h2>
            <div className="mt-16 font-smooch text-xl tracking-wide">
                <p>
                    But, before you can enjoy the <b>full access </b>to the
                    platform, we&apos;ll need you to <b>validate </b>your
                    account through a <b>confirmation link </b>that we&apos;ve
                    sent to your email.
                </p>
            </div>
            <p className=" font-smooch text-xl tracking-wide mt-4">
                We can&apos;t wait for you to have <b>fun</b> with us.
            </p>
            <p className="flex flex-col font-smooch text-xl tracking-wide mt-4">
                <span>Sincerely,</span>
                <b>Your friend</b>
            </p>
            <span className="mb-5 text-center italic text-lg font-smooch mt-12">
                Didn&apos;t receive any e-mail?
            </span>
            <RequestNewMail />
        </div>
    );
};

/**
 * [v2.0] - Request resend email.
 */
const RequestNewMail: React.FC = () => {
    // const { toast, Toast } = useToast();
    const [cooldown, setCooldown] = useState<boolean>(false);

    const resend = () => {
        // toast("Verification re-sent");
        setCooldown(true);
    };

    const resetButton = () => {
        setCooldown(false);
    };

    return (
        <>
            {/* {Toast} */}
            <div className="mx-auto text-xl" onClick={resend}>
                {!cooldown ? (
                    <span className="cursor-pointer hover:opacity-100 opacity-65 transition-opacity">
                        Resend Verification
                    </span>
                ) : (
                    <Cooldown resetButton={resetButton} />
                )}
            </div>
        </>
    );
};

/**
 * [v2.0] - Cooldown indicator.
 */
const Cooldown: React.FC<{ resetButton: () => void }> = ({ resetButton }) => {
    const [seconds, setSeconds] = useState<number>(60);

    useEffect(() => {
        const timeoutId = window.setInterval(() => {
            setSeconds((prev) => {
                const t = prev - 1;
                if (t <= 0) {
                    window.clearInterval(timeoutId);
                    resetButton();
                }
                return t;
            });
        }, 1000);
        return () => {
            window.clearInterval(timeoutId);
        };
    }, []);

    return <span>{seconds}</span>;
};
