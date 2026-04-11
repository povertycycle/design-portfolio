import { Menu } from "./types";

export const INSTRAGRAM_URL = "https://www.instagram.com/william.sentosatio/";
export const SUPPORT_MAIL = "william.sentosatio@hotmail.com";
export const LANDING_CONTAINER_ID = "landing-container";
export const LANDING_NAV: Menu[] = ["Feature 1", "Feature 2", "Feature 3"]
    .map((text, i) => ({ text, anchorId: `landing-feature-${i}` }))
    .concat([
        { text: "About Us", anchorId: "landing-about-us" },
        { text: "Questions", anchorId: "landing-questions" },
    ]);

export const PROFILE_SOCIAL_MEDIA: {
    url: string;
    remixicon: string;
}[] = [
    {
        url: INSTRAGRAM_URL,
        remixicon: "ri-instagram-line",
    },
    {
        url: "https://www.youtube.com/@povertycycle",
        remixicon: "ri-youtube-line",
    },
    { url: "https://github.com/povertycycle", remixicon: "ri-github-line" },
    {
        url: "https://www.linkedin.com/in/william-sentosatio/",
        remixicon: "ri-linkedin-line",
    },
];
