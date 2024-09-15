import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // or Date if you're passing a Date object
}

interface TimeLeft {
  days?: number;
  
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevTimeLeft(timeLeft); // Store the previous value for animation
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [timeLeft, targetDate]);

  return (
    <div className="flex gap-4 text-center text-lg">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="relative">
          {/* Previous value sliding out */}
          <div
            className={`absolute inset-0 text-pastor-blue transition-transform duration-500 ease-in-out ${
              prevTimeLeft[interval as keyof TimeLeft] !== timeLeft[interval as keyof TimeLeft]
                ? "-translate-y-full opacity-0"
                : ""
            }`}
          >
            {prevTimeLeft[interval as keyof TimeLeft]}
          </div>

          {/* Current value sliding in */}
          <div
            className={`relative z-10 text-pastor-blue transition-transform duration-500 ease-in-out ${
              prevTimeLeft[interval as keyof TimeLeft] !== timeLeft[interval as keyof TimeLeft]
                ? " opacity-100"
                : ""
            }`}
          >
            {timeLeft[interval as keyof TimeLeft]}
          </div>
        </div>
      ))}
    </div>
  );
};

export { CountdownTimer };
