const Person = ({ name, number, remove, id}) => {
  return (
    <p>
      {name} : {number}{" "}
      <button onClick={() => remove({ name, id })}>Delete</button>
    </p>
  );
};

export default Person;
