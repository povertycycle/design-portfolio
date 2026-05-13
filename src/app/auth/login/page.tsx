"use client";

import { LoginForm } from "@/src/features/auth/LoginForm";
import { RegisterForm } from "@/src/features/auth/RegisterForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function LoginPage() {
    return (
        <Suspense fallback={<>...</>}>
            <Login />
        </Suspense>
    );
}

const Login: React.FC = () => {
    const params = useSearchParams();
    const isRegister = params.get("register") === "true";

    return (
        <div className="w-full h-full flex">
            {
                <div
                    data-register={isRegister}
                    className={`transition-[width] data-[register=true]:w-160 w-0 duration-500 h-full relative flex justify-end`}
                >
                    <RegisterForm />
                </div>
            }
            <div className="w-0 grow h-full relative z-1">
                <img
                    src="/design-portfolio/img/pexels-pexels-user-2161008279-37149787.jpg"
                    alt="pexels-pexels-user-2161008279-37149787"
                    className="w-full h-full object-cover relative z-0 brightness-85"
                />
            </div>
            {
                <div
                    data-register={isRegister}
                    className={`transition-[width] data-[register=true]:w-0 w-160 duration-500 h-full relative`}
                >
                    <LoginForm />
                </div>
            }
        </div>
    );
};
