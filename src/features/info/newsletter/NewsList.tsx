import { SimilarStories } from "./interface";

export const NewsList: React.FC<{ similarStories: SimilarStories[] }> = ({
    similarStories,
}) => {
    return (
        <div className="w-80 px-8 h-full flex flex-col shrink-0 gap-8 group-odd:order-2 group-even:order-1">
            {similarStories.map(({ header, coverArt, postedAt }) => (
                <div
                    key={header}
                    className="w-full aspect-video rounded-lg overflow-hidden flex flex-col group/card cursor-pointer items-center justify-center relative"
                >
                    <img
                        alt={coverArt}
                        src={`/design-portfolio/img/${coverArt}`}
                        className="w-full absolute"
                    />
                    <div className="text-xl bg-black/65 transition-colors px-5 py-4 w-full h-full flex text-white relative group-hover/card:bg-black/35">
                        <div className="flex flex-col opacity-75 group-odd:ml-auto group-odd:items-end mt-auto">
                            <span>{header}</span>
                            <span className="font-barlow text-sm font-medium">
                                {new Date(postedAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <span className="mt-8 pl-5 mx-auto opacity-65 hover:opacity-95 flex items-center gap-2 cursor-pointer">
                Load more news <i className="ri-arrow-down-s-line text-xl" />
            </span>
        </div>
    );
};
