import { useBlur } from "../../hooks/useBlur";
import { Avatar } from "../misc/Avatar";

export const UserMenu: React.FC = () => {
    const { focus, isFocused, ref } = useBlur();

    return (
        <div ref={ref} className="relative flex flex-col w-8 h-8">
            <Avatar
                onClick={focus}
                avatar="/design-portfolio/img/avatar.jfif"
                className="rounded-full cursor-pointer"
            />
            {isFocused && (
                <div className="text-white/90 w-80 flex flex-col mt-4 bg-black py-2 z-50 absolute top-full left-0 border-2 border-white/30 rounded-md">
                    <div className="flex flex-col font-barlow text-xl/6 px-3 py-1">
                        <div className="flex gap-2 items-center">
                            <h1 className="text-base">Some Random Name</h1>
                            <i className="ri-verified-badge-fill" />
                        </div>
                        <h2 className="text-sm">@johnwebsite </h2>
                    </div>
                    <div className="h-px bg-white/50 w-full my-2" />
                    <div className="flex flex-col font-barlow text-base">
                        <div className="py-1 hover:bg-white/10 cursor-pointer">
                            <span className="px-3 flex gap-4 items-center">
                                <i className="ri-user-smile-line" /> My Profile
                            </span>
                        </div>
                        <div className="py-1 hover:bg-white/10 cursor-pointer">
                            <span className="px-3 flex gap-4 items-center">
                                <i className="ri-live-line" /> Streaming Studio
                            </span>
                        </div>
                        <div className="py-1 hover:bg-white/10 cursor-pointer">
                            <span className="px-3 flex gap-4 items-center">
                                <i className="ri-file-list-3-line" /> Work
                                Requests
                            </span>
                        </div>
                    </div>
                    <div className="h-px bg-white/50 w-full my-2" />
                    <div className="flex flex-col font-barlow text-base">
                        <div className="py-1 hover:bg-white/10 cursor-pointer">
                            <span className="px-3 flex gap-4 items-center">
                                <i className="ri-settings-5-line" /> Settings
                            </span>
                        </div>
                        <div className="py-1 hover:bg-white/10 cursor-pointer">
                            <span className="px-3 flex gap-4 items-center">
                                <i className="ri-logout-box-line" /> Logout
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
