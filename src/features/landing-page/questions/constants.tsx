import { Hyperlink } from "@/src/libraries/link/Hyperlink";
import { INSTRAGRAM_URL, SUPPORT_MAIL } from "../constants";

export const QUESTION_LIST = [
    {
        question: "Meaningful question",
        answer: (
            <span>
                Lorem ipsum dolor{" "}
                <span className="font-bold text-jalin-yellow">sit amet</span>,
                consectetur adipiscing elit.{" "}
                <span className="font-bold text-jalin-yellow">
                    Proin convallis
                </span>{" "}
                eros a volutpat viverra. Curabitur et{" "}
                <span className="font-bold text-jalin-yellow">iaculis</span>,
                mi, at rhoncus urna.
            </span>
        ),
    },
    {
        question: "Recurring question",
        answer: (
            <span>
                Curabitur dignissim tincidunt nisl. Phasellus{" "}
                <span className="font-bold text-jalin-yellow">malesuada</span>{" "}
                mi non pulvinar aliquet.{" "}
                <span className="font-bold text-jalin-yellow">Quisque</span> et
                lobortis sapien.
            </span>
        ),
    },
    {
        question: "Interesting question",
        answer: (
            <span>
                Sed faucibus erat sed augue aliquet semper. Aenean{" "}
                <span className="font-bold text-jalin-yellow">vulputate</span>,
                tellus ut accumsan euismod. Integer facilisis nunc auctor nisl
                fermentum, ac porttitor nibh facilisis. Vivamus luctus, mauris
                ut aliquam iaculis,{" "}
                <span className="font-bold text-jalin-yellow">
                    {" "}
                    magna odio pellentesque orci
                </span>
                , congue euismod lorem quam sagittis tortor. Aenean porttitor
                ornare aliquam.
            </span>
        ),
    },
    {
        question: "Rare question",
        answer: (
            <span>
                Donec sagittis placerat eros,{" "}
                <span className="font-bold text-jalin-yellow">
                    eu vulputate
                </span>
                ,{" "}
                <span className="font-bold text-jalin-yellow">
                    sapien dictum
                </span>{" "}
                at{" "}
                <span className="font-bold text-jalin-yellow">Suspendisse</span>{" "}
                vestibulum{" "}
                <span className="font-bold text-jalin-yellow">auctor</span>{" "}
                varius. Sed ut sodales arcu. Nulla quis nunc in mauris tincidunt
                pulvinar. Fusce erat turpis, pulvinar at elit a, eleifend
                ultricies quam. Aenean eget molestie nunc. Aliquam at sodales
                augue, placerat sagittis ligula.
            </span>
        ),
    },
    {
        question: "Specific question",
        answer: (
            <span>
                Cras quis varius lorem, sed pellentesque risus. Cras blandit ex
                odio Instagram in{" "}
                <span className="font-bold text-jalin-yellow">
                    <Hyperlink url={INSTRAGRAM_URL}>
                        @william.sentosatio
                    </Hyperlink>
                </span>
                , lacus congue sagittis email in{" "}
                <span className="font-bold text-jalin-yellow">
                    <Hyperlink url={`mailto:${SUPPORT_MAIL}`}>
                        {SUPPORT_MAIL}
                    </Hyperlink>
                </span>{" "}
                sem at varius blandit.
            </span>
        ),
    },
    // List of FAQs constants. Add new stuffs here...
];
