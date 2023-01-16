//create the header compnent
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};


//create the content component
const Content = (props) => {

  let parts = Object.values(props)
  parts = parts[0];

  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
    
};


const Total = (props) => {

  return (
    <>
      <p>The total number of excercises is: {props.total}</p>
    </>
  );
};

const App = () => {

  let total = 0;

  const course = {

    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  course.parts.forEach((element)=>{
    total+=element.exercises
  })

  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total total={total}/>
    </div>
  );
};

export default App;
