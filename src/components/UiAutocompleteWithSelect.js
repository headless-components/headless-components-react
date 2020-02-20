import React from "react";
import useAutocompleteSimple from "../hc-hooks/useAutocompleteSimple";
import useSelected from "../hc-hooks/useSelect";
import Data from "../sampleData/Data";

const AutocompleteWithSelect = () => {
  const { value, setValue, filter } = useAutocompleteSimple(Data);
  const { getSelectedElement } = useSelected({
    onSelect: element => {
      setValue(element.key);
      console.log("send value to API", element);
    }
  });

  return (
    <div>
       <h4>Accesible autocomplete with onSelect handle using two HC:
       <code>useAutocomplete</code> and <code>useSelected</code></h4>
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
                <li key={item} {...getSelectedElement(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteWithSelect;
