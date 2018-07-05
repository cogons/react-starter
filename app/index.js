import React from "react";
import ReactDOM from "react-dom";
import Sub from '@/components/sub'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Sub/>
      <h2>This is react starter!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
