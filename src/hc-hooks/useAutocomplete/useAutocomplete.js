import { useState } from "react";

function useAutocomplete(data) {
  const [value, setValue] = useState("");
  const [filtering, setFiltering] = useState(false);

  const onSelect = value => {
    setValue(value);
    setFiltering(false);
  };

  const onInput = value => {
    setValue(value);
    setFiltering(true);
  };

  function filterValue() {
    return data.filter(item => value !== "" && item.indexOf(value) >= 0);
  }

  return { value, onInput, onSelect, filter: filtering ? filterValue() : [] };
}

export default useAutocomplete;
