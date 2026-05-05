import { useEffect, useRef, useState } from "react";
import { ToastData, ToastType } from "./types";
import styles from "./styles.module.css";

const useToast = (duration?: number) => {
    const [content, setContent] = useState<ToastData | null>(null);

    const toast = (message: string, type: ToastType = "normal") =>
        setContent({
            message,
            type,
        });

    const remove = () => setContent(null);

    return {
        toast,
        Toast: !!content && (
            <Toast data={content} duration={duration} remove={remove} />
        ),
    };
};

interface ToastProps {
    data: ToastData;
    duration?: number;
    remove: () => void;
}

const Toast: React.FC<ToastProps> = ({ data, duration, remove }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { remixicon, color } = (() => {
        switch (data.type) {
            case "normal":
                return {
                    remixicon: "ri-checkbox-circle-fill",
                    color: "text-green-success",
                };
            case "error":
                return { remixicon: "ri-alert-fill", color: "text-red-error" };
            case "info":
            default:
                return {
                    remixicon: "ri-information-fill",
                    color: "text-black",
                };
        }
    })();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout, followUpId: NodeJS.Timeout;
        timeoutId = setTimeout(() => {
            if (ref.current) ref.current.style.transform = "translateY(-150%)";
            followUpId = setTimeout(() => {
                remove();
            }, 300);
        }, duration ?? 5000);
        return () => {
            window.clearTimeout(timeoutId);
            window.clearTimeout(followUpId);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.toast} text-xl font-smooch translate-y-4 -translate-x-1/2 overflow-hidden transition-transform fixed top-0 left-1/2 max-w-120 bg-white text-dark-blue rounded-md px-2 z-[1000]`}
        >
            <div
                className={`max-w-mobile flex items-center justify-center gap-2 px-4 py-2 w-fit font-bold mx-auto ${color} rounded-md`}
            >
                <i className={`${remixicon} text-xl/8`} />
                <span className="ml-2">{data.message}</span>
                <div className="bg-white/25 h-7 w-mini mx-2" />
                <button className="cursor-pointer" onClick={remove}>
                    <i className="ri-close-line text-lg/6" />
                </button>
            </div>
        </div>
    );
};

export default useToast;
