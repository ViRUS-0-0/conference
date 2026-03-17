import { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                newTimeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            setTimeLeft(newTimeLeft);
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const addLeadingZero = (value: number) => {
        return value < 10 ? `0${value}` : value.toString();
    };

    return (
        <div className="flex justify-center items-center space-x-2 md:space-x-6 my-10">
            <TimeUnit value={addLeadingZero(timeLeft.days)} label="DAYS" />
            <span className="text-primary font-bold text-3xl md:text-5xl mt-[-30px] md:mt-[-40px]">
                :
            </span>
            <TimeUnit value={addLeadingZero(timeLeft.hours)} label="HOURS" />
            <span className="text-primary font-bold text-3xl md:text-5xl mt-[-30px] md:mt-[-40px]">
                :
            </span>
            <TimeUnit value={addLeadingZero(timeLeft.minutes)} label="MINUTES" />
            <span className="text-primary font-bold text-3xl md:text-5xl mt-[-30px] md:mt-[-40px]">
                :
            </span>
            <TimeUnit value={addLeadingZero(timeLeft.seconds)} label="SECONDS" />
        </div>
    );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="glass w-20 h-24 md:w-32 md:h-36 flex items-center justify-center rounded-xl mb-4 shadow-sm border border-slate-200 bg-white/50">
                <span className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">
                    {value}
                </span>
            </div>
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-slate-500 uppercase">
                {label}
            </span>
        </div>
    );
}
