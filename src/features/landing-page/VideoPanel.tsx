export const VideoPanel: React.FC = () => {
    return (
        <article className="w-full h-full shrink-0 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="w-full h-full absolute left-0 top-0 bg-black/35 flex flex-col items-center justify-center text-white">
                <h1 className="text-xl sm:text-9xl font-bold">WEBSITE NAME</h1>
                <h2 className="text-base italic sm:text-2xl mt-4 sm:mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
            </div>
            <video
                src="/video/landing-video.mp4"
                className="w-full h-full object-cover left-0 top-0 m-auto"
                muted
                loop
                controls={false}
                autoPlay={true}
            />
        </article>
    );
};
