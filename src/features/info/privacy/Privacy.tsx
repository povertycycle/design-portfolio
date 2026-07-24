import { ScrollNavs } from "@/src/libraries/components/navigation/ScrollNavs";
import { PRIVACY_SECTIONS } from "./Policies";

const CONTAINER_ID = "privacy-policy-sidebar";

export const PrivacyPolicy: React.FC = () => {
    return (
        <div
            id={CONTAINER_ID}
            className="w-full flex flex-col py-40 h-full overflow-y-auto hidden-scroll"
        >
            <ScrollNavs
                contentIds={Array.from(
                    { length: 8 },
                    (_, i) => `policy-section-${i}`
                )}
                containerId={CONTAINER_ID}
            >
                {PRIVACY_SECTIONS.map(({ text, anchorId }, i) => (
                    <div
                        key={anchorId}
                        className="flex flex-row-reverse items-center gap-4 -mr-1.25 transition-[transform]"
                    >
                        <div className="w-3 h-3 rounded-full bg-gray-300" />
                        <span
                            onClick={() =>
                                document
                                    .getElementById(anchorId)
                                    ?.scrollIntoView()
                            }
                            className="cursor-pointer hover:opacity-80 text-white-1 transition-opacity opacity-60 whitespace-nowrap"
                        >
                            {text}
                        </span>
                    </div>
                ))}
            </ScrollNavs>
            <div className="max-w-3xl m-auto px-8 text-white-1 shrink-0 w-full">
                <h1 className="text-3xl tracking-wide font-bold">
                    Privacy Policy
                </h1>
                <h2 className="mt-6 font-barlow text-xl opacity-75">
                    In faucibus, urna non dictum pulvinar, diam ante ornare
                    augue, sit amet egestas eros tellus at nisi. Nunc
                    consectetur maximus ante, ac gravida neque vulputate sit
                    amet. Aliquam aliquam in nunc sed accumsan. Cras in
                    hendrerit nibh. Mauris ultricies dignissim orci eu bibendum.
                </h2>
                <h3 className="flex gap-4 w-full mt-16">
                    <div className="w-28 h-28 flex items-center justify-center">
                        <i className="ri-shield-user-line text-5xl my-auto" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl">Maecenas iaculis</span>
                        <span className="mt-auto opacity-95 font-medium tracking-wide font-barlow text-lg">
                            Nec luctus urna sodales vel?
                        </span>
                        <span className="mt-2 border-b border-white/85 cursor-pointer font-barlow opacity-90 font-medium text-lg">
                            Etiam non orci id eros ullamcorper vestibulum at non
                            velit{" "}
                            <i className="ri-external-link-line text-xl" />
                        </span>
                    </div>
                </h3>
                <div className="my-16 w-full h-px bg-white/50" />
                <div className="flex flex-col gap-4">
                    <span className="text-lg">Updated at December 9, 1990</span>
                    <span className="border-b border-white/85 cursor-pointer font-barlow opacity-90 font-medium text-lg w-fit">
                        Praesent quis consectetur massa
                    </span>
                    <span className="border-b border-white/85 cursor-pointer font-barlow opacity-90 font-medium text-lg w-fit">
                        Cras a ultricies eros
                    </span>
                </div>
            </div>
            <div className="mt-16 w-full bg-white/50 h-px shrink-0" />
            {PRIVACY_SECTIONS.map(({ text, anchorId, child }, i) => (
                <div id={anchorId} className="flex flex-col" key={text}>
                    <div className="max-w-3xl my-16 mx-auto px-8 text-white-1 shrink-0 flex flex-col gap-8 w-full">
                        <span className="text-xl">{text}</span>
                        {child}
                    </div>
                    <div className="w-full bg-white/50 h-px shrink-0" />
                </div>
            ))}
            <div className="flex flex-col">
                <div className="max-w-3xl my-16 mx-auto px-8 text-white-1 shrink-0 flex flex-col gap-8 w-full">
                    <span className="text-xl">
                        Maecenas hendrerit odio et tincidunt fermentum
                    </span>
                    <div className="flex gap-8 mt-8">
                        <i className="ri-quill-pen-line text-3xl" />
                        <div className="flex flex-col gap-4">
                            <span>
                                Sed porttitor elementum neque, eu dignissim
                                sapien feugiat vitae.{" "}
                            </span>
                            <span className="font-barlow opacity-85 font-medium text-lg">
                                Mauris non facilisis quam, vel eleifend tellus.
                                Duis volutpat neque id quam tempus, a pretium ex
                                convallis. Sed ornare odio in condimentum
                                viverra. Proin placerat dui massa, ut feugiat
                                augue rhoncus ut. Quisque blandit dui vitae
                                sollicitudin convallis. Nullam in mi at ex
                                dignissim scelerisque. Curabitur ac ultrices
                                velit, eu viverra ipsum. Integer neque quam,
                                blandit eget enim eget, bibendum vestibulum
                                arcu. Morbi quis metus sed nibh rhoncus tempus.
                                Quisque sit amet nibh sit amet tortor pulvinar
                                pulvinar.
                            </span>
                        </div>
                    </div>
                    <div className="w-full bg-white/50 h-px shrink-0" />
                    <div className="flex gap-8">
                        <i className="ri-tv-2-line text-3xl" />
                        <div className="flex flex-col gap-4">
                            <span>Aenean rutrum venenatis laoreet</span>
                            <span className="font-barlow opacity-85 font-medium text-lg">
                                Nullam diam eros, consequat vel libero sit amet,
                                venenatis egestas ligula. Ut dapibus volutpat
                                diam dapibus tincidunt. Ut non porta nunc, et
                                porta massa. Aliquam eget aliquam mi, in
                                ullamcorper augue. Quisque et tellus orci. Donec
                                sit amet nunc sem.
                            </span>
                        </div>
                    </div>
                    <div className="w-full bg-white/50 h-px shrink-0" />
                    <div className="flex gap-8">
                        <i className="ri-trophy-line text-3xl" />
                        <div className="flex flex-col gap-4">
                            <span>Aliquam vitae viverra orci</span>
                            <span className="font-barlow opacity-85 font-medium text-lg">
                                Donec non convallis neque, tincidunt cursus
                                lacus. Duis vel nisi pharetra, rhoncus neque eu,
                                sodales nisi. Sed consectetur id erat sed
                                imperdiet.
                                <ol className="list-disc px-6">
                                    <li>
                                        In posuere ligula sed pulvinar suscipit.
                                    </li>
                                    <li>
                                        In vel orci tempor, dapibus massa id,
                                        sollicitudin lectus.{" "}
                                    </li>
                                    <li>Sed rhoncus a velit at pharetra. </li>
                                    <li>
                                        Fusce fermentum feugiat nisi blandit
                                        malesuada.{" "}
                                    </li>
                                </ol>{" "}
                                Praesent ultrices pretium mollis. Proin cursus,
                                neque tempus auctor porttitor, ex diam finibus
                                sem, nec rhoncus libero dui sed diam. Vestibulum
                                pharetra neque a volutpat feugiat. Praesent non
                                tincidunt ex, non imperdiet arcu.
                            </span>
                        </div>
                    </div>
                    <div className="w-full bg-white/50 h-px shrink-0" />
                    <div className="flex gap-8">
                        <i className="ri-zzz-line text-3xl" />
                        <div className="flex flex-col gap-4">
                            <span>
                                Vestibulum pretium gravida neque, vel maximus
                                metus efficitur et
                            </span>
                            <span className="font-barlow opacity-85 font-medium text-lg">
                                Proin id nulla vitae nisi pulvinar scelerisque
                                aliquam sed arcu. Quisque in volutpat lectus.
                                Donec non felis sem.
                            </span>
                        </div>
                    </div>
                    <div className="w-full bg-white/50 h-px shrink-0" />
                    <div className="flex gap-8">
                        <i className="ri-pushpin-line text-3xl" />
                        <div className="flex flex-col gap-4">
                            <span>
                                Praesent quis gravida est, at rutrum nulla.
                            </span>
                            <span className="font-barlow opacity-85 font-medium text-lg">
                                Duis sit amet augue sit amet purus auctor
                                interdum. Vestibulum eleifend nisl sed est
                                luctus porta. Aenean in purus eget felis feugiat
                                interdum ut non nunc. Cras eros velit, volutpat
                                in erat nec, commodo hendrerit sapien. Curabitur
                                varius neque condimentum odio posuere, nec
                                rhoncus justo pretium. Aenean in enim molestie,
                                semper purus sit amet, laoreet sem. Proin elit
                                quam, facilisis nec ipsum eu, aliquam placerat
                                felis.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
