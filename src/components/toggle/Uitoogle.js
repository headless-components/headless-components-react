import React from 'react';

import useToggle from "../../hc-hooks/useToggle";

function Toggle({ name }) {
  let { toggled, setToggle } = useToggle();

  return (
    <div className="checkbox">
      <label htmlFor={name} onChange={() => setToggle(!toggled)}>
        Toogle
        <input type="checkbox" id={name} name={name} defaultChecked={toggled} />
      </label>
    </div>
  );
}

export default Toggle;

