import React from "react";
import "./App.css";
import Input from "./Input";
import codeExample from "./react-hooks-code.png";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-input-container">
          <Input />
        </div>
        <div className="App-code-container">
          <img
            className="App-code-example-img"
            src={codeExample}
            alt={"code-example"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
