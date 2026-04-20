export const AboutUs: React.FC = () => {
    return (
        <article
            id={`landing-about-us`}
            className="w-screen h-dvh sm:h-screen bg-black shrink-0 flex flex-col relative overflow-hidden"
        >
            <div className="absolute w-full h-full flex justify-end items-end">
                <img
                    className="object-cover w-full"
                    alt="pexels-efe-ersoy-393937500-36701720"
                    src="/design-portfolio/img/stocks/pexels-efe-ersoy-393937500-36701720.jpg"
                />
            </div>
            <div className="flex w-full h-full relative items-center justify-center bg-black/65 z-1 p-24">
                <div className="w-full max-w-7xl grid grid-cols-[300px_auto] gap-8 h-140">
                    <div className="h-full shrink-0 relative z-1 mb-20">
                        <img
                            className="object-cover rounded-lg h-full"
                            alt="pexels-raymond-petrik-1448389535-27829411"
                            src="/design-portfolio/img/stocks/pexels-raymond-petrik-1448389535-27829411.jpg"
                        />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white flex flex-col">
                        <div className="flex text-gray-200 font-medium text-end leading-8 tracking-wide text-2xl font-smooch">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur euismod venenatis
                                elit vitae maximus. Curabitur malesuada urna
                                viverra, tempor mauris eu, venenatis purus.
                                Pellentesque porttitor rhoncus mauris, suscipit
                                facilisis ligula accumsan sed. Nullam at neque
                                diam. Suspendisse eu elit sed elit cursus
                                egestas. Cras eleifend, orci sit amet ultricies
                                varius, enim lectus congue mauris, sodales
                                tempor risus eros eu ipsum. Aenean nulla dui,
                                varius ac porttitor sit amet, tincidunt eu diam.
                                Nam dignissim facilisis ante in faucibus. Morbi
                                maximus rutrum nunc. Nullam viverra gravida
                                vehicula. Curabitur commodo elit sed maximus
                                volutpat. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="flex flex-col mt-auto">
                            <h1 className="text-3xl">Profile tagline</h1>
                            <h2 className="text-xl italic mt-1 tracking-wide font-smooch">
                                Another cool tagline
                            </h2>
                            <h3 className="text-gray-300 font-medium mt-4 text-lg italic mt-2 font-smooch tracking-wide">
                                <span>Physical address, </span>
                                <span>City, State, Country</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};
