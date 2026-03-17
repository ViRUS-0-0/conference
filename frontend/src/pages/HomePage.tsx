import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Tracks from "../components/sections/Tracks";
import Committee from "../components/sections/Committee";
import Partners from "../components/sections/Partners";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center w-full">
            <Hero />
            <About />
            <Tracks />
            <Committee />
            <Partners />
        </div>
    );
}
