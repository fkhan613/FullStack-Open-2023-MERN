const Greet = (props) => {
  return (
    <div>
      <h1>Greetings {props.name}!</h1>
      <p>It is very nice to meet you. I see your are {props.age} years old!</p>
    </div>
  );
};

const App = () => {
  const name = "Farhan";
  const age = 69;

  return (
    <div>
      <h1>Greetings</h1>
      <Greet name="Maya" age={26 + 10} />
      <Greet name={name} age={age} />
    </div>
  );
};

export default App;
