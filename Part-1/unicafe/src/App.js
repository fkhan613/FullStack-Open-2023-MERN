import { useState } from "react";

const Button = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};

const Statistics = ({ good, bad, neutral, all, positive, average }) => {

  if(all === 0){

    return (
      <div>
        <h2>Statistics</h2>
        No feedback given
      </div>
    );

  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>All: {all}</p>
      <p>Average: {isNaN(average) ? 0 : average}</p>
      <p>Positive: {isNaN(positive) ? 0 : positive}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state

  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
    all: 0,
  });

  const handleGoodClick = () => {
    let copy = { ...feedback, good: feedback.good + 1, all: feedback.all + 1 };
    setFeedback(copy);
  };

  const handleBadClick = () => {
    let copy = { ...feedback, bad: feedback.bad + 1, all: feedback.all + 1 };
    setFeedback(copy);
  };

  const handleNeutralClick = () => {
    let copy = {
      ...feedback,
      neutral: feedback.neutral + 1,
      all: feedback.all + 1,
    };
    setFeedback(copy);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} name="Good" />
      <Button onClick={handleBadClick} name="Bad" />
      <Button onClick={handleNeutralClick} name="Neutral" />
      <Statistics
        good={feedback.good}
        bad={feedback.bad}
        neutral={feedback.neutral}
        all={feedback.all}
        average={(feedback.good+feedback.bad+feedback.neutral)/3}
        positive={parseInt((feedback.good/feedback.all)*100)}
      />
    </div>
  );
};

export default App;
