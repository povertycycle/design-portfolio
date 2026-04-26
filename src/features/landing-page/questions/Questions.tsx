import { QUESTION_LIST } from "./constants";

export const Questions: React.FC = () => {
    return (
        <article
            id={`landing-questions`}
            className="w-screen h-dvh sm:h-screen shrink-0 flex text-white bg-black relative"
        >
            <div className="absolute w-full h-full z-0">
                <img
                    alt="pexels-zak-mogel-2158251013-35883712"
                    src="/design-portfolio/img/pexels-zak-mogel-2158251013-35883712.jpg"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full h-full flex relative z-1 bg-black/65">
                <div className="flex flex-col gap-10 items-center justify-center mx-auto w-full max-w-3xl">
                    {QUESTION_LIST.map(({ question, answer }, i) => (
                        <div
                            key={question}
                            className="flex flex-col px-5 pt-6 bg-white/5 backdrop-blur-sm rounded-xl"
                            style={{
                                marginLeft:
                                    i % 2 === 1 ? "auto" : `${i * 16}px`,
                                marginRight:
                                    i % 2 === 0 ? "auto" : `${i * 16}px`,
                                textAlign: i % 2 === 1 ? "end" : "start",
                            }}
                        >
                            <span
                                tabIndex={0}
                                className="peer text-lg sm:text-3xl cursor-pointer"
                            >
                                {question}
                            </span>
                            <div
                                className={`font-smooch peer-focus:max-h-71 mt-6 peer-focus:mb-5 transition-[max-height,margin] max-h-0 overflow-hidden text-gray-300 text-base sm:text-2xl tracking-wide font-medium`}
                            >
                                {answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};
