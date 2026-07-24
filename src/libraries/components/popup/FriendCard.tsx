import { USER_DATA } from "@/src/constants/users";
import { Avatar } from "../misc/Avatar";
import { formatCount } from "../../utils/formatter/unit";
import Link from "next/link";

export const FriendCard: React.FC = () => {
    const { username, avatar, role, socialMedia, bio } = USER_DATA.profile;

    return (
        <div className="w-full flex flex-col h-full relative rounded-lg overflow-hidden items-center justify-center text-white">
            <img
                className="w-full h-full object-cover absolute left-0 top-0"
                src={`/design-portfolio/img/pexels-erkocphoto-32146234-medium.jpg`}
            />
            <div className="w-full relative h-full z-1 flex flex-col bg-black/65 p-6">
                <div className="flex gap-4">
                    <Avatar
                        size={128}
                        className="w-32 h-32 rounded-full"
                        username={username}
                        avatar={avatar}
                    />
                    <div className="flex flex-col py-2">
                        <span className="text-2xl font-fjalla flex gap-2">
                            {username}
                            <i className="ri-verified-badge-fill" />
                        </span>
                        <span className="font-barlow text-lg text-gray-200">
                            {role.title}
                        </span>
                        <div className="flex gap-6 mt-auto">
                            <span className="text-base mt-2 flex gap-1">
                                {formatCount(38914813)}
                                <span className="font-barlow">connections</span>
                            </span>
                            <span className="text-base mt-2 flex gap-1">
                                {formatCount(653)}
                                <span className="font-barlow">contents</span>
                            </span>
                        </div>
                    </div>
                </div>
                <p className="font-barlow text-lg mt-4 text-gray-300">{bio}</p>
                <div className="flex gap-4 text-2xl mt-2">
                    <span className="hover:scale-120 transition-transform cursor-pointer">
                        <i className={`ri-user-fill`} />
                    </span>
                    {socialMedia.map(({ name, url }) => (
                        <Link
                            href={url}
                            key={url}
                            className="hover:scale-120 transition-transform"
                        >
                            <i className={`ri-${name.toLowerCase()}-line`} />
                        </Link>
                    ))}
                </div>
                <div className="flex justify-between items-end">
                    <div className="flex flex-col mt-8">
                        <span>Friends Since</span>
                        <span className="font-barlow text-gray-200">
                            July 23, 2025
                        </span>
                    </div>
                    <button className="text-red-error text-sm cursor-pointer hover:opacity-90">
                        Remove connection
                    </button>
                </div>
            </div>
        </div>
    );
};
