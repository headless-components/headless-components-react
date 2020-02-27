import React from "react";
import "./App.css";

import { 
  UiCounterHooks, 
  UiSimpleAutocomplete, 
  UiAutocompleteWithSelect, 
  Uidropdown, 
  Uipagination, 
  Uislider, 
  Uiswitch, 
  Uitable, 
  Uitoggle, 
  UiautoComplete, 
  UiCounterRenderProps,
  UiTabs } from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Headless components</h1>
      </header>
        <div>
          <h2>
            HC with <code>Custom Hooks</code>.
          </h2>
          <UiCounterHooks/>
          <UiSimpleAutocomplete />
          <UiAutocompleteWithSelect />
          <UiautoComplete />
          <h4>Simple dropdown, switch and toogle using <code>useToggle</code></h4>
          <Uidropdown name="dropdown" />
          <Uiswitch name="switch" />
          <Uitoggle name="checkbox" / >
          <Uipagination  totalItems={150} itemsPerPage={10} window={4} initialPage={1} />
          <Uislider />
          <Uitable />
          <UiTabs /> 
        </div>
        <div>
          <h2>
            HC with <code>Render Props</code>.
          </h2>
          <UiCounterRenderProps />
        </div>
    </div>
  )
}

export default App
