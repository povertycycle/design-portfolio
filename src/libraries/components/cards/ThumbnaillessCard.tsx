import { formatBytes, formatCount } from "../../utils/formatter/unit";

interface ThumbnaillessCardProps {
    username: string;
    content: {
        stars: number;
        type: string;
        files: number;
        size: number;
    };
    title: string;
    isLive?: boolean;
}

export const ThumbnaillessCard: React.FC<ThumbnaillessCardProps> = ({
    username,
    content: { stars, type, files, size },
    title,
    isLive,
}) => {
    return (
        <div className="group relative cursor-pointer flex flex-col shrink-0 w-57">
            <div className="text-xs left-1 top-1 absolute px-1 py-0.5 bg-black flex gap-1 items-center justify-center text-white-1 rounded-xs z-2">
                {formatCount(stars)}{" "}
                <i className="ri-star-fill text-gold -translate-y-px" />
            </div>

            {!!files && files > 1 && (
                <div className="text-xs right-1 top-1 absolute px-1 py-0.5 bg-black flex gap-1 items-center justify-center text-white-1 rounded-xs z-2">
                    {files} files
                </div>
            )}
            <div className="w-full h-full transition-[color,scale] bg-white/0 group-hover:bg-black-1.5 group-hover:scale-110 absolute rounded-lg left-0 top-0" />
            <div className="h-32 aspect-video rounded-md  border-white/20 border relative z-1 flex flex-col items-center justify-center">
                <i className="ri-image-line text-lg opacity-85" />
                <span className="font-smooch">No Image</span>
                <div className="text-xs right-1 bottom-1 absolute flex gap-1 items-center justify-center text-white-1 z-2">
                    {type !== ".zip" && (
                        <div className="bg-black rounded-xs px-1 py-0.5">
                            {type}
                        </div>
                    )}
                    <div className="bg-black rounded-xs px-1 py-0.5">
                        {formatBytes(size)}
                    </div>
                </div>
            </div>
            <div className="w-full relative z-1 flex gap-2 mt-2">
                <div className="relative flex h-9 w-9">
                    <div
                        data-live={!!isLive}
                        className={`h-9 w-9 flex data-[live=true]:border-red-error border-white/20 items-center justify-center text-center rounded-full text-lg border-2`}
                    >
                        <span>{username.charAt(0).toUpperCase()}</span>
                    </div>
                </div>
                <div className="flex flex-col w-0 grow">
                    <span title={title} className="truncate">
                        {title}
                    </span>
                    <span className="font-barlow text-base/4">@{username}</span>
                </div>
            </div>
        </div>
    );
};
