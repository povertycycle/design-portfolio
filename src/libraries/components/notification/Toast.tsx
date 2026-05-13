import { useEffect, useRef, useState } from "react";
import { ToastData, ToastType } from "./types";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";

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
                    color: "bg-green-success",
                };
            case "error":
                return { remixicon: "ri-alert-fill", color: "bg-red-error" };
            case "info":
            default:
                return {
                    remixicon: "ri-information-fill",
                    color: "bg-black",
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

    return createPortal(
        <div
            ref={ref}
            className={`${styles.toast} text-lg font-barlow overflow-hidden translate-y-4 -translate-x-1/2 transition-transform fixed top-0 left-1/2 max-w-120 text-white rounded-md px-2 z-1000`}
        >
            <div
                className={`max-w-mobile flex items-center justify-center gap-2 px-4 py-1 w-fit mx-auto ${color} rounded-md`}
            >
                <i className={`${remixicon} text-xl/8`} />
                <span className="mx-4 text-sm/5">{data.message}</span>
                <button
                    className="cursor-pointer hover:text-white/80"
                    onClick={remove}
                >
                    <i className="ri-close-line text-lg/8" />
                </button>
            </div>
        </div>,
        document.body
    );
};

export default useToast;
