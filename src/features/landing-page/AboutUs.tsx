export const AboutUs: React.FC = () => {
    return (
        <article
            id={`landing-about-us`}
            className="w-screen h-dvh sm:h-screen bg-black shrink-0 flex flex-col relative overflow-hidden border-t-2 border-white/25"
        >
            <div className="absolute w-full h-full flex justify-end items-end">
                <img
                    className="object-cover w-full"
                    alt="pexels-efe-ersoy-393937500-36701720"
                    src="/design-portfolio/img/pexels-efe-ersoy-393937500-36701720.jpg"
                />
            </div>
            <div className="flex w-full h-full relative items-center justify-center bg-black/65 z-1 p-24">
                <div className="w-full max-w-7xl grid grid-cols-[auto_300px] h-140 border-2 border-white/15 rounded-2xl overflow-hidden">
                    <div className="bg-white/2 backdrop-blur-sm p-8 text-white flex flex-col border-r-2 border-white/15">
                        <div className="flex flex-col text-white/75 font-medium tracking-wide text-xl font-smooch">
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
                                tempor risus eros eu ipsum.
                            </p>{" "}
                            <p className="mt-6">
                                Nullam quis gravida velit. Aenean nec volutpat
                                erat, et ornare dolor. Orci varius natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Sed varius mauris sed
                                augue suscipit cursus. Donec faucibus porta
                                faucibus. Praesent vestibulum mollis hendrerit.
                                Maecenas congue, magna in eleifend vestibulum,
                                metus lectus sollicitudin sem, in euismod felis
                                lorem in urna.
                            </p>
                        </div>
                        <div className="flex flex-col mt-auto">
                            <h1 className="text-3xl">Profile tagline</h1>
                            <h2 className="text-xl text-white/65 italic mt-1 font-smooch font-medium">
                                Another cool tagline
                            </h2>
                            <h3 className="text-white/65 mt-4 text-lg italic font-smooch">
                                <span>Physical address, </span>
                                <span>City, State, Country</span>
                            </h3>
                        </div>
                    </div>{" "}
                    <div className="h-full shrink-0 relative z-1 mb-20">
                        <img
                            className="object-cover h-full"
                            alt="pexels-raymond-petrik-1448389535-27829411"
                            src="/design-portfolio/img/pexels-raymond-petrik-1448389535-27829411.jpg"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};
