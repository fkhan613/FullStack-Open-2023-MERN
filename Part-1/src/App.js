import { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.name}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };
  return (
    <div>
      <Display counter={counter} />
      <Button name="+" onClick={increaseByOne} />
      <Button name="reset" onClick={setToZero} />
      <Button name="-" onClick={decreaseByOne} />
    </div>
  );
};

export default App;
