import { Menu } from "./types";

export const SUPPORT_MAIL = "william.sentosatio@hotmail.com";
export const LANDING_CONTAINER_ID = "landing-container";
export const LANDING_NAV: Menu[] = ["Feature 1", "Feature 2", "Feature 3"]
    .map((text, i) => ({ text, anchorId: `landing-feature-${i}` }))
    .concat([
        { text: "About Us", anchorId: "landing-about-us" },
        { text: "Questions", anchorId: "landing-questions" },
    ]);
