interface FeatureProps {
    num: number;
    image: string;
}

export const Feature: React.FC<FeatureProps> = ({ num, image }) => {
    const isOdd = num % 2 === 1;
    return (
        <article
            id={`landing-feature-${num}`}
            className="w-screen h-dvh sm:h-screen shrink-0 flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >
            <div
                className={`w-full h-full flex ${
                    isOdd ? "flex-row-reverse" : ""
                } items-center justify-center gap-8 text-white`}
            >
                <img
                    alt={image}
                    src={image}
                    className="rounded-lg object-cover"
                />
                <div
                    className={`flex flex-col absolute w-full justify-center h-full px-24 bg-black/65`}
                >
                    <div
                        className={`flex flex-col max-w-7xl w-full mx-auto mt-20  ${
                            isOdd ? "items-start" : "items-end"
                        }`}
                    >
                        <div className="p-10 bg-white/10 backdrop-blur-sm rounded-lg max-w-120 flex flex-col">
                            <h1
                                className={`text-3xl mt-1 ${
                                    isOdd ? "" : "ml-auto"
                                }`}
                            >
                                Feature Title
                            </h1>
                            <h2 className="text-2xl italic mt-4 font-smooch text-gray-300 font-medium">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed posuere mattis mi. Etiam in
                                turpis odio. Nulla facilisi. Nunc eget ante id
                                massa tincidunt molestie. Praesent at lacus
                                tellus. Integer tempor interdum ultricies.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};
