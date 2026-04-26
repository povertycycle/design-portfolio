import { LandingHeader } from "@/src/libraries/navigation/LandingHeader";
import React from "react";
import { Footer } from "./Footer";
import { MainStory } from "./MainStory";

export const Newsletter: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-auto bg-black text-white font-fjalla flex flex-col">
            <LandingHeader />
            <div className="w-full flex flex-col mt-26 gap-24">
                {NEWSLETTERS.map((newsletter, i) => (
                    <MainStory
                        key={newsletter.header}
                        order={i}
                        {...newsletter}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

const NEWSLETTERS = [
    {
        header: "Epic science story title",
        summary:
            "Cras ultrices risus ac feugiat sollicitudin. Sed sollicitudin hendrerit feugiat. Pellentesque aliquam ligula est, a elementum sem vulputate eget. Nam hendrerit porttitor ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc imperdiet sollicitudin ligula, eget consectetur ipsum ullamcorper id. Sed enim odio, efficitur a rutrum id, pharetra eget purus.",
        coverArt: "pexels-dorota-semla-1929451-12219606.jpg",
        postedAt: "2025-11-21T12:36:45.719Z",
        similarStories: [
            {
                header: "Science story 1",
                coverArt: "pexels-efe-ersoy-393937500-36701720.jpg",
                postedAt: "2025-11-20T12:36:45.719Z",
            },
            {
                header: "Science story 2",
                coverArt: "pexels-olgalioncat-7244431.jpg",
                postedAt: "2025-11-18T12:36:45.719Z",
            },
            {
                header: "Science story 3",
                coverArt: "pexels-pexels-user-2161008279-37149787.jpg",
                postedAt: "2025-11-13T12:36:45.719Z",
            },
        ],
    },
    {
        header: "Epic arts story title",
        summary:
            "Duis faucibus dui et euismod iaculis. Aenean euismod faucibus ipsum, non porta nisi dignissim sit amet. Donec cursus enim ac luctus fermentum. Morbi eget turpis bibendum, accumsan ligula et, dignissim dolor. Fusce bibendum efficitur ornare. Ut eu metus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ullamcorper eget nibh quis molestie. Suspendisse dapibus gravida vulputate. Phasellus sem orci, finibus vitae ipsum in, hendrerit accumsan sem. Pellentesque tincidunt elementum nisl eu dapibus.",
        coverArt: "pexels-franco30-11130920.jpg",
        postedAt: "2025-08-13T08:22:11.719Z",
        similarStories: [
            {
                header: "Arts story 1",
                coverArt: "pexels-raymond-petrik-1448389535-27829411.jpg",
                postedAt: "2025-08-12T08:22:11.719Z",
            },
            {
                header: "Arts story 2",
                coverArt: "pexels-thienleduyphoto-36809138.jpg",
                postedAt: "2025-08-11T08:22:11.719Z",
            },
            {
                header: "Arts story 3",
                coverArt: "pexels-thienleduyphoto-36818882.jpg",
                postedAt: "2025-08-10T08:22:11.719Z",
            },
        ],
    },
    {
        header: "Epic history news title",
        summary:
            "Sed egestas, nulla non pulvinar convallis, nunc ligula ultricies turpis, eget interdum ipsum risus non neque. Nulla sit amet urna interdum, mollis orci et, auctor massa. Aliquam dictum semper purus non ultricies. Ut tempor ipsum a cursus gravida. Integer venenatis dolor id leo gravida blandit. Sed id orci metus. Cras vel mauris efficitur, lobortis nisi eget, eleifend sapien. Vestibulum pellentesque gravida purus id aliquam. Integer posuere urna eleifend lectus venenatis commodo. Integer sit amet aliquet quam, in eleifend ipsum. Duis faucibus felis erat, eget convallis neque euismod eu.",
        coverArt: "pexels-alexander-mass-748453803-33815179.jpg",
        postedAt: "2025-07-14T14:18:51.719Z",
        similarStories: [
            {
                header: "History news 1",
                coverArt: "pexels-dmytkopl-34580394.jpg",
                postedAt: "2025-07-12T14:18:51.719Z",
            },
            {
                header: "History news 2",
                coverArt: "pexels-erkocphoto-32146234.jpg",
                postedAt: "2025-07-02T14:18:51.719Z",
            },
            {
                header: "History news 3",
                coverArt: "pexels-thienleduyphoto-36820181.jpg",
                postedAt: "2025-07-01T14:18:51.719Z",
            },
        ],
    },
];
