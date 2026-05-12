import { useSlide } from "../../hooks/useSlide";
import { LivestreamVideoCard } from "../cards/LivestreamVideoCard";

export const HorizontalList: React.FC = () => {
    const { ref, left, right } = useSlide();

    return (
        <div className="w-full flex flex-col">
            <div className="flex gap-4 px-2 items-center">
                <h1>Live Now</h1>
                <div
                    ref={left.button}
                    onClick={left.scroll}
                    className="h-8 w-8 hidden items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
                >
                    <i className="ri-arrow-left-s-line" />
                </div>
                <div
                    ref={right.button}
                    onClick={right.scroll}
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
        isLive: true,
    },
    {
        thumbnail: "mitchriz.jpg",
        username: "mitchriz",
        title: "Reviewing practice matches | bingo vs aggy later",
        avatar: "mitchriz-avatar.png",
        viewers: 412,
        isLive: true,
    },
    {
        thumbnail: "distortion2.jpg",
        username: "distortion2",
        title: "let me out of this fucking hospital",
        avatar: "distortion2-avatar.png",
        viewers: 24765,
        isLive: true,
    },
    {
        thumbnail: "lilaggy.jpg",
        username: "lilaggy",
        title: "indie horror games, bingus vs mitch after",
        avatar: "lilaggy-avatar.png",
        viewers: 54363,
        isLive: true,
    },
    {
        thumbnail: "parkenharbor.jpg",
        username: "parkenharbor",
        title: "Lies of P first playthrough",
        avatar: "parkenharbor-avatar.png",
        viewers: 24523,
        isLive: true,
    },
    {
        thumbnail: "rainbow6.jpg",
        username: "rainbow6",
        title: "BLAST R6 SLC MAJOR | Phase 1 - Day 02",
        avatar: "rainbow6-avatar.png",
        viewers: 436376,
        isLive: true,
    },
    {
        thumbnail: "the8bitdrummer.jpg",
        username: "the8bitdrummer",
        title: "taking song requests and chilling",
        avatar: "the8bitdrummer-avatar.png",
        viewers: 432,
        isLive: true,
    },
    {
        thumbnail: "corridorcrew.jpg",
        username: "corridorcrew",
        title: "Unboxing our subscribers mystery gifts",
        avatar: "corridorcrew-avatar.png",
        viewers: 2108,
        isLive: true,
    },
];
