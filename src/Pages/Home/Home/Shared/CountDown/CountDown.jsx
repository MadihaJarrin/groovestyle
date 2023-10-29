import { useEffect, useState } from "react";



const CountDown = () => {
    const [days, setDays] = useState(10);
    const [hours, setHours] = useState(5);
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(45);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the countdown values here
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            // Countdown has reached zero, you can handle this case
                            clearInterval(interval);
                        }
                    }
                }
            }
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

    return (

        <div className="flex justify-center ">
            <div className="bg-yellow-400 p-10 ">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": days }}>{days}</span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": hours }}>{hours}</span>                    </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": minutes }}>{minutes}</span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": seconds }}>{seconds}</span>
                        </span>
                        sec
                    </div>
                </div>

            </div>

        </div>


    );
};

export default CountDown;