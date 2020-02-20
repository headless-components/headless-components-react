import React from "react"
import "./App.css"
import UiCounterRenderProps from './components/UiCounterRenderProps'
import UiCounterHooks from './components/UiCounterHooks'
import UiSimpleAutocomplete from './components/UiSimpleAutocomplete'
import UiAutocompleteWithSelect from './components/UiAutocompleteWithSelect'

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
