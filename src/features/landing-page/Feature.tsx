interface FeatureProps {
    num: number;
    image: string;
}

export const Feature: React.FC<FeatureProps> = ({ num, image }) => {
    const isOdd = num % 2 === 1;
    return (
        <article
            id={`landing-feature-${num}`}
            className="w-screen border-t-2 border-white/25 h-dvh sm:h-screen group shrink-0 flex flex-col items-center justify-center bg-black relative overflow-hidden"
        >
            <div
                className={`w-full h-full flex group-even:flex-row-reverse items-center justify-center gap-8 text-white`}
            >
                <img alt={image} src={image} className="object-cover" />
                <div
                    className={`flex flex-col absolute w-full justify-center h-full px-24 bg-black/65`}
                >
                    <div
                        className={`flex flex-col max-w-7xl w-full mx-auto mt-20 group-even:items-start group-odd:items-end`}
                    >
                        <div className="px-6 pb-5 pt-7 bg-white/2 backdrop-blur-sm rounded-2xl max-w-120 flex flex-col border-2 border-white/15">
                            <h1
                                className={`text-3xl ${isOdd ? "" : "ml-auto"}`}
                            >
                                Feature Title
                            </h1>
                            <h2 className="text-xl group-odd:text-end italic mt-4 font-barlow text-gray-300 font-medium">
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
