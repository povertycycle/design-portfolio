import { PROFILE_SOCIAL_MEDIA } from "@/src/constants/profile";
import Link from "next/link";

export const Footer: React.FC = () => {
    return (
        <div className="flex-col mt-32 mb-16 flex mx-auto relative w-120 h-160 shrink-0 rounded-lg overflow-hidden">
            <img
                alt="pexels-efe-ersoy-393937500-36538953.jpg"
                src="/design-portfolio/img/pexels-efe-ersoy-393937500-36538953.jpg"
                className="absolute h-full w-full object-cover"
            />
            <div className="flex flex-col bg-black/50 relative w-full h-full p-8">
                <span className="text-2xl opacity-85">
                    Subscribe to our newsletter
                </span>
                <span className="font-smooch opacity-85 text-xl font-medium">
                    Read updates and stories from all over the world
                </span>
                <input
                    className="auth__input--default mt-auto"
                    placeholder="Email"
                    autoComplete="email"
                />
                <button
                    className={`bg-white/90 hover:brightness-95 mt-8 ml-auto text-dark-blue cursor-pointer rounded-sm px-4 w-32 group h-9 py-1 flex items-center justify-center`}
                >
                    Subscribe
                </button>
                <div className="flex gap-4 ml-auto mt-auto">
                    {PROFILE_SOCIAL_MEDIA.map(({ url, remixicon }) => (
                        <Link
                            href={url}
                            key={remixicon}
                            className="text-white/60 hover:text-white flex items-center justify-center w-9 h-9 text-xl rounded-sm"
                        >
                            <i className={remixicon} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
