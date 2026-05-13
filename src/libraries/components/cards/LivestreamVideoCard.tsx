import { formatCount } from "../../utils/formatter/unit";

interface LivestreamVideoCardProps {
    avatar: string;
    username: string;
    viewers: number;
    thumbnail: string;
    title: string;
    isLive?: boolean;
}

export const LivestreamVideoCard: React.FC<LivestreamVideoCardProps> = ({
    avatar,
    username,
    viewers,
    thumbnail,
    title,
    isLive,
}) => {
    return (
        <div className="group relative cursor-pointer flex flex-col shrink-0 w-57">
            <div className="text-xs left-1 top-1 absolute px-1 py-0.5 bg-red-error rounded-xs z-2">
                {formatCount(viewers)} <i className="ri-user-3-fill" />
            </div>
            <div className="w-full h-full transition-[color,scale] bg-white/0 group-hover:bg-black-1.5 group-hover:scale-110 absolute rounded-lg left-0 top-0" />
            <img
                alt={thumbnail}
                src={`/design-portfolio/img/${thumbnail}`}
                className="h-32 aspect-video rounded-md relative z-1"
            />
            <div className="w-full relative z-1 flex gap-2 mt-2">
                <div className="relative flex h-9 w-9">
                    <img
                        data-live={!!isLive}
                        alt=""
                        src={`/design-portfolio/img/${avatar}`}
                        className="h-9 w-9 rounded-full data-[live=true]:outline-2 data-[live=true]:outline-red-error"
                    />
                    {isLive && (
                        <div className="bg-red-error px-1 flex items-center rounded-sm absolute bottom-0 translate-y-2 left-1/2 -translate-x-1/2 text-[10px] h-4 w-fit">
                            Live
                        </div>
                    )}
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
