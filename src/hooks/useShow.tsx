import React, { useState, useEffect } from "react";

type useShowType = (
  booleanValue?: boolean,
  time?: number
) => [state: boolean, toggleValue: () => void];

/**
 *
 *
 * @param {boolean} [booleanValue=false]
 * @param {number} [time=1000]
 * @function toggleValue
 * @return {*}
 */
let useShow: useShowType = (booleanValue = false, time = 1000) => {
  let [state, setState] = useState(booleanValue);

  /**
   * Code blocks are great for examples
   *
   * ```typescript
   * // run typedoc --help for a list of supported languages
   * const instance = new MyClass();
   * ```
   */
  let toggleValue = () => {
    setState((oldValue) => !oldValue);
  };

  useEffect(() => {
    setTimeout(() => {
      setState((oldValue) => !oldValue);
    }, time);
  }, []);

  return [state, toggleValue];
};

export default useShow;
