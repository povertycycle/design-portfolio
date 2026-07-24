import { FriendCard } from "../popup/FriendCard";
import { MessageDisplay } from "../popup/MessageDisplay";
import { Button } from "./Button";
import { Popup } from "./Popup";

export const FriendMenu: React.FC = () => {
    return (
        <div
            className={`z-1 translate-x-1/2 absolute justify-end flex gap-1 text-sm right-0 bottom-0 flex-col mb-4`}
        >
            <Popup>
                <Button>
                    <Popup.Toggle>
                        <i className="ri-info-i text-xl" />
                    </Popup.Toggle>
                </Button>
                <Popup.Display style={{ padding: 0 }}>
                    <FriendCard />
                </Popup.Display>
            </Popup>
            <Popup>
                <Button>
                    <Popup.Toggle>
                        <i className="ri-chat-3-fill" />
                    </Popup.Toggle>
                </Button>
                <Popup.Display className="relative" style={{ padding: 0 }}>
                    <img
                        src={`/design-portfolio/img/pexels-erkocphoto-32146234-medium.jpg`}
                        className="w-full h-full absolute left-0 top-0 object-cover"
                    />
                    <MessageDisplay />
                </Popup.Display>
            </Popup>
        </div>
    );
};
