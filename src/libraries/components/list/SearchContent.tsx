export const SearchContent: React.FC = () => {
    return (
        <div className="w-full flex flex-col mt-2 bg-black-1 p-2 absolute top-full left-0 border-2 border-black-2.5 rounded-md">
            <div className="flex flex-col gap-2">
                {SEARCH_CONTENTS.map(({ title, thumbnail }) => (
                    <div
                        key={title}
                        className="text-white/90 py-1 pr-1 pl-2 cursor-pointer flex items-center gap-2 hover:bg-white/10 rounded-sm"
                    >
                        <i className="ri-history-line text-lg/6" /> {title}
                        <div className="h-8 ml-auto rounded-sm overflow-hidden aspect-video flex items-center justify-center">
                            <img
                                className="h-full w-full object-cover"
                                src={`/design-portfolio/img/${thumbnail}`}
                                alt={thumbnail}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SEARCH_CONTENTS = [
    {
        title: "JoJo Cosplay",
        thumbnail: "pexels-dorota-semla-1929451-12219606-mini.jpg",
    },
    {
        title: "PSG vs Bayern",
        thumbnail: "pexels-franco30-11130920-mini.jpg",
    },
    {
        title: "Bingo Brawlers",
        thumbnail: "pexels-wal_-172619-2156618639-36077711-mini.jpg",
    },
    {
        title: "Eternal Sunshine of the Spotless Mind Full Analysis",
        thumbnail: "pexels-olgalioncat-7244431-mini.jpg",
    },
    {
        title: "Mythic Azshara Raid Ele Shaman POV",
        thumbnail: "pexels-thienleduyphoto-36820181-mini.jpg",
    },
    {
        title: "Blue Planet Full OST",
        thumbnail: "pexels-erkocphoto-32146234-mini.jpg",
    },
];
