import { CountdownCircleTimer } from "react-countdown-circle-timer";

import React from "react";

const Timer = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-3xl text-center">Website Launch In T-minus</h1>
      <CountdownCircleTimer
        isPlaying
        duration={172800}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
