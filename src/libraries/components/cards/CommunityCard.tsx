import { formatCount } from "../../utils/formatter/unit";

interface CommunityCardProps {
    banner: string;
    community: string;
    members: number;
    description: string;
    tags: string[];
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
    banner,
    community,
    members,
    description,
    tags,
}) => {
    return (
        <div className="w-full aspect-2/3 group relative cursor-pointer flex flex-col shrink-0">
            <div className="w-full h-full relative z-1 bg-black/50 rounded-xl group-hover:bg-black/65 transition-colors duration-400 flex flex-col justify-end p-4">
                <div className="mb-auto flex justify-between gap-8">
                    <span className="font-barlow text-sm italic opacity-85 mb-auto">
                        {tags.join(", ")}
                    </span>{" "}
                </div>
                <span className="mb-2 font-barlow duration-400 text-sm/5 max-h-0 overflow-hidden transition-[max-height] opacity-85 group-hover:max-h-32">
                    {description}
                </span>
                <h1 className="">{community}</h1>
                <span className="font-barlow text-sm flex gap-1 opacity-85">
                    {formatCount(members, "member")}
                </span>
            </div>
            <img
                src={`/design-portfolio/img/${banner}`}
                className="absolute left-0 top-0 w-full h-full rounded-xl object-cover"
            />
        </div>
    );
};
