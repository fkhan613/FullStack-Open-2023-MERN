import { useState } from "react";

const Button = ({onClick, name}) =>{
  return(
    <button onClick={onClick}>{name}</button>
  );
}

const Statistics = ({good, bad, neutral}) =>{
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    let copy = good;
    setGood(copy + 1);
  };

  const handleBadClick = () => {
    let copy = bad;
    setBad(copy + 1);
  };

  const handleNeutralClick = () => {
    let copy = neutral;
    setNeutral(copy + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} name="Good" />
      <Button onClick={handleBadClick} name="Bad" />
      <Button onClick={handleNeutralClick} name="Neutral" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
