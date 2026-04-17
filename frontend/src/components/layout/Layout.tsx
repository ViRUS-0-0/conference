import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
            containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen flex flex-col relative font-sans selection:bg-primary selection:text-white">
            {/* Background Grids */}
            <div className="fixed inset-0 -z-10 grid-base" />
            <div className="fixed inset-0 -z-10 grid-spotlight transition-opacity duration-300" />
            
            <Navbar />
            <main className="flex-1 w-full relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
