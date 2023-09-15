import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <div>
      <h1>Time Spent on Page: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;
