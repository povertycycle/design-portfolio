import { Avatar } from "./Avatar";

interface CreatorDataProps {
    inactive?: boolean;
    avatar: string;
    username: string;
    role: string;
}

export const CreatorData: React.FC<CreatorDataProps> = ({
    inactive,
    avatar,
    username,
    role,
}) => {
    return (
        <div
            data-inactive={inactive}
            className={`data-[inactive="true"]:brightness-65 flex flex-col w-full items-center px-4`}
        >
            <Avatar
                avatar={avatar}
                size={64}
                className="w-16 h-16 border-2 border-white/25 mt-12 z-2 rounded-full"
            />
            <h1 className="mt-4">@{username}</h1>
            <span className="font-barlow text-base opacity-85">{role}</span>
        </div>
    );
};
