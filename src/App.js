import React from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Headless components with <code>Render Props</code>.
        </p>

        <div>
          <p>
            Headless components with <code>Custom Hooks</code>.
          </p>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
