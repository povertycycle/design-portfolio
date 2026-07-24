import { useState } from "react";
import { timeAgo } from "../../utils/formatter/time";
import { Dropdown } from "./Dropdown";

export const Notification: React.FC = () => {
    return (
        <Dropdown className="h-8 w-8">
            <Dropdown.Toggle className="relative flex flex-col h-full aspect-square rounded-full">
                <div className="h-full aspect-square rounded-full cursor-pointer flex items-center justify-center">
                    <i className="ri-notification-3-fill text-xl" />
                </div>
                <div className="absolute top-2 right-1 text-xs translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center bg-red-error text-white-1">
                    9+
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="left-0 top-full">
                <Tabs />
            </Dropdown.Menu>
        </Dropdown>
    );
};

const Tabs: React.FC = () => {
    const [tab, setTab] = useState<string>("news");

    return (
        <>
            <div className="flex w-full gap-2 px-2">
                {["news", "updates"].map((option) => (
                    <div
                        key={option}
                        onClick={() => setTab(option)}
                        data-active={tab === option}
                        className={`text-center w-full brightness-toggle rounded-sm py-0.5`}
                    >
                        <span className="capitalize">{option}</span>
                    </div>
                ))}
            </div>
            <div>
                {tab === "news" && <News />}
                {tab === "updates" && <Updates />}
                <div className="my-2 pt-2 text-center text-sm">
                    <span className="opacity-80 hover:opacity-100 cursor-pointer">
                        Read more
                    </span>
                </div>
            </div>
        </>
    );
};

const News: React.FC = () => {
    const NEWS = [
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
            message: "Your commission work has been accepted!",
        },
        {
            avatar: "pexels-franco30-11130920-mini.jpg",
            time: "2026-04-04T11:27:18.996Z",
            message: "User 3 has sent you a gift!",
        },
    ];
    return (
        <div className="w-full flex flex-col gap-1 mt-3 font-barlow">
            {NEWS.map(({ avatar, time, message }, i) => (
                <Dropdown.Item
                    key={i}
                    className="flex gap-3 cursor-pointer px-4 py-1"
                >
                    {avatar && (
                        <img
                            className="h-8 w-8 rounded-full my-auto object-cover"
                            src={`/design-portfolio/img/${avatar}`}
                            alt={avatar}
                        />
                    )}
                    <div className="flex flex-col">
                        <span className="text-base/6">{message}</span>
                        <span className="text-sm/4 opacity-80">
                            {timeAgo(time)}
                        </span>
                    </div>
                </Dropdown.Item>
            ))}
        </div>
    );
};

const Updates: React.FC = () => {
    const UPDATES = [
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
    ];
    return (
        <div className="w-full flex flex-col gap-1 mt-3 font-barlow text-xl font-medium">
            {UPDATES.map(({ time, message }, i) => (
                <Dropdown.Item
                    key={i}
                    className="flex gap-3 cursor-pointer px-4 py-1"
                >
                    <div className="flex flex-col">
                        <span className="text-base/6">{message}</span>
                        <span className="text-sm/4 opacity-80">
                            {timeAgo(time)}
                        </span>
                    </div>
                </Dropdown.Item>
            ))}
        </div>
    );
};
