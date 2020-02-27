import React from "react"
import useCounter from "../../hc-hooks/useCounter/useCounter";

const UiCounterHooks = () => {
  const { count, increment, decrement } = useCounter(1)

  return (
    <div>
      <h4>Counter component with Custom Hooks with limits from (-5, infinite) </h4>
      <p>Page number: {count}</p>
      <button onClick={() => decrement(1, 1)}>back page</button>
      <button onClick={() => increment(1)}>next page</button>
    </div>
  )
}

export default UiCounterHooks
