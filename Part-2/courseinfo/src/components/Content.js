import Part from "./Part";
import Total from "./Total";

//create the content component
const Content = ({ course }) => {
  let parts = course;

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      <Total parts={parts} />
    </div>
  );
};

export default Content;
