import React from "react";
import { FAQList } from "./FAQList";
import { Footer } from "./Footer";
import { Form } from "./Form";

export const Questions: React.FC = () => {
    return (
        <div className="w-full h-full relative flex">
            <img
                className="w-full h-full object-cover left-0 top-0 absolute"
                src="/design-portfolio/img/pexels-wal_-172619-2156618639-36077711.jpg"
                alt="pexels-gabrielpuyen-5805611"
            />
            <div className="flex w-full h-full relative bg-black/75">
                <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 flex flex-col items-center h-full relative">
                    <div className="flex flex-col text-white items-center mt-12">
                        <h1 className="text-4xl font-bold tracking-wide">
                            Questions?
                        </h1>
                        <h2 className="text-xl mt-2 font-barlow text-white/85">
                            Shoot us a message
                        </h2>
                    </div>
                    <div className="w-full grid grid-cols-2 mt-8 gap-4 max-h-full grow">
                        <FAQList />
                        <Form />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
