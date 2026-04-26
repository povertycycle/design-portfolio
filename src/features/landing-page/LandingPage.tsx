// import { AboutUs } from './components/about-us/AboutUs';
// import { FAQs } from './components/faqs/FAQs';
// import { Feature } from './components/feature/Feature';
// import { Navigation } from './components/navigation/Navigation';
// import { VideoPanel } from './components/VideoPanel';

import { AboutUs } from "./AboutUs";
import { LANDING_CONTAINER_ID } from "./constants";
import { Feature } from "./Feature";
import { Navigation } from "./navigation/Navigation";
import { Questions } from "./questions/Questions";
import { VideoPanel } from "./VideoPanel";

const LandingPage: React.FC = () => {
    return (
        <main
            id={LANDING_CONTAINER_ID}
            className="w-screen h-dvh sm:h-screen overflow-y-auto relative flex flex-col hidden-scroll bg-black font-fjalla"
        >
            <Navigation />
            <VideoPanel />
            {[
                {
                    num: 0,
                    image: "/design-portfolio/img/pexels-olgalioncat-7244431.jpg",
                },
                {
                    num: 1,
                    image: "/design-portfolio/img/pexels-thienleduyphoto-36820181.jpg",
                },
                {
                    num: 2,
                    image: "/design-portfolio/img/pexels-thienleduyphoto-36818882.jpg",
                },
            ].map(({ num, image }) => (
                <Feature num={num} key={num} image={image} />
            ))}
            <AboutUs />
            <Questions />
        </main>
    );
};

export default LandingPage;
