import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleReset = () => {
    // TODO reset counter to 0 here
    queueRerenderWithNewCounterValue(0);
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={() => queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5)}>-5</button>
      <button onClick={() => queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1)}>-1</button>
      <button onClick={() => queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5)}>+5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
