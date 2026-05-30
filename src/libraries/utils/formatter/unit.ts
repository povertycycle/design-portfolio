export function formatCount(
    count?: number | null,
    unit?: string,
    suffix: string = "s"
): string {
    return `${Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(count ?? 0)}${
        unit ? ` ${unit}${(count ?? 0) > 1 ? suffix : ""}` : ""
    }`;
}

export function formatBytes(number?: number | null) {
    return Intl.NumberFormat("en", {
        notation: "compact",
        style: "unit",
        unit: "byte",
        unitDisplay: "narrow",
    })
        .format(number ?? 0)
        .replace("BB", "GB");
}

export function formatCurrency(
    amount?: number | null,
    currency = "USD"
): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        ...(currency === "IDR" && { maximumFractionDigits: 0 }),
    }).format(amount ?? 0);
}
