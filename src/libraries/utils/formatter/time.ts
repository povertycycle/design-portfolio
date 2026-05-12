export type Unit = "DAYS" | "HOURS" | "MINUTES" | "SECONDS";
type UnitValues = Partial<Record<Unit, number>>;
const UNIT_VALUES: Record<Unit, number> = {
    DAYS: 30,
    HOURS: 24,
    MINUTES: 60,
    SECONDS: 60,
};
const _KEYS = Object.keys(UNIT_VALUES);

export function timeAgo(d: string | Date): string {
    const date = d instanceof Date ? d : new Date(d);
    const formatter = new Intl.RelativeTimeFormat("en");
    const ranges = [
        ["years", 3600 * 24 * 365],
        ["months", 3600 * 24 * 30],
        ["weeks", 3600 * 24 * 7],
        ["days", 3600 * 24],
        ["hours", 3600],
        ["minutes", 60],
        ["seconds", 1],
    ] as const;
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;

    for (const [rangeType, rangeVal] of ranges) {
        if (rangeVal < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / rangeVal;
            return formatter.format(Math.round(delta), rangeType);
        }
    }

    return "Some time ago";
}

function getTimeMultiplier(unit: Unit): number {
    const index = _KEYS.indexOf(unit);
    return _KEYS
        .slice(index + 1, _KEYS.length)
        .reduce((acc, curr) => acc * UNIT_VALUES[curr as Unit], 1);
}

function extractTime(
    unitList: Unit[],
    duration: number | null = 0
): UnitValues {
    const result: UnitValues = {};
    if (!duration) {
        return result;
    }

    const head = _KEYS.indexOf(unitList[0]) - 1;
    let hasHeadValue = false;
    if (head >= 0) {
        const MAX = getTimeMultiplier(_KEYS[head] as Unit);
        hasHeadValue = Math.floor(duration / MAX) >= 1;
    }

    unitList.forEach((unit, i) => {
        const MAX = getTimeMultiplier(unit);
        result[unit] =
            i === 0
                ? Math.floor(duration / MAX)
                : Math.floor(duration / MAX) % UNIT_VALUES[unit];
    });

    return result;
}

export function toHHMMSS(duration: number | null = 0): string {
    const data = extractTime(["HOURS", "MINUTES", "SECONDS"], duration);

    const time = Object.values(data)
        .filter((value) => value)
        .map((value) => String(value).padStart(2, "0"));

    return time.join(":");
}
