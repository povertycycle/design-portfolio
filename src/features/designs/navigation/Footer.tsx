import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className="px-6 py-3 flex mt-auto flex-wrap gap-x-4 gap-y-1 text-white/65 font-fjalla text-sm w-full">
            {[
                { url: "/", title: "About" },
                { url: "/info/newsletter", title: "News" },
                { url: "/info/terms", title: "Terms" },
                { url: "/auth/questions", title: "Questions" },
                { url: "/info/privacy", title: "Privacy" },
            ].map(({ url, title }) => (
                <Link key={url} className="hover:text-white" href={url}>
                    {title}
                </Link>
            ))}

            <div className="mt-8 flex flex-wrap w-full text-xl font-normal gap-2 justify-between">
                {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                    <Link
                        href={url}
                        key={remixicon}
                        className="hover:text-white"
                    >
                        <i className={remixicon} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
