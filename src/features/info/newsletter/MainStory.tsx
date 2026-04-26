import { NewsData, SimilarStories } from "./interface";
import { MainNews } from "./MainNews";
import { NewsList } from "./NewsList";

interface MainStoryProps extends NewsData {
    order: number;
    similarStories: SimilarStories[];
}

export const MainStory: React.FC<MainStoryProps> = ({
    similarStories,
    order,
    ...mainNews
}) => {
    return (
        <div className="flex w-full group">
            <MainNews {...mainNews} />
            <NewsList similarStories={similarStories} />
        </div>
    );
};
