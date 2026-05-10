import { useRef } from "react";
import { formatCount } from "../../utils/formatter/unit";
import { LivestreamVideoCard } from "../cards/LivestreamVideoCard";

export const HorizontalList: React.FC = () => {
    const leftButtonRef = useRef<HTMLDivElement>(null);
    const rightButtonRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (
            !ref.current ||
            !window ||
            !leftButtonRef.current ||
            !rightButtonRef.current
        )
            return;

        ref.current.scrollLeft -= window.innerWidth;
        leftButtonRef.current.style.display = "none";
        rightButtonRef.current.style.display = "flex";
    };

    const scrollRight = () => {
        if (
            !ref.current ||
            !window ||
            !leftButtonRef.current ||
            !rightButtonRef.current
        )
            return;

        ref.current.scrollLeft += window.innerWidth;
        leftButtonRef.current.style.display = "flex";
        rightButtonRef.current.style.display = "none";
    };

    return (
        <div className="w-full flex flex-col">
            <div className="flex gap-4 px-2 items-center">
                <h1>Live Now</h1>
                <div
                    ref={leftButtonRef}
                    onClick={scrollLeft}
                    className="h-8 w-8 hidden items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
                >
                    <i className="ri-arrow-left-s-line" />
                </div>
                <div
                    ref={rightButtonRef}
                    onClick={scrollRight}
                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
                >
                    <i className="ri-arrow-right-s-line" />
                </div>
            </div>
            <div
                ref={ref}
                className=" overflow-x-scroll scroll-smooth hidden-scroll flex gap-6 mt-2 p-3"
            >
                {LIVESTREAMS.map((data) => (
                    <LivestreamVideoCard key={data.username} {...data} />
                ))}
            </div>
        </div>
    );
};

const LIVESTREAMS = [
    {
        thumbnail: "captain_domo.jpg",
        username: "captain_domo",
        title: "those who bingus, bongus",
        avatar: "captain_domo-avatar.png",
        viewers: 9417,
    },
    {
        thumbnail: "mitchriz.jpg",
        username: "mitchriz",
        title: "Reviewing practice matches | bingo vs aggy later",
        avatar: "mitchriz-avatar.png",
        viewers: 412,
    },
    {
        thumbnail: "distortion2.jpg",
        username: "distortion2",
        title: "let me out of this fucking hospital",
        avatar: "distortion2-avatar.png",
        viewers: 24765,
    },
    {
        thumbnail: "lilaggy.jpg",
        username: "lilaggy",
        title: "indie horror games, bingus vs mitch after",
        avatar: "lilaggy-avatar.png",
        viewers: 54363,
    },
    {
        thumbnail: "parkenharbor.jpg",
        username: "parkenharbor",
        title: "Lies of P first playthrough",
        avatar: "parkenharbor-avatar.png",
        viewers: 24523,
    },
    {
        thumbnail: "rainbow6.jpg",
        username: "rainbow6",
        title: "BLAST R6 SLC MAJOR | Phase 1 - Day 02",
        avatar: "rainbow6-avatar.png",
        viewers: 436376,
    },
    {
        thumbnail: "the8bitdrummer.jpg",
        username: "the8bitdrummer",
        title: "taking song requests and chilling",
        avatar: "the8bitdrummer-avatar.png",
        viewers: 432,
    },
    {
        thumbnail: "corridorcrew.jpg",
        username: "corridorcrew",
        title: "Unboxing our subscribers mystery gifts",
        avatar: "corridorcrew-avatar.png",
        viewers: 2108,
    },
];
