import { formatCount } from "../../utils/formatter/unit";

interface LivestreamVideoCardProps {
    avatar: string;
    username: string;
    viewers: number;
    thumbnail: string;
    title: string;
}

export const LivestreamVideoCard: React.FC<LivestreamVideoCardProps> = ({
    avatar,
    username,
    viewers,
    thumbnail,
    title,
}) => {
    return (
        <div className="group relative cursor-pointer flex flex-col shrink-0 w-57">
            <div className="text-xs left-1 top-1 absolute px-1 py-0.5 bg-red-error rounded-xs z-2">
                {formatCount(viewers)}{" "}
                <i className="ri-user-3-fill ext-red-0" />
            </div>
            <div className="w-full h-full transition-[color,scale] bg-white/0 group-hover:bg-black-2.5 group-hover:scale-110 absolute rounded-lg left-0 top-0" />
            <img
                alt={thumbnail}
                src={`/design-portfolio/img/${thumbnail}`}
                className="h-32 aspect-video rounded-md relative z-1"
            />
            <div className="w-full relative z-1 flex gap-2 mt-3">
                <img
                    alt=""
                    src={`/design-portfolio/img/${avatar}`}
                    className="h-9 w-9 rounded-full"
                />
                <div className="flex flex-col w-0 grow">
                    <span title={title} className="truncate">
                        {title}
                    </span>
                    <span className="font-smooch font-medium text-lg/5">
                        @{username}
                    </span>
                </div>
            </div>
        </div>
    );
};
