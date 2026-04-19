import React from "react";
import { FAQList } from "./FAQList";
import { Footer } from "./Footer";
import { Form } from "./Form";

export const Questions: React.FC = () => {
    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 flex flex-col items-center h-full">
            <div className="flex flex-col text-white items-center mt-12">
                <h1 className="text-4xl font-bold tracking-wide">Questions?</h1>
                <h2 className="text-2xl mt-4 font-smooch font-medium text-white/85">
                    Shoot us a message
                </h2>
            </div>
            <div className="w-full grid grid-cols-2 mt-8 gap-4 max-h-full grow">
                <FAQList />
                <Form />
            </div>
            <Footer />
        </div>
    );
};
