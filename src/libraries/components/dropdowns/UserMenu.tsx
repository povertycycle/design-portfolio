import { useBlur } from "../../hooks/useBlur";
import { Avatar } from "../misc/Avatar";
import { Dropdown } from "./Dropdown";

export const UserMenu: React.FC = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle>
                <Avatar
                    avatar="/avatar.jfif"
                    username="Avatar"
                    className="rounded-full cursor-pointer"
                />
            </Dropdown.Toggle>
            <Dropdown.Menu className="top-full left-0">
                <div className="flex flex-col font-barlow text-lg/6 px-4 py-1">
                    <div className="flex gap-2 items-center">
                        <h1 className="font-medium">Some Random Name</h1>
                        <i className="ri-verified-badge-fill" />
                    </div>
                    <h2 className="flex">@johnwebsite </h2>
                </div>
                <div className="bg-black-2.5 h-px w-full my-2" />
                <div className="flex flex-col font-barlow text-base">
                    <Dropdown.Item className="py-1">
                        <span className="px-3 flex gap-4 items-center">
                            <i className="ri-user-smile-line" /> My Profile
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="py-1">
                        <span className="px-3 flex gap-4 items-center">
                            <i className="ri-live-line" /> Streaming Studio
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="py-1">
                        <span className="px-3 flex gap-4 items-center">
                            <i className="ri-gallery-line" /> My Library
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="py-1">
                        <span className="px-3 flex gap-4 items-center">
                            <i className="ri-file-list-3-line" /> Work Requests
                        </span>
                    </Dropdown.Item>
                </div>
                <div className="bg-black-2.5 h-px w-full my-2" />
                <div className="flex flex-col font-barlow text-base">
                    <Dropdown.Item className="py-1 px-3 flex gap-4 items-center">
                        <i className="ri-settings-5-line" /> Settings
                    </Dropdown.Item>
                    <Dropdown.Item className="py-1">
                        <span className="px-3 flex gap-4 items-center">
                            <i className="ri-logout-box-line" /> Logout
                        </span>
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};
