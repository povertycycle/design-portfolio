import { useState } from "react";
import { useBlur } from "../../hooks/useBlur";
import { timeAgo } from "../../utils/formatter/time";

export const NotificationSystem: React.FC = () => {
    const { isFocused, ref, focus } = useBlur();

    return (
        <div ref={ref} className="relative flex flex-col">
            <div
                onClick={focus}
                className="h-full aspect-square rounded-full cursor-pointer hover:bg-white/20 text-white flex items-center justify-center"
            >
                <i className="ri-notification-3-line text-xl" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 text-xs translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center bg-red-5 text-white">
                +99
            </div>
            {isFocused && <NotifTab />}
        </div>
    );
};

const NotifTab: React.FC = () => {
    const [tab, setTab] = useState<string>("news");

    return (
        <div className="w-80 flex flex-col mt-4 bg-white/10 p-2 absolute top-full right-0 border-2 border-white/30 rounded-md">
            <div className="flex w-full gap-2">
                <div
                    onClick={() => setTab("news")}
                    className={`text-center w-full border-b cursor-pointer pb-1 ${
                        tab === "news"
                            ? "border-white text-white/90"
                            : "border-white/60 hover:border-white/80 text-white/60 hover:text-white/80"
                    }`}
                >
                    News
                </div>
                <div
                    onClick={() => setTab("updates")}
                    className={`text-center w-full border-b cursor-pointer pb-1 ${
                        tab === "updates"
                            ? "border-white text-white/90"
                            : "border-white/60 hover:border-white/80 text-white/60 hover:text-white/80"
                    }`}
                >
                    Updates
                </div>
            </div>
            <div>
                {tab === "news" && (
                    <div className="w-full flex flex-col gap-1 p-1 mt-3 text-white/90 font-smooch text-xl font-medium">
                        {[
                            {
                                time: "2026-05-04T12:27:18.996Z",
                                message: "You have a new commission request.",
                            },
                            {
                                avatar: "pexels-dorota-semla-1929451-12219606-mini.jpg",
                                time: "2026-05-04T11:27:18.996Z",
                                message: "User 1 has joined the community!",
                            },
                            {
                                avatar: "pexels-erkocphoto-32146234-mini.jpg",
                                time: "2026-05-03T11:27:18.996Z",
                                message: "User 2 liked your post.",
                            },
                            {
                                time: "2026-05-01T11:27:18.996Z",
                                message:
                                    "Your commission work has been accepted!",
                            },
                            {
                                avatar: "pexels-franco30-11130920-mini.jpg",
                                time: "2026-04-04T11:27:18.996Z",
                                message: "User 3 has sent you a gift!",
                            },
                        ].map(({ avatar, time, message }, i) => (
                            <div
                                key={i}
                                className="flex gap-3 hover:bg-white/10 cursor-pointer rounded-lg px-2 py-1"
                            >
                                {avatar && (
                                    <img
                                        className="h-8 w-8 rounded-full my-auto object-cover"
                                        src={`/img/_mock/${avatar}`}
                                        alt={avatar}
                                    />
                                )}
                                <div className="flex flex-col">
                                    <span className="text-lg/6">{message}</span>
                                    <span className="text-base/4 opacity-80">
                                        {timeAgo(time)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {tab === "updates" && (
                    <div className="w-full flex flex-col gap-1 p-1 mt-3 text-white/90 font-smooch text-xl font-medium">
                        {[
                            {
                                time: "2026-05-04T12:27:18.996Z",
                                message: "Read our latest blog news!",
                            },
                            {
                                time: "2026-05-04T11:27:18.996Z",
                                message: "Update 1.32.45705 Out!",
                            },
                            {
                                time: "2026-05-03T11:27:18.996Z",
                                message: "Scheduled maintenance - hotfix",
                            },
                        ].map(({ time, message }, i) => (
                            <div
                                key={i}
                                className="flex gap-3 hover:bg-white/10 cursor-pointer rounded-lg px-2 py-1"
                            >
                                <div className="flex flex-col">
                                    <span className="text-lg/6">{message}</span>
                                    <span className="text-base/4 opacity-80">
                                        {timeAgo(time)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="my-2 text-center text-white/80 text-sm">
                    <span className="opacity-80 hover:opacity-100 cursor-pointer">
                        Read more
                    </span>
                </div>
            </div>
        </div>
    );
};
