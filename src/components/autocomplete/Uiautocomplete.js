import React from "react";
import useAutocomplete from "../../hc-hooks/useAutocomplete";

import AutocompleteData from "../../sampleData/AutocompleteData";

function Autocomplete() {
  const { value, onInput, onSelect, filter } = useAutocomplete(AutocompleteData);

  return (
    <div>
      <h4>Autocomplete using <code>useAutocomplete</code></h4>
      <div>
        <input
          value={value}
          type="text"
          onChange={event => onInput(event.target.value)}
        />
        {filter.length > 0 && (
          <ul>
            {filter.map(item => {
              return (
                <li onClick={() => onSelect(item)} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Autocomplete;
