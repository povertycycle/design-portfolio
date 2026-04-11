import { QUESTION_LIST } from "./constants";

export const Questions: React.FC = () => {
    return (
        <article
            id={`landing-questions`}
            className="w-screen h-dvh sm:h-screen shrink-0 flex text-white bg-dark-blue"
        >
            <div className="flex flex-col gap-10 items-center justify-center item mx-auto max-w-270 pl-6 pr-12">
                {QUESTION_LIST.map(({ question, answer }, i) => (
                    <div
                        key={question}
                        className="flex flex-col gap-3"
                        style={{
                            marginLeft: i % 2 === 1 ? "auto" : `${i * 16}px`,
                            marginRight: i % 2 === 0 ? "auto" : `${i * 16}px`,
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
                            className={`peer-focus:max-h-71 transition-[max-height] max-h-0 overflow-hidden text-gray-300 font-smooch text-base sm:text-2xl tracking-wide font-medium`}
                        >
                            {answer}
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
};
