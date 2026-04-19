import Link from "next/link";
import { PROFILE_SOCIAL_MEDIA } from "../../landing-page/constants";

export const Footer: React.FC = () => {
    return (
        <div className="mt-auto pt-8 flex items-center gap-8 ml-auto">
            <span className="text-white text-xl font-smooch font-medium">
                Visit our social media for more information
            </span>
            <div className="flex gap-4">
                {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                    <Link
                        href={url}
                        key={remixicon}
                        className="bg-white flex items-center justify-center w-9 h-9 rounded-sm"
                    >
                        <i className={remixicon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
