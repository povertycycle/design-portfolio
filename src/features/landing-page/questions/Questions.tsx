import { QUESTION_LIST } from "./constants";

export const Questions: React.FC = () => {
    return (
        <article
            id={`landing-questions`}
            className="w-screen h-dvh sm:h-screen shrink-0 flex text-white bg-black relative border-t-2 border-white/25"
        >
            <div className="absolute w-full h-full z-0">
                <img
                    alt="pexels-erkocphoto-32146234"
                    src="/design-portfolio/img/pexels-erkocphoto-32146234.jpg"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full h-full flex relative z-1 bg-black/65">
                <div className="flex flex-col gap-10 items-center justify-center mx-auto w-full max-w-3xl">
                    {QUESTION_LIST.map(({ question, answer }, i) => (
                        <div
                            key={question}
                            className="flex flex-col px-6 pt-6 group bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/15"
                            style={{
                                marginLeft:
                                    i % 2 === 1 ? "auto" : `${(i + 1) * 16}px`,
                                marginRight:
                                    i % 2 === 0 ? "auto" : `${(i + 1) * 16}px`,
                                textAlign: i % 2 === 1 ? "end" : "start",
                            }}
                        >
                            <span
                                tabIndex={0}
                                className="peer group/title text-3xl cursor-pointer flex items-center text-white/85 group-even:flex-row-reverse justify-between"
                            >
                                {question}{" "}
                                <i className="group-odd:group-focus/title:rotate-180 group-even:group-focus/title:-rotate-180 transition-transform ri-arrow-down-s-line" />
                            </span>
                            <div
                                className={`font-barlow peer-focus:max-h-71 mt-5 peer-focus:mb-5 transition-[max-height,margin] max-h-0 overflow-hidden text-white text-base sm:text-xl font-medium`}
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
