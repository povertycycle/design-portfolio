import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className="mt-auto pt-8 flex items-center gap-4 ml-auto">
            <span className="text-white/65 text-xl font-smooch font-medium">
                Visit our social media for more information
            </span>
            <div className="flex gap-4">
                {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                    <Link
                        href={url}
                        key={remixicon}
                        className="text-white/65 hover:text-white flex items-center justify-center w-9 h-9 text-2xl rounded-sm"
                    >
                        <i className={remixicon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
