import Hero from "../components/sections/Hero";
import HorizontalTimeline from "../components/sections/HorizontalTimeline";
import About from "../components/sections/About";
import EsteemedSpeakers from "../components/sections/EsteemedSpeakers";
import Partners from "../components/sections/Partners";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center w-full">
            <Hero />
            <HorizontalTimeline />
            <About />
            <EsteemedSpeakers />
            <Partners />
        </div>
    );
}
