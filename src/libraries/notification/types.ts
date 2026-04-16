export type ToastType = "normal" | "error" | "info";
export interface ToastData {
    message: string;
    type: ToastType;
}
