import React from 'react';

import useToggle from '../hooks/useToggle.js';

function Switch({ name }) {
  let { toggled, setToggle } = useToggle();

  return (
    <div className={toggled ? "switch-container active" : "switch-container"}>
      <label htmlFor={name} className="switch-label">
        <input
          className="switch-checkbox"
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={toggled}
          onChange={() => setToggle(!toggled)}
        />
      </label>
    </div>
  );
}

export default Switch;