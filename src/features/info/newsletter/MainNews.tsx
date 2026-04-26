import { NewsData } from "./interface";

export const MainNews: React.FC<NewsData> = ({
    coverArt,
    postedAt,
    header,
    summary,
}) => {
    return (
        <div className="relative w-full h-180 flex items-center overflow-hidden group-odd:order-1 group-odd:rounded-l-xl group-even:order-2 group-even:rounded-r-xl">
            <img
                alt={coverArt}
                src={`/design-portfolio/img/${coverArt}`}
                className="absolute w-full"
            />
            <div className="absolute top-0 group-even::left-0 group-odd:right-0 mx-8 mt-8 text-xl opacity-75 tracking-wide z-1">
                {new Date(postedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </div>
            <div className="flex flex-col group-odd:items-end justify-end h-full gap-8 py-4 px-8 w-full relative bg-black/55">
                <h1 className="text-8xl group-even:ml-auto group-odd:mr-auto mb-8 px-4 opacity-65">
                    {header}
                </h1>
                <span className="font-smooch text-2xl group-odd:text-end max-w-160 opacity-85 font-medium tracking-wide">
                    {summary}
                </span>
                <div className="flex items-center text-xl cursor-pointer group-line opacity-75 hover:opacity-100 w-fit">
                    <span>Read more</span>{" "}
                    <i className={`ri-arrow-right-s-line text-3xl`} />
                </div>
            </div>
        </div>
    );
};
