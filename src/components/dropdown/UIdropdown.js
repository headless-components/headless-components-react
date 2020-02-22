import React from 'react';

import useToggle from "../../hc-hooks/useToggle/useToggle";
import "./dropdown.css";

function UiDropdown({ name }) {
  let { toggled, setToggle } = useToggle();
  console.log(toggled)

  return (
    <div className="dropdown-container">
      <div className={toggled ? "dropdown active" : "dropdown"}>
        <input
          className="switch-checkbox"
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={toggled}
          onChange={(e) => setToggle(!toggled)}
        />
        <label htmlFor={name} className="dropdown-item">
          <span>Cónocenos</span>
          <span className="dropdown-arrow">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z" />
            </svg>
          </span>
        </label>
        {toggled && (
          <ul className="dropdown-content">
            <li>
              <a href="#visitanos">Visítanos</a>
            </li>
            <li>
              <a href="#cultura">Cultura</a>
            </li>
            <li>
              <a href="#oficinas">Oficinas</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default UiDropdown;