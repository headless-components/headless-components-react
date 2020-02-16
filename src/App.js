import React from "react";
import "./App.css";
import Pagination from "./components/pagination";

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
          <Pagination />
        </div>
      </header>
    </div>
  );
}

export default App;
