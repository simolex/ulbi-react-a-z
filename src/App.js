import React, { useState } from "react";
import ClassCounter from "./components/classCounter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
