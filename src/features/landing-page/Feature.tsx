interface FeatureProps {
    num: number;
}

export const Feature: React.FC<FeatureProps> = ({ num }) => {
    const isOdd = num % 2 === 1;
    return (
        <article
            id={`landing-feature-${num}`}
            className="w-screen h-dvh sm:h-screen shrink-0 flex flex-col items-center justify-center bg-dark-blue"
        >
            <div
                className={`w-full h-full max-w-7xl flex max-sm:flex-col ${
                    isOdd ? "sm:flex-row-reverse" : ""
                } items-center justify-center gap-8 text-white pl-6 pr-12`}
            >
                <div className="bg-white rounded-lg w-full sm:w-100 h-80" />
                <div className={`flex flex-col ${isOdd ? "text-end" : ""}`}>
                    <h1 className="text-lg sm:text-3xl sm:mt-6">
                        Feature Title
                    </h1>
                    <h2 className="text-base sm:text-2xl italic mt-2 font-smooch text-gray-300 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                </div>
            </div>
        </article>
    );
};
