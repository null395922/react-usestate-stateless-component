import React, { useState } from "react";

import ReactDOM from "react-dom";

import "./styles.css";

function Bulbs() {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);
  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);
  const lightSwitch = () => setOn((on) => !on);
  const addBulbs = () => setCount((count) => count + 1);
  console.log(count);
  const bulb = <div className={on ? "bulb-on" : "bulb-off"} />;
  const bulbs = Array(count).fill(bulb);
  return (
    <>
      <div className="bulbs">{bulbs}</div>
      <button onClick={lightOn}>On</button>
      <button onClick={lightOff}>Off</button>
      <button onClick={lightSwitch}>On/off</button>
      <button onClick={addBulbs}>Add bulb</button>
    </>
  );
}

function DelayedCount() {
  const [count, setCount] = useState(0);
  const handleClickAsync = () => {
    setTimeout(function delay() {
      //setCount(count + 1);
      setCount((count) => count + 1);
    }, 3000);
  };
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Bulbs />
      <DelayedCount />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
