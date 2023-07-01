import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalCount, setIntervalCount] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleInterval = () => {
    if (isRunning) {
      setIntervalCount((prevIntervalCount) => prevIntervalCount + 1);
    }
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleInterval} disabled={!isRunning}>
        Interval
      </button>
      <p>Interval Count: {intervalCount}</p>
    </div>
  );
};

export default Stopwatch;