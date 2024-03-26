import * as React from "react";
import { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid/CardGrid.tsx";

// interface props {
//   toggle: Boolean;
//   handleToggle: Function;
// }

function App() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div className={`App ${toggle ? "light-mode" : ""}`}>
      <CardGrid toggle={toggle} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
