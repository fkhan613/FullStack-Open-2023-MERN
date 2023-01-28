import Part from "./Part";

//create the content component
const Content = ({ course }) => {
  let parts = course;

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
