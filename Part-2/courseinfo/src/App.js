import Content from "./components/Content";

const App = () => {
  const course = {
    id: 100,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Mapping baby",
        exercises: 4,
        id: 4,
      },
      {
        name: "Modules baby",
        exercises: 17,
        id: 5,
      },
      {
        name: "Web Developer's Oath",
        exercises: 69,
        id: 6,
      },
    ],
  };

  return (
    <div>
      <h1>Half Stack Application Development</h1>
      <Content key={course.id} course={course.parts} />
    </div>
  );
};

export default App;
