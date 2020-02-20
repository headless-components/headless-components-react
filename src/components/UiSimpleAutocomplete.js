import React from "react"
import useAutocompleteSimple from "../hc-hooks/useAutocompleteSimple"

import Data from "../sampleData/Data"

const UiAutocompleteSimple = () => {
  const { value, setValue, filter, getSelectedValue } = useAutocompleteSimple(Data)

  return (
    <div>
        <h4>Simple autocomplete with <code>useAutocompleteSimple</code></h4>
      <div>
        <input
          value={value}
          type="text"
          onChange={event => setValue(event.target.value)}
        />
        {filter.length > 0 && (
          <ul>
            {filter.map(item => {
              return (
                <li key={item} onClick={e => getSelectedValue(item)}>
                  {item}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default UiAutocompleteSimple
