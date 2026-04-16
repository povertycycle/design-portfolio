import { UserData } from "../interfaces/user";

export const USER_DATA: UserData = {
    id: "random-id",
    profile: {
        fullName: "William Sentosatio",
        username: "povertycycle",
        email: "william.sentosatio@hotmail.com",
        phoneNumber: "+6281288881024",
        role: {
            theme: {
                id: "theme-id",
                primaryColor: "#002142",
                secondaryColor: "#216363",
                tertiaryColor: "#004242",
            },
            title: "Engineer, Designer",
        },
        avatar: "/img/avatar.jfif",
        verification: {
            status: "VERIFIED",
            verifiedAt: "2026-04-14T12:42:01.843Z",
        },
        bio: "Hello there!",
        socialMedia: [
            {
                name: "YOUTUBE",
                url: "http://youtube.com/@povertycycle",
            },
            {
                name: "GITHUB",
                url: "https://github.com/povertycycle/",
            },
            {
                name: "LINKEDIN",
                url: "https://www.linkedin.com/in/william-sentosatio/",
            },
            {
                name: "INSTAGRAM",
                url: "https://www.instagram.com/william.sentosatio/",
            },
        ],
        createdAt: "2026-04-14T12:42:01.843Z",
        updatedAt: "2026-04-14T12:42:01.843Z",
    },
    metaData: {
        isEmailVerified: false,
    },
};
