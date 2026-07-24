import { useBlur } from "@/src/libraries/hooks/useBlur";
import { TransactionDetails } from "./interfaces";
import { formatCurrency } from "@/src/libraries/utils/formatter/unit";

type AmountProps = Pick<TransactionDetails, "price">;

export const Amount: React.FC<AmountProps> = ({ price }) => {
    const { ref, isFocused, focus } = useBlur();
    return (
        <h1
            ref={ref}
            className="bg-white-1 text-black-1 py-1 pl-3 text-2xl rounded-md flex items-center h-10"
        >
            <span>{formatCurrency(price)}</span>
            <button
                onClick={focus}
                className={`${
                    isFocused ? "w-0" : "w-8"
                } transition-[width] cursor-pointer rounded-full overflow-hidden`}
            >
                <i className="ri-more-line" />
            </button>
            <div
                className={`flex text-base ${
                    isFocused ? "max-w-40" : "max-w-0"
                } overflow-hidden whitespace-nowrap transition-[max-width]`}
            >
                <div className="flex gap-3 px-3">
                    <span>{formatCurrency(0.95 * price)} </span>
                    <span>+</span>
                    <span>
                        {formatCurrency(0.05 * price)}{" "}
                        <span className="italic font-barlow">tax</span>
                    </span>
                </div>
            </div>
        </h1>
    );
};
