import { USER_DATA } from "@/src/constants/users";
import { Avatar } from "../misc/Avatar";

const { username, avatar } = USER_DATA.profile;

export const MessageDisplay: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col bg-black/65 relative z-1 text-white">
            <div className="flex flex-col w-full h-full p-4">
                <h1 className="flex items-center gap-3">
                    <Avatar
                        username={username}
                        className="rounded-full"
                        avatar={avatar}
                    />
                    <span>{username}</span>
                </h1>
                <MessageList />
            </div>
            <ChatInput />
        </div>
    );
};

const MessageList: React.FC = () => {
    return (
        <div className="flex flex-col font-barlow gap-3 mt-8 mb-4">
            {_MESSAGE_LIST.map((props, i) => (
                <Message {...props} key={i} />
            ))}
        </div>
    );
};
interface MessageData {
    sender: string;
    message: string;
    time: string;
}

const Message: React.FC<MessageData> = ({ sender, message, time }) => {
    return (
        <div
            className={`${
                sender === "a" ? "ml-auto" : "mr-auto"
            } rounded-sm px-3 py-2 max-w-[75%] flex relative bg-white/10 text-white`}
        >
            <span>{message}</span>
            <span className="ml-auto mt-auto pl-2 translate-y-1 translate-x-1 opacity-80 text-sm">
                {time}
            </span>
        </div>
    );
};

const ChatInput: React.FC = () => {
    return (
        <div className="text-black-1 bg-white-1 w-full px-2 flex h-9 mt-6">
            <button className="h-full cursor-pointer ml-2 mr-2 shrink-0 flex items-center justify-center text-lg">
                <i className="ri-add-line" />
            </button>
            <button className="h-full cursor-pointer mr-2 shrink-0 flex items-center justify-center text-lg">
                <i className="ri-emoji-sticker-line" />
            </button>
            <input
                placeholder="Type your message here"
                className="focus:outline-none font-barlow h-full w-full px-2"
            />
            <button className="h-full cursor-pointer mr-2 shrink-0 flex items-center justify-center text-lg">
                <i className="ri-mic-fill" />
            </button>
        </div>
    );
};
export const _MESSAGE_LIST = [
    {
        sender: "a",
        message: "Fusce blandit sagittis purus.",
        time: "18:32",
    },
    {
        sender: "b",
        message: "Quisque commodo dui felis, ut dictum metus eleifend id.",
        time: "18:33",
    },
    {
        sender: "a",
        message: "Suspendisse nec metus ante.",
        time: "18:47",
    },
    {
        sender: "b",
        message:
            "Aenean pharetra, mauris ac fermentum efficitur, leo diam dictum mauris, non convallis augue nibh vitae velit.",
        time: "19:01",
    },
    {
        sender: "a",
        message: "Etiam facilisis.",
        time: "19:33",
    },
];
