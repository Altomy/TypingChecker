/** useTimer.tsx */

// ========== Imports ========== //
import React, { useState, useEffect } from "react";

type useTimeType = (
  internalTime: number,
  onFinish: () => void
) => [time: number, stopTimer: () => void, startTimer: () => void];

/** MainFunction */
let useTimer: useTimeType = (internalTime, onFinish) => {
  /** @kind: Props */
  let [time, setTime] = useState<number>(internalTime);

  let intervalTimer: number;

  let stopTimer = () => {
    clearInterval(intervalTimer);
  };

  let startTime = React.useCallback(() => {
    intervalTimer = setInterval(() => {
      setTime((oldTime) => {
        if (oldTime === 0) {
          onFinish();
          stopTimer();
          return oldTime;
        }
        return oldTime - 1;
      });
    }, 1000);
  }, []);

  /** @kind: Hooks */
  useEffect(() => {
    return () => {
      if (internalTime) {
        clearInterval(intervalTimer);
      }
    };
  }, []);

  // ==== RETURN METHOD ==== //

  return [time, stopTimer, startTime];
};

export default useTimer;
