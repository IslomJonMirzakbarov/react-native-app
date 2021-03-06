import React, { useEffect, useRef, useState } from "react";

const useCountDown = (idx: number, initialCount: number = -1) => {
  const [countDown, setCountDown] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number>();

  useEffect(() => {
    if (idx === -1) return;

    if (isRunning && !intervalRef.current) {
      intervalRef.current = window.setInterval(
        () =>
          setCountDown((count) => {
            return count - 1;
          }),
        100
      );
    }

    return () => cleanup();
  }, [idx, isRunning]);

  useEffect(() => {
    setCountDown(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (countDown === 0) {
      cleanup();
    }
  }, [countDown]);

  const cleanup = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return {
    countDown,
    isRunning,
    stop: cleanup,
    start: (count?: number) => {
      setCountDown(count ?? initialCount);
      setIsRunning(true);
    },
  };
};

export default useCountDown;
