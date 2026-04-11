export const AboutUs: React.FC = () => {
    return (
        <article
            id={`landing-about-us`}
            className="w-screen h-dvh sm:h-screen bg-dark-blue shrink-0 flex flex-col"
        >
            <div className="flex max-sm:flex-col sm:mx-auto relative max-lg:items-center items-end my-auto pl-6 pr-12">
                <div className="bg-white rounded-lg max-sm:hidden w-50 h-70 lg:w-75 lg:h-105 opacity-65 translate-y-8 shrink-0" />
                <div className="bg-white rounded-lg max-sm:hidden w-85 h-50 lg:w-120 lg:h-75 opacity-65 absolute top-[10%] lg:-top-20 right-1/2" />
                <div className="sm:h-full flex flex-col justify-end text-white px-8 w-100">
                    <h1 className="text-lg sm:text-3xl whitespace-nowrap">
                        Profile tagline
                    </h1>
                    <h2 className="text-base sm:text-2xl italic mt-2 font-smooch whitespace-nowrap">
                        Another cool tagline
                    </h2>
                    <h3 className="text-gray-300 font-medium mt-6 text-lg italic font-smooch tracking-wide whitespace-nowrap">
                        <span>Physical address, </span>
                        <span>City, State, Country</span>
                    </h3>
                </div>
                <div className="h-full flex text-gray-300 max-h-[50vh] max-w-xl max-lg:overflow-y-scroll font-medium ml-auto my-auto sm:text-end leading-8 tracking-wide text-base md:text-lg lg:text-2xl font-smooch">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur euismod venenatis elit vitae maximus.
                        Curabitur malesuada urna viverra, tempor mauris eu,
                        venenatis purus. Pellentesque porttitor rhoncus mauris,
                        suscipit facilisis ligula accumsan sed. Nullam at neque
                        diam. Suspendisse eu elit sed elit cursus egestas. Cras
                        eleifend, orci sit amet ultricies varius, enim lectus
                        congue mauris, sodales tempor risus eros eu ipsum.
                        Aenean nulla dui, varius ac porttitor sit amet,
                        tincidunt eu diam. Nam dignissim facilisis ante in
                        faucibus. Morbi maximus rutrum nunc. Nullam viverra
                        gravida vehicula. Curabitur commodo elit sed maximus
                        volutpat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </p>
                </div>
            </div>
        </article>
    );
};
