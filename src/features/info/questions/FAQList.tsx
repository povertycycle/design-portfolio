export const FAQList: React.FC = () => {
    return (
        <div className="flex flex-col h-full border-r border-white/75 p-8 w-full text-white-1">
            <div className="relative h-8">
                <input
                    className="faqs__input--search peer"
                    placeholder="Search a question"
                />
                <div className="absolute left-1 top-0 h-full aspect-square flex items-center justify-center">
                    <i className="ri-search-line text-white/60 peer-focus:text-white-1" />
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-12 h-0 overflow-auto sleek-scroll pr-2 grow">
                {DUMMY_QUESIONS.map(({ title, answer }) => (
                    <div key={title} className="flex flex-col gap-1">
                        <div
                            tabIndex={0}
                            className="peer cursor-pointer text-xl flex justify-between group"
                        >
                            <span>{title}</span>
                            <span className="group-hover:opacity-100 opacity-75 transition-opacity">
                                <i className="ri-add-line" />
                            </span>
                        </div>
                        <div className="w-full h-0.5 bg-white/65" />
                        <span className="max-h-0 overflow-hidden peer-focus:max-h-36 transition-[max-height] text-base font-barlow">
                            {answer}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DUMMY_QUESIONS = [
    {
        title: "Good question",
        answer: "Praesent a nisl feugiat, dapibus ex eu, porttitor urna. Nullam vel lacus id est efficitur faucibus.",
    },
    {
        title: "Tough question",
        answer: "Praesent sit amet massa nunc. Sed nec diam sed ligula mattis aliquet. Pellentesque gravida ac velit ut eleifend. Sed facilisis, magna varius pharetra malesuada, magna nulla eleifend dui, non auctor turpis ex et felis. ",
    },
    {
        title: "Interesting question",
        answer: "Duis vel gravida ligula. Aliquam erat volutpat. Vivamus finibus quam erat, vel varius elit molestie ut. Donec laoreet nisi quis lacinia vehicula. Nulla vehicula ligula non ipsum placerat fermentum.",
    },
    {
        title: "Lame question",
        answer: "Sed nisl lectus, hendrerit at ex laoreet, efficitur tristique urna.",
    },
];
