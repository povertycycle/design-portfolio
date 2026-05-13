import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className="mt-auto pt-8 px-6 flex items-center gap-4 ml-auto">
            <span className="text-white/65 text-base font-barlow font-medium">
                Visit my social media for more information
            </span>
            <div className="flex gap-4">
                {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                    <Link
                        href={url}
                        key={remixicon}
                        className="text-white/75 bg-white/5 border-white/15 border-2 hover:bg-white/10 w-8 h-8 rounded-sm flex items-center justify-center cursor-pointer"
                    >
                        <i className={remixicon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
