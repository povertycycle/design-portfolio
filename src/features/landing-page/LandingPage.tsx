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
            {[0, 1, 2].map((num) => (
                <Feature num={num} key={num} />
            ))}
            <AboutUs />
            <Questions />
        </main>
    );
};

export default LandingPage;
