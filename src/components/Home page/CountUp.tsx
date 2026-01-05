import { useEffect, useRef, useState } from "react";

type CountUpProps = {
    end: number;
    duration?: number; 
    startCounting: boolean;
};

const CountUp = ({ end, duration = 1500, startCounting }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const startTime = useRef<number | null>(null);

    useEffect(() => {
        if (!startCounting) return;

        const animate = (timestamp: number) => {
            // set time at first run
            if (!startTime.current) startTime.current = timestamp;

            const progress = timestamp - startTime.current;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * end));

            if (percentage < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [startCounting, end, duration]);

    return <>{count}</>;
};

export default CountUp;
