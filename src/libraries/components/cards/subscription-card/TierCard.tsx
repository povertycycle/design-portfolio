import { TierData } from "./types";

interface TierCardProps {
    inactive?: boolean;
    primaryColor?: string;
    banner?: String;
    className?: string;
    title?: string;
    level?: number;
}

export const TierCard: React.FC<TierCardProps> = ({
    className,
    inactive,
    primaryColor,
    banner,
    title,
    level,
}) => {
    return (
        <div
            data-inactive={inactive}
            className={`${className} data-[inactive="true"]:brightness-65 w-full border-b-2 border-white/10 relative`}
        >
            {inactive && (
                <div className="absolute h-full flex w-full bg-black/35 z-2 text-base">
                    <span className="m-auto text-3xl opacity-75">Inactive</span>
                </div>
            )}
            <div className="absolute left-0 top-0 w-full h-full z-0">
                {banner ? (
                    <img
                        src={`/design-portfolio/img/${banner}`}
                        className={`w-full h-full object-cover`}
                    />
                ) : (
                    <div
                        className="w-full h-full"
                        style={{ background: primaryColor ?? "#000000" }}
                    />
                )}
            </div>
            {!!title && !!level && (
                <div
                    className={`w-full h-full flex flex-col px-3 py-1 bg-black/50 relative z-1`}
                >
                    <span className="text-lg">{title}</span>
                    <span className="font-barlow text-sm italic opacity-75">
                        Tier {level}
                    </span>
                </div>
            )}
        </div>
    );
};
