import { useClipboard } from "@/src/libraries/hooks/useClipboard";
import { TransactionDetails } from "./interfaces";
import useToast from "../../notification/Toast";

type TrxNumberProps = Pick<TransactionDetails, "transactionNumber">;

export const TrxNumber: React.FC<TrxNumberProps> = ({ transactionNumber }) => {
    const copy = useClipboard(transactionNumber);
    const { toast, Toast } = useToast();

    function copyNumber() {
        copy();
        toast("Trx number copied");
    }

    return (
        <>
            <button
                onClick={copyNumber}
                className="bg-black-1 pl-4 pr-3 flex gap-3 shrink-0 cursor-pointer w-40 items-center justify-between whitespace-nowrap rounded-tl-md"
            >
                <span>{transactionNumber}</span>
                <i className="ri-file-copy-line" />
            </button>
            {Toast}
        </>
    );
};
