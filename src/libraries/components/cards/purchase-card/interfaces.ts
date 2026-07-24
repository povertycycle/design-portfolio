export type TransactionType = "SUBSCRIPTION" | "DONATION";

export interface TransactionDetails {
    transactionNumber: string;

    price: number;
    type: TransactionType;
    recipient: {
        username: string;
        avatar: string | null;
    };
    transactionDate: string;
    message: string | null;
}
