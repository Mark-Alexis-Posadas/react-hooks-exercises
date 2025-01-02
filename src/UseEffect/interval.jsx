import React, { useEffect, useState } from "react";

export const IntervalOne = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time >= 10) return;

    const t = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, [time]);

  return (
    <h1
      className={`${time >= 10 ? "text-gray-500" : "text-green-500"} text-4xl`}
    >
      {time >= 10 ? `Happy new year` : time}
    </h1>
  );
};

export const IntervalTwo = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time < 1) return;

    const t = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, [time]);

  return (
    <h1 className={`${time < 1 ? "text-gray-500" : "text-green-500"} text-4xl`}>
      {time < 1 ? `Happy new year` : time}
    </h1>
  );
};
