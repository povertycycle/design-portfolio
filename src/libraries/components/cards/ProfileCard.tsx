import Link from "next/link";

interface ProfileCardProps {
    banner: string;
    avatar: string;
    username: string;
    bio: string;
    role: string;
    socials: { type: string; url: string }[];
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    banner,
    avatar,
    username,
    bio,
    role,
    socials,
}) => {
    return (
        <div
            key={username}
            className="w-full aspect-2/3 group relative cursor-pointer flex flex-col shrink-0"
        >
            <div className="w-full h-full relative z-1 bg-black/50 group-hover:bg-black/65 rounded-b-xl border-t-2 border-white/5 transition-colors duration-400 flex flex-col p-4">
                <img
                    className="border-2 border-white/25 mx-auto mt-8 rounded-full h-16 w-16 relative z-2"
                    src={`/design-portfolio/img/${avatar}`}
                />
                <h1 className="mx-auto mt-4">@{username}</h1>
                <span className="mx-auto font-barlow text-base opacity-85">
                    {role}
                </span>
                <span className="my-auto font-barlow text-sm/5 opacity-85 mx-auto text-center italic">
                    {bio}
                </span>
                <div className="flex gap-2 items-end">
                    <div className="flex flex-col"></div>
                </div>
                <div className="justify-center flex gap-2 h-6 mt-auto">
                    {socials.map(({ type, url }) => (
                        <Link
                            key={type}
                            href={url}
                            target="_blank"
                            className="h-full aspect-square flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
                        >
                            <i className={`ri-${type.toLowerCase()}-line`} />
                        </Link>
                    ))}
                </div>
            </div>
            <img
                src={`/design-portfolio/img/${banner}`}
                className="absolute left-0 top-0 w-full h-full rounded-xl object-cover"
            />
        </div>
    );
};
