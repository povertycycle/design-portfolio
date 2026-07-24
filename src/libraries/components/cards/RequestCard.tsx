import { Button } from "../misc/Button";

interface RequestProps {
    banner: string | null;
    avatar: string | null;
    username: string;
    role: string;
    viewers?: number;
    isIncoming?: boolean;
}

export const RequestCard: React.FC<RequestProps> = ({
    banner,
    avatar,
    username,
    role,
    viewers,
    isIncoming,
}) => {
    return (
        <div className="group relative flex shrink-0">
            <div className="w-full h-full relative z-1 bg-black/50 hover:bg-black/35 cursor-pointer border-t-2 border-white/5 transition-colors flex p-2 rounded-lg overflow-hiden">
                <div className="relative w-14 h-14 flex z-2 shrink-0">
                    <img
                        className={`${
                            viewers
                                ? "border-3 border-red-error"
                                : "border-2 border-white/25"
                        } rounded-full h-14 w-14 relative`}
                        src={`/design-portfolio/img/${avatar}`}
                    />
                    {!!viewers && (
                        <div className="bg-red-error text-white text-xs rounded-sm px-1 top-full -translate-y-3 left-1/2 -translate-x-1/2 absolute">
                            Live
                        </div>
                    )}
                </div>
                <div className="flex flex-col w-48 h-14 pl-4 my-auto">
                    <h1>@{username}</h1>
                    <span className="font-barlow text-sm opacity-85">
                        {role}
                    </span>
                </div>
            </div>
            <div
                className={`z-1 absolute justify-end flex gap-1 text-sm pr-2 right-0 bottom-0 translate-y-1/2`}
            >
                {isIncoming && (
                    <Button>
                        <i className="ri-chat-4-fill text-base" />
                    </Button>
                )}
                {!isIncoming && (
                    <Button>
                        <i className="ri-check-line text-xl" />
                    </Button>
                )}
                <Button style={{ background: "#bb0202", color: "#fafafa" }}>
                    <i className="ri-close-line text-xl" />
                </Button>
            </div>
            <img
                src={`/design-portfolio/img/${banner}`}
                className="absolute left-0 top-0 w-full h-full rounded-md border border-white/40 object-cover"
            />
        </div>
    );
};
