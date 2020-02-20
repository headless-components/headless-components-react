import React from "react"
import CounterRenderProps from "../hc-render-props/CounterRenderProps"

const UiCounterRenderProps = () => {
  return (
    <div>
      <CounterRenderProps initialCount={5}>
        {({ count, increment, decrement }) => {
          return (
            <div>
              <h4>Counter component with Render Props</h4>
              <button onClick={() => decrement(1, -5)}>-</button>
              <button>{count}</button>
              <button onClick={() => increment(1, 10)}>+</button>
            </div>
          )
        }}
      </CounterRenderProps>
    </div>
  )
}

export default UiCounterRenderProps
