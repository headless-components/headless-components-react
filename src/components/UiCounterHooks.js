import React from "react"
import useCounter from "../hc-hooks/useCounter"

const UiCounterHooks = () => {
  const { count, increment, decrement } = useCounter(1)

  return (
    <div>
      <h4>Counter component with Custom Hooks</h4>
      <p>Page number: {count}</p>
      <button onClick={() => decrement(1, 1)}>back page</button>
      <button onClick={() => increment(1, 5)}>next page</button>
    </div>
  )
}

export default UiCounterHooks
